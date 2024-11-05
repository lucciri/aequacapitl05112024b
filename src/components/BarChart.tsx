import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1', value1: 400, value2: 240 },
  { name: 'Q2', value1: 300, value2: 139 },
  { name: 'Q3', value1: 200, value2: 980 },
  { name: 'Q4', value1: 278, value2: 390 },
];

const BarChart: React.FC = () => {
  return (
    <div className="h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Investment Performance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value1" fill="#3B82F6" />
          <Bar dataKey="value2" fill="#10B981" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;