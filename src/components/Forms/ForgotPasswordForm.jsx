import React, { useEffect, useState } from 'react';
import { Form, ButtonToolbar, Button, Input, Checkbox } from 'rsuite';
import { useForm, Controller } from 'react-hook-form';
import { useChangePassword } from '../../context/ForgotPasswordContext';
import { MoonLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import Logo1 from '../../assets/nav-icon-home.svg';

const ForgotPasswordForm = () => {
  const {
    handleSendOtp,
    isLoading,
    isOtpSent,
    isOtpVerified,
    handleChangePassword,
    handleVerifyOtp,
    user_email,
    user_otp
  } = useChangePassword();

  const { handleSubmit, control } = useForm({
    defaultValues: { email: '' },
    shouldUseNativeValidation: true
  });

  const onSubmit = async (data) => {
    if (!isOtpSent) {
      if (!data.email) {
        toast.error('Email is required!');
      } else {
        handleSendOtp(data);
      }
    } else {
      if (!data.email) {
        toast.error('Email is required!');
      }
      if (!data.otp) {
        toast.error('Email is required!');
      }
      if (data.email) {
        handleVerifyOtp(data);
      }
    }
  };

  const newPasswordOnSubmit = async (data) => {
    data.email = user_email;
    data.otp = user_otp;

    console.log(data);
    if (!data.email || !data.otp || !data.password) {
      toast.error('Please complete all required fields!');
    }
    if (data.password !== data.passwordVerify) {
      toast.error('Password Mismatch...');
    }
    if (data.email && data.otp && data.password === data.passwordVerify) {
      handleChangePassword(data);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#01413c] opacity-20 flex flex-col items-center justify-center">
          <MoonLoader
            color="white"
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-teal-500 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a
              className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#">
              <img
                src={Logo1}
                alt="Logo"
                className="w-10 h-10  top-4 left-4 rounded-lg bg-[#66A7A3] p-2 shadow-lg hidden lg:block"
              />
            </a>
          </div>
        </div>
      </nav>
      <div
        className="flex flex-col justify-center items-center h-screen bg-[#66A7A3] bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url('src/assets/FPLogo.png')`,
          backgroundColor: `rgba(102, 167, 163, 0.55)`
        }}>
        {!isOtpVerified && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            {!isOtpSent && (
              <div className="flex flex-col justify-center items-center h-96 max-w-lg  bg-gray-300 bg-opacity-90 p-4 rounded-lg shadow-lg">
                <h1 className=" text-3xl font-bold text-slate-900 mb-2">Trouble logging in?</h1>
                <p className="text-lg text-slate-900 mb-10">
                  No worries! We'll send you reset instructions
                </p>
                <Form.Group controlId="email" name="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Form.Control
                        onBlur={onBlur} // notify when input is touched/blur
                        placeholder="example@gmail.com"
                        onChange={onChange}
                        value={value}
                        type="email"
                        name="email"
                      />
                    )}
                    name="email"
                  />
                </Form.Group>

                <Form.Group>
                  <ButtonToolbar>
                    <Button
                      loading={isLoading}
                      disabled={isLoading}
                      type="submit"
                      appearance="primary"
                      block
                      className="bg-teal-500 hover:bg-blue-700 text-white">
                      Send OTP
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </div>
            )}

            {isOtpSent && (
              <div className="flex flex-col justify-center items-center h-48 max-w-lg  bg-gray-200 bg-opacity-90 p-4 rounded-lg shadow-lg">
                <Form.Group controlId="otp" name="otp">
                  <Form.ControlLabel className="text-3xl  text-center text-slate-900 mb-2">
                    OTP
                  </Form.ControlLabel>
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Form.Control
                        onBlur={onBlur} // notify when input is touched/blur
                        placeholder="Enter your OTP here..."
                        onChange={onChange}
                        value={value}
                        name="otp"
                      />
                    )}
                    name="otp"
                  />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button
                      loading={isLoading}
                      disabled={isLoading}
                      type="submit"
                      appearance="primary"
                      block
                      className="bg-teal-500 hover:bg-blue-700 text-white">
                      Verify OTP
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </div>
            )}
          </Form>
        )}
        {isOtpVerified && (
          <Form onSubmit={handleSubmit(newPasswordOnSubmit)}>
            <div className="flex flex-col justify-center items-center h-96 max-w-lg  bg-gray-200 bg-opacity-90 p-4 rounded-lg shadow-lg">
              <h1 className=" text-3xl font-bold text-slate-900 mb-8">Enter the New Password</h1>
              <Form.Group controlId="password" name="password">
                <Form.ControlLabel>New Password</Form.ControlLabel>
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Form.Control
                      onBlur={onBlur} // notify when input is touched/blur
                      onChange={onChange}
                      value={value}
                      type="password"
                      name="password"
                    />
                  )}
                  name="password"
                />
              </Form.Group>

              <Form.Group controlId="passwordVerify" name="passwordVerify">
                <Form.ControlLabel>Verify Password</Form.ControlLabel>
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Form.Control
                      onBlur={onBlur} // notify when input is touched/blur
                      onChange={onChange}
                      value={value}
                      type="password"
                      name="passwordVerify"
                    />
                  )}
                  name="passwordVerify"
                />
              </Form.Group>

              <Form.Group>
                <ButtonToolbar>
                  <Button
                    loading={isLoading}
                    disabled={isLoading}
                    type="submit"
                    appearance="primary"
                    block
                    className="bg-teal-500 hover:bg-blue-700 text-white">
                    Change Password
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};

export default ForgotPasswordForm;
