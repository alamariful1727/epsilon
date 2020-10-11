import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // TODO: Use a logic for Global State
  useEffect(() => {
    setIsLogin(location.pathname.split('/')[1] === 'dashboard');
  }, [location.pathname]);

  return (
    <header className="flex justify-between items-center bg-gray-800 px-3 py-3">
      <NavLink exact to="/">
        <h6 className="font-bold text-2xl text-gray-300">Epsilon</h6>
      </NavLink>

      <div className="flex justify-between items-center space-x-2">
        {isLogin ? (
          <NavLink exact to="/" className="block">
            <button className="bg-gray-300 font-semibold px-3 py-2 rounded-md hover:bg-gray-400">Logout</button>
          </NavLink>
        ) : (
          <>
            <NavLink exact to="/signup" className="block">
              <button className="bg-gray-300 font-semibold px-3 py-2 rounded-md hover:bg-gray-400">Sign up</button>
            </NavLink>
            <NavLink exact to="/signin" className="block">
              <button className="bg-gray-300 font-semibold px-3 py-2 rounded-md hover:bg-gray-400">Sing in</button>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};
