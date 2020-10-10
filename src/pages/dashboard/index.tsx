import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Export } from './export';
import { Statistics } from './Statistics';
import { Upload } from './upload';
import { Verify } from './verify';

export const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="flex-1 flex">
      <div className="w-64 h-full bg-gray-300 border-r border-gray-400">
        <div className="flex flex-col space-y-3 m-6">
          <NavLink exact to={url} className="text-gray-800 font-semibold hover:font-bold" activeClassName="font-bold">
            Dashboard
          </NavLink>
          <NavLink
            to={`${url}/upload`}
            className="text-gray-800 font-semibold hover:font-bold"
            activeClassName="font-bold"
          >
            Upload
          </NavLink>
          <NavLink
            to={`${url}/verify-items`}
            className="text-gray-800 font-semibold hover:font-bold"
            activeClassName="font-bold"
          >
            Verify Items
          </NavLink>
          <NavLink
            to={`${url}/export`}
            className="text-gray-800 font-semibold hover:font-bold"
            activeClassName="font-bold"
          >
            Export
          </NavLink>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Switch>
          <Route exact path={path}>
            <Statistics />
          </Route>
          <Route path={`${path}/upload`}>
            <Upload />
          </Route>
          <Route path={`${path}/verify-items`}>
            <Verify />
          </Route>
          <Route path={`${path}/export`}>
            <Export />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
