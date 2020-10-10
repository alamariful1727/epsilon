import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ItemDetails } from './Details';
import { VerifyingTable } from './VerifyingTable';

interface ITableData {
  title: string;
  thumbnailUrl: string;
}

export const Verify = () => {
  let { path, url } = useRouteMatch();
  const [data, setData] = useState<ITableData[]>([]);

  useEffect(() => {
    setData([
      {
        title: 'A',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=1',
      },
      {
        title: 'B',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=2',
      },
      {
        title: 'C',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=3',
      },
      {
        title: 'D',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=4',
      },
      {
        title: 'E',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=5',
      },
      {
        title: 'F',
        thumbnailUrl: 'https://source.unsplash.com/random/200x200?sig=6',
      },
    ]);
  }, []);

  return (
    <div className="">
      <Switch>
        <Route exact path={path}>
          <VerifyingTable data={data} url={url} />
        </Route>
        <Route path={`${path}/details/:itemName`}>
          <ItemDetails />
        </Route>
      </Switch>
    </div>
  );
};
