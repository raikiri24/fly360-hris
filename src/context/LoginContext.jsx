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

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'LOGGING_IN':
      return { ...state, isLoading: true };
    case 'LOGGING_OUT':
      return { ...state, isLoading: true };
    case 'LOGGED_OUT':
      return { ...state, isLoading: false, isLoggedIn: false };
    case 'LOGGED_IN':
      return { ...state, isLoading: false };
    case 'ERROR':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

function LoginProvider({ children }) {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('user'));
  const [userImg, setUserImg] = useState(localStorage.getItem('user_img'));
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    dispatch({ type: 'LOGGING_OUT' });
    try {
      localStorage.removeItem('userInfo');
      cookies.remove(`${TOKEN_KEY}_test`);
      setUser(null);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      localStorage.removeItem('user_img');
      navigate('/login');
      dispatch({ type: 'LOGGED_OUT' });
    } catch (e) {
      toast.error(`OOPS THERE'S AN ISSUE`);
      dispatch({ type: 'ERROR' });
    }
  };
  const redirectIn = () => {
    navigate('/hrms');
  };

  const handleLogin = useCallback(async (data) => {
    dispatch({ type: 'LOGGING_IN' });
    try {
      let resp = {};

      resp = await post(API_AUTH, data);
      if ([200].includes(resp.status)) {
        let { token, user, image } = resp.data;
        localStorage.setItem('userInfo', JSON.stringify(resp.data));

        const decoded = jwt(token);
        setUser(decoded);

        cookies.set(`${TOKEN_KEY}_test`, token, {
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
      toast.error(`Username and password does not match!`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      if (user.token) {
        const decoded = jwt(user.token);
        if (new Date() <= new Date(decoded.exp * 1000)) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  useEffect(() => {
    setUserName(localStorage.getItem('user'));
    setUserImg(localStorage.getItem('user_img'));
  }, [user]);

  return (
    <LoginContext.Provider
      value={{
        ...state,
        dispatch,
        handleLogin,
        handleLogout,
        isAuthenticated,
        userName,
        userImg
      }}>
      <Toaster />
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, useLogin };
