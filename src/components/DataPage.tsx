import React from 'react';
import { Database, RefreshCcw, Upload, Download } from 'lucide-react';

const dataSources = [
  {
    id: 1,
    name: 'Investment Database',
    status: 'Connected',
    lastSync: '2024-03-15 14:30',
    records: '1,245',
    type: 'SQL Database'
  },
  {
    id: 2,
    name: 'Market Data Feed',
    status: 'Active',
    lastSync: '2024-03-15 15:45',
    records: '5,678',
    type: 'API'
  },
  {
    id: 3,
    name: 'Portfolio Analytics',
    status: 'Processing',
    lastSync: '2024-03-15 13:15',
    records: '892',
    type: 'Data Warehouse'
  },
  {
    id: 4,
    name: 'Risk Metrics',
    status: 'Connected',
    lastSync: '2024-03-15 12:00',
    records: '456',
    type: 'Real-time Feed'
  }
];

const DataPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Data Management</h1>
        <div className="flex space-x-3">
          <button className="btn btn-outline flex items-center gap-2">
            <Upload size={16} />
            Import
          </button>
          <button className="btn btn-outline flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Database size={16} />
            New Connection
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Sources</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Active Connections</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Data Points</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">1.2M</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Last Update</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">5m ago</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Records
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Sync
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataSources.map((source) => (
                <tr key={source.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Database className="text-gray-400 mr-3" size={20} />
                      <div className="text-sm font-medium text-gray-900">{source.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {source.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      source.status === 'Connected' ? 'bg-green-100 text-green-800' :
                      source.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {source.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {source.records}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {source.lastSync}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      <RefreshCcw size={16} />
                    </button>
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

export default DataPage;