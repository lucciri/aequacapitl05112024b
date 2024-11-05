import React from 'react';
import { Calendar, Phone, Users, Loader2 } from 'lucide-react';
import { useCollection } from '../hooks/useFirestore';
import type { Deal, Activity } from '../types';

const DealsPage: React.FC = () => {
  const { documents: deals, loading } = useCollection<Deal>('deals');

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Deals</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{deal.name}</h3>
                <p className="text-sm text-gray-500">{deal.stage}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                deal.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {deal.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar size={16} />
                <span className="text-sm">Last Activity: {new Date(deal.lastActivity).toLocaleDateString()}</span>
              </div>
              {deal.contactName && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users size={16} />
                  <span className="text-sm">{deal.contactName}</span>
                </div>
              )}
              {deal.contactEmail && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={16} />
                  <span className="text-sm">{deal.contactEmail}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Deal Size</p>
                <p className="font-medium">{deal.dealSize ? `$${deal.dealSize}M` : 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-medium">{deal.industry || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">EBITDA</p>
                <p className="font-medium">{deal.ebitda ? `$${deal.ebitda}M` : 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">TEV/EBITDA</p>
                <p className="font-medium">{deal.tevEbitda?.toFixed(1) || 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}

        {deals.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-gray-500">No deals found. Click "New Investment" to add your first deal.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealsPage;