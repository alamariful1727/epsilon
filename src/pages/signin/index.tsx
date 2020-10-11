import { TextField } from '@material-ui/core';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export const Signin = () => {
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push('/dashboard');
  };

  return (
    <div className="flex-1 flex flex-col items-center p-12">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <div className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <TextField name="email" label="Email" fullWidth />
          <TextField name="password" label="Password" fullWidth />
          <div className="flex justify-between items-center my-6">
            <button className="bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 px-3 py-2">
              Sign in
            </button>
            <NavLink exact to="/signup" className="text-gray-800 font-semibold">
              Sing up here !!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
