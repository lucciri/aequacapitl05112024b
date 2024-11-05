import React, { useState } from 'react';
import IndustryDistribution from './charts/IndustryDistribution';
import PerformanceMetrics from './charts/PerformanceMetrics';
import InvestmentTable from './tables/InvestmentTable';
import SimpleMap from './SimpleMap';
import NewInvestmentModal from './modals/NewInvestmentModal';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <span className="text-gray-600">
            Welcome, {user?.displayName || 'User'}
          </span>
        </div>
        <div className="flex space-x-4">
          <button className="btn btn-outline">Export</button>
          <button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            New Investment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <IndustryDistribution />
        <PerformanceMetrics />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <InvestmentTable />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SimpleMap />
      </div>

      <NewInvestmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;