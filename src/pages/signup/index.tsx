import { TextField } from '@material-ui/core';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export const Signup = () => {
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push('/dashboard');
  };

  return (
    <div className="flex-1 flex flex-col items-center p-12">
      <h1 className="text-2xl font-semibold">Sign up</h1>
      <div className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <TextField name="firstName" label="First Name" fullWidth />
          <TextField name="lastName" label="Last Name" fullWidth />
          <TextField name="email" label="Email" fullWidth />
          <TextField name="password" label="Password" fullWidth />
          <div className="flex justify-between items-center my-6">
            <button
              className="bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 px-3 py-2"
              type="submit"
            >
              Sign up
            </button>
            <NavLink exact to="/signin" className="text-gray-800 font-semibold">
              Already have an account ?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
