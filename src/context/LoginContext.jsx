import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
  useState
} from 'react';
import post from '../api/post';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { API_AUTH, TOKEN_KEY } from '../constants';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';

const LoginContext = createContext();

const useLogin = () => useContext(LoginContext);

const initialState = {
  isLoading: false,
  isLoggedIn: false
};
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'LOGGING_IN':
      return { ...state, isLoading: true };
    case 'LOGGED_IN':
      return { ...state, isLoading: false };
    case 'ERROR':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

function LoginProvider({ children }) {
  const [userName, setUserName] = useState(localStorage.getItem('user'));
  const [userImg, setUserImg] = useState(localStorage.getItem('user_img'));

  const cookies = new Cookies();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove('jwt_authorization');
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('user_img');
    navigate('/login');
  };
  const redirectIn = (hash = '') => {
    navigate('/hrms');
  };

  const handleLogin = useCallback(async (data) => {
    dispatch({ type: 'LOGGING_IN' });
    try {
      let resp = {};

      resp = await post(API_AUTH, data);
      if ([200].includes(resp.status)) {
        let { token, user, image } = resp.data;

        const decoded = jwt(token);
        setUser(decoded);

        cookies.set('jwt_authorization', token, {
          expires: new Date(decoded.exp * 1000)
        });

        toast.success(
          <p>
            Welcome <b>{user}!</b>
          </p>
        );
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', user);
        localStorage.setItem('user_img', image);
        redirectIn();
        dispatch({ type: 'LOGGED_IN' });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong when logging in'
        });
        toast.error('Username and password does not match!');
      }
    } catch (err) {
      toast.error(`${err} Username and password does not match!`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  useEffect(() => {
    const cookie = cookies.get('jwt_authorization');

    if (cookie) {
      const decoded = jwt(cookie);
      if (new Date() <= new Date(decoded.exp * 1000)) {
        setUser(decoded);
      } else {
        handleLogout();
      }
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        ...state,
        dispatch,
        handleLogin,
        handleLogout,
        user,
        userName,
        userImg
      }}>
      <Toaster />
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, useLogin };
