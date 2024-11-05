import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const deals = [
  {
    name: 'Boston Software',
    stage: '01 - Preliminary Data',
    criteria: '✓ Most criteria met',
    dealQuality: 'Private Founder',
    dealType: 'Growth Equity',
    industry: 'Information Technology > Software',
    subIndustry: 'CloudSaaS',
    dealSize: 88.5,
    ebitda: 37.000,
    tev: 124,
    tevEbitda: 3.4
  },
  {
    name: 'EMG Industries',
    stage: '02 - DD Internal',
    criteria: '✓ Most criteria met',
    dealQuality: 'Private Subsidiary',
    dealType: 'Buyout - LBO',
    industry: 'Industrials > Consumer & Engineering',
    subIndustry: 'Manufacturing',
    dealSize: 54.5,
    ebitda: 22.000,
    tev: 120,
    tevEbitda: 2.4
  }
];

const pipelineStatusData = [
  { name: 'Preliminary Data', value: 30 },
  { name: 'DD Internal', value: 25 },
  { name: 'DD Submitted', value: 15 },
  { name: 'Due Diligence', value: 20 },
  { name: 'LOI', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const CrossTeamPipeline = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Cross Team Pipeline</h1>
        <div className="flex space-x-3">
          <button className="btn btn-outline flex items-center gap-2">
            <Filter size={16} />
            Filter
          </button>
          <button className="btn btn-outline flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pipeline..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Pipeline Status</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pipelineStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pipelineStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Deal Size Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="dealSize" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Quality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Size ($M)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TEV/EBITDA</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deals.map((deal, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deal.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.stage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.criteria}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.dealQuality}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.dealType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.industry}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.dealSize}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deal.tevEbitda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrossTeamPipeline;