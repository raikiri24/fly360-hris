import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import Logo1 from '../../assets/nav-icon-home.svg';

function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-1/2">
        <h1 className="text-black uppercase drop-shadow-3xl sm:text-4xl text-2xl text-left mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-left">Hello, please enter your credentials!</p>

        <form className="flex max-w-md flex-col gap-4 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Username:" />
            </div>
            <TextInput id="email1" placeholder="name@flowbite.com" required type="email" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password:" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="bg-teal-500 hover:bg-blue-700 text-white">
            Sign In
          </Button>
        </form>
      </div>

      <div className="bg-teal-500 w-1/2 flex justify-center items-center">
        <a href="/">
          <img src={Logo1} alt="Large Logo" className="w-64 h-64" />
        </a>
      </div>
    </div>
  );
}

export default Login;
