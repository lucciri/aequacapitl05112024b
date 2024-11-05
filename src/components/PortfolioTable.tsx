import React from 'react';
import type { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  {
    asset: 'Aero Corp',
    industry: 'Industrials',
    country: 'United States',
    tev: '$175.50',
    equityValue: '$132.80',
    ltmRevenue: '$140.37',
    ltmEbitda: '$120.65',
    totalDebt: '$156.91',
    netDebt: '$142.25',
  }
];

const PortfolioTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(portfolioData[0]).map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {portfolioData.map((row, index) => (
            <tr key={`row-${index}`}>
              {Object.values(row).map((value, i) => (
                <td
                  key={`cell-${index}-${i}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;