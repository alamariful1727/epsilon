import React, { useEffect, useState } from 'react';
import { ExportingTable } from './ExportingTable';

interface ITableData {
  name: string;
  startingAt: string;
  endingAt: string;
  budget: number;
}

export const Export = () => {
  const [data, setData] = useState<ITableData[]>([]);

  useEffect(() => {
    setData([
      {
        name: 'Alexys',
        startingAt: new Date('Fri Jul 31 2020 10:59:09 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Fri Sep 10 2021 08:54:21 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 308000,
      },
      {
        name: 'Leonora',
        startingAt: new Date('Wed Sep 30 2020 15:36:53 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Thu Sep 23 2021 02:18:21 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 803000,
      },
      {
        name: 'Wilford',
        startingAt: new Date('Fri Mar 06 2020 21:36:22 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Sat Oct 02 2021 06:49:25 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 668000,
      },
      {
        name: 'Francisca',
        startingAt: new Date('Wed Sep 02 2020 12:26:46 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Thu Aug 19 2021 15:57:23 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 68000,
      },
      {
        name: 'Jacklyn',
        startingAt: new Date('Sun Apr 26 2020 06:20:31 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Thu Jul 29 2021 03:25:43 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 974000,
      },
      {
        name: 'Micheal',
        startingAt: new Date('Wed May 20 2020 00:27:45 GMT+0600 (Bangladesh Standard Time)').toLocaleDateString(),
        endingAt: new Date('Sat Jul 17 2021 10:19:38 GMT+0600 (Bangladesh Standard Time)').toDateString(),
        budget: 287000,
      },
    ]);
  }, []);

  return <ExportingTable data={data} />;
};
