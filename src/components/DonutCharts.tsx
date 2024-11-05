import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data1 = [
  { name: 'Series A', value: 60, color: '#3B82F6' },
  { name: 'Series B', value: 40, color: '#F59E0B' },
];

const data2 = [
  { name: 'Growth', value: 45, color: '#10B981' },
  { name: 'Value', value: 55, color: '#6366F1' },
];

const DonutCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-[300px]">
      <div>
        <h3 className="text-sm font-semibold mb-2">Investment Stage</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Investment Strategy</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutCharts;