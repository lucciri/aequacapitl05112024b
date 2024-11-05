import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import type { IndustryData } from '../types';

const data: IndustryData[] = [
  { name: 'Healthcare', value: 256.29, color: '#2563eb' },
  { name: 'Energy', value: 471.74, color: '#f59e0b' },
  { name: 'Information Technology', value: 343.22, color: '#10b981' },
  { name: 'Financial Services', value: 294.51, color: '#ef4444' },
  { name: 'Consumer Discretionary', value: 198.83, color: '#8b5cf6' }
];

const IndustryChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <h3 className="text-lg font-semibold mb-4">Total Value by Industry</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryChart;