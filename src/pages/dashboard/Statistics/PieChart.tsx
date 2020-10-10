import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface Props {
  title: string;
  data: { value: number; name: string }[];
}

export const PieChart: React.FC<Props> = ({ title, data }) => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    series: [
      {
        name: title,
        type: 'pie',
        radius: ['35%', '70%'],
        avoidLabelOverlap: false,
        data,
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
