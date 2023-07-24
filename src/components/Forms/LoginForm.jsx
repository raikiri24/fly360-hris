import React from 'react';
import { Form, ButtonToolbar, Button, Input, Checkbox } from 'rsuite';
import { useForm, Controller } from 'react-hook-form';
import { useLogin } from '../../context/LoginContext';
import { MoonLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const { handleLogin, isLoading } = useLogin();

  const { handleSubmit, control } = useForm({
    defaultValues: { username: '', password: '' },
    shouldUseNativeValidation: true
  });

  const onSubmit = async (data) => {
    if (!data.password) {
      toast.error('Password is required!');
    }
    if (!data.username) {
      toast.error('Username / Email is required!');
    }
    if (data.username && data.password) {
      handleLogin(data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="username" name="username">
          <Form.ControlLabel>Username/Email</Form.ControlLabel>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Form.Control
                onBlur={onBlur} // notify when input is touched/blur
                placeholder="Username / Email"
                onChange={onChange}
                value={value}
                name="username"
              />
            )}
            name="username"
          />

          <Form.HelpText className="ml-2">Username or Email is Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password" name="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
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
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="off"
              />
            )}
            name="password"
          />
        </Form.Group>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">
            <Form.Group>
              <Checkbox name="remember">
                <span className="ml-2">Remember Me</span>
              </Checkbox>
            </Form.Group>
          </div>
        </div>

        <Form.Group>
          <ButtonToolbar>
            <Button
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              appearance="primary"
              block
              className="bg-teal-500 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </ButtonToolbar>
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
              Web Bundy
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  );
};

export default LoginForm;
