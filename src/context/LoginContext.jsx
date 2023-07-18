import React, { createContext, useReducer, useContext, useCallback, useEffect } from 'react';
import post from '../api/post';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { API_AUTH, TOKEN_KEY } from '../constants';
import getCookie from '../util/cookie';
import { clearCookies } from '../util/cookie';

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
  const cookie = getCookie(TOKEN_KEY);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCookies();
    navigate('/login');
  };
  const redirectIn = (hash = '') => {
    navigate(`/${hash}`);
  };

  const handleLogin = useCallback(async (data) => {
    dispatch({ type: 'LOGGING_IN' });
    try {
      let resp = {};

      resp = await post(API_AUTH, data);
      if ([200].includes(resp.status)) {
        navigate('/');
        let { token } = resp.data;
        document.cookie = `${TOKEN_KEY}=${token}`;
        toast.success(
          <p>
            Welcome <b>System Admin!</b>
          </p>
        );
        localStorage.setItem('isLoggedIn', true);
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
  const validateLogin = useCallback(() => {
    const data = parseJwt(cookie);
    let isValid = false;
    let expiry = null;
    let role = null;

    if (data) {
      expiry = new Date(new Date(data.exp * 1000));

      if (new Date() <= expiry) {
        isValid = true;
        role = data?.role;
      }
    }

    return { isValid, role };
  }, [cookie]);

  useEffect(() => {
    const { isValid } = validateLogin();

    if (!isValid) {
      handleLogout();
      return;
    } else {
      redirectIn();
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        ...state,
        dispatch,
        handleLogin,
        handleLogout
      }}>
      <Toaster />
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, useLogin };
