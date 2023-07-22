import React, { createContext, useReducer, useContext, useCallback, useEffect } from 'react';
import post from '../api/post';
import get from '../api/get';
import toast, { Toaster } from 'react-hot-toast';
import { API_SEND_OTP, API_RESET_PASSWORD, API_VERIFY_OTP } from '../constants';
import { useNavigate } from 'react-router-dom';

const ChangePasswordContext = createContext();

const useChangePassword = () => useContext(ChangePasswordContext);

const initialState = {
  isLoading: false,
  isOtpSent: false,
  isOtpVerified: false,
  user_email: null,
  user_otp: null
};

function reducer(state, action) {
  const { type, ...payload } = action;
  switch (type) {
    case 'SENDING_OTP':
      return { ...state, isLoading: true };

    case 'OTP_SENT':
      return { ...state, isLoading: false, isOtpSent: true };

    case 'VERIFYING_OTP':
      return { ...state, isLoading: true };
    case 'OTP_VERIFIED':
      return { ...state, isLoading: false, isOtpVerified: true, ...payload };

    case 'CHANGING_PASSWORD':
      return { ...state, isLoading: true };
    case 'PASSWORD_CHANGED':
      return { ...state, isLoading: false };

    case 'ERROR':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

function ChangePasswordProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSendOtp = useCallback(async (data) => {
    dispatch({ type: 'SENDING_OTP' });
    try {
      let resp = {};

      resp = await post(API_SEND_OTP, data);
      if ([200].includes(resp.status)) {
        toast.success(<p>{resp.data.message}</p>);

        dispatch({ type: 'OTP_SENT' });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong when sending OTP.'
        });
        toast.error(resp.data.message);
      }
    } catch (err) {
      toast.error(`Something went wrong when sending OTP.`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  const handleVerifyOtp = useCallback(async (data) => {
    dispatch({ type: 'VERIFYING_OTP' });
    try {
      let resp = {};
      console.log(data);
      resp = await get(API_VERIFY_OTP, data);
      console.log(resp);
      if (resp.message === 'OTP Verified..') {
        toast.success(<p>{resp.message}</p>);

        dispatch({ type: 'OTP_VERIFIED', user_email: data.email, user_otp: data.otp });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong when resetting the password.'
        });
        toast.error(resp.data.message);
      }
    } catch (err) {
      toast.error(`${err} Something went wrong when sending OTP.`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  const handleChangePassword = useCallback(async (data) => {
    dispatch({ type: 'CHANGING_PASSWORD' });
    try {
      let resp = {};

      resp = await post(API_RESET_PASSWORD, data);
      if ([200].includes(resp.status)) {
        toast.success(<p>{resp.data.message}</p>);
        navigate('/login');
        dispatch({ type: 'PASSWORD_CHANGED' });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong when resetting the password.'
        });
        toast.error(resp.data.message);
      }
    } catch (err) {
      toast.error(`Something went wrong when sending OTP.`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  useEffect(() => {
    console.log(state.user_email, state.user_otp);
  }, [state.isOtpVerified]);

  return (
    <ChangePasswordContext.Provider
      value={{
        ...state,
        dispatch,
        handleSendOtp,
        handleChangePassword,
        handleVerifyOtp
      }}>
      <Toaster />
      {children}
    </ChangePasswordContext.Provider>
  );
}

export { ChangePasswordProvider, useChangePassword };
