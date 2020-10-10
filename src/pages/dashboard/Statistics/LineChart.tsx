import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface Props {
  title: string;
  xTitle: string;
  yTitle: string;
  data: {
    x: string[];
    y: number[];
  };
}

export const LineChart: React.FC<Props> = ({ title, xTitle, yTitle, data }) => {
  const option = {
    color: ['#003366'],
    legend: {},
    grid: {
      // top: '50', // ? use this, if you use title
      top: '25', // ? use this, if you use legend
      right: '10',
      bottom: '40',
      left: '55',
    },
    xAxis: {
      name: xTitle,
      nameLocation: 'middle',
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 30,
        color: '#003366',
      },
      type: 'category', // ? value, category, time, log
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 10,
        color: '#666',
      },
      data: data.x,
    },
    yAxis: {
      name: yTitle,
      nameLocation: 'middle',
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 30,
        color: '#003366',
      },
      nameGap: 27,
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 10,
        color: '#666',
        formatter: (value: number, index: any) => {
          let formattedValue = value / 1000;
          return `${formattedValue.toFixed(1)}K`;
        },
        padding: 0,
      },
    },
    series: [
      {
        name: 'Income per year',
        data: data.y,
        type: 'line',
      },
    ],
  };
  return (
    <div className="mb-6">
      <h1 className="font-semibold text-lg text-gray-800">{title}</h1>
      <ReactEcharts option={option} showLoading={false} notMerge={true} />
    </div>
  );
};
