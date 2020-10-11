import { TextField } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const ItemDetails = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Item verified !!');
    history.push('/dashboard/verify-items');
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <img className="w-full" src="https://source.unsplash.com/random/200x200?sig=1" alt={title} />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold mb-6">Verify Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField name="title" label="title" fullWidth value={title} />
          <button className="bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 px-3 py-2 my-6">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
