import React, { useEffect, useState } from 'react';
import { Counts } from './Counts';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';

export const Statistics = () => {
  const [lineChartData, setLineChartData] = useState<{
    x: string[];
    y: number[];
  }>();

  const [pieChartData, setPieChartData] = useState<{ value: number; name: string }[]>();

  useEffect(() => {
    setLineChartData({
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      y: [10000, 20000, 30000, 10000, 20000, 30000, 10000, 20000, 30000, 10000, 20000, 30000],
    });

    setPieChartData([
      { value: 15, name: 'A' },
      { value: 35, name: 'B' },
      { value: 20, name: 'C' },
      { value: 40, name: 'D' },
    ]);
  }, []);

  return (
    <>
      <Counts />
      {lineChartData && <LineChart title="Income per year" xTitle="Month" yTitle="Money" data={lineChartData} />}
      {pieChartData && <PieChart title="Project categories" data={pieChartData} />}
    </>
  );
};
