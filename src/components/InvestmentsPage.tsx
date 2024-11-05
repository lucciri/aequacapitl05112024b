import React from 'react';
import { Plus, Filter, Download } from 'lucide-react';

const investments = [
  {
    name: 'TechVision AI',
    type: 'Growth Equity',
    sector: 'Technology',
    invested: '$25M',
    currentValue: '$45M',
    irr: '32.5%',
    multiple: '1.8x',
    status: 'Active',
    stage: 'Series C'
  },
  {
    name: 'HealthCore Systems',
    type: 'Buyout',
    sector: 'Healthcare',
    invested: '$50M',
    currentValue: '$75M',
    irr: '28.3%',
    multiple: '1.5x',
    status: 'Active',
    stage: 'Late Stage'
  },
  {
    name: 'GreenEnergy Solutions',
    type: 'Growth Equity',
    sector: 'Clean Energy',
    invested: '$30M',
    currentValue: '$42M',
    irr: '25.7%',
    multiple: '1.4x',
    status: 'Active',
    stage: 'Series B'
  }
];

const InvestmentsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Investment Portfolio</h1>
        <div className="flex space-x-3">
          <button className="btn btn-outline flex items-center gap-2">
            <Filter size={16} />
            Filter
          </button>
          <button className="btn btn-outline flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={16} />
            New Investment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sector
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invested
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IRR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Multiple
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment, index) => (
                <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                    <div className="text-sm text-gray-500">{investment.stage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.sector}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.invested}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.currentValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-green-600 font-medium">
                      {investment.irr}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.multiple}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {investment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;