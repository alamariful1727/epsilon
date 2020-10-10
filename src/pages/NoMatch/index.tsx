import React from 'react';
import { useLocation } from 'react-router-dom';

export const NoMatch = () => {
  let location = useLocation();

  return (
    <div className="p-12">
      <h2 className="font-semibold text-red-600">
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  );
};
