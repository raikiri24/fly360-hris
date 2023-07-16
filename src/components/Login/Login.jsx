import React from 'react';
import Logo1 from '../../assets/nav-icon-home.svg';
import { Form, ButtonToolbar, Button, Input, Checkbox } from 'rsuite';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-1/2">
        <h1 className="text-black uppercase drop-shadow-3xl sm:text-4xl text-2xl text-left mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-left mb-6">Hello, please enter your credentials!</p>

        <div className="flex flex-col justify-center items-center bg-white w-1/2">
          <Form>
            <Form.Group controlId="email">
              <Form.ControlLabel>Username/Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText tooltip>Username or Email is Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
              <Checkbox name="remember" className="text-sm">
                Remember Me
              </Checkbox>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  block
                  className="bg-teal-500 hover:bg-blue-700 text-white">
                  Sign In
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2"></div>
          <div className="flex-grow"></div>
          <a href="/" className="text-red-600 text-sm">
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="bg-teal-500 w-1/2 flex justify-center items-center ">
        <a href="/">
          <img src={Logo1} alt="Large Logo" className="w-96 h-96" />
        </a>
      </div>
    </div>
  );
};

export default Login;
