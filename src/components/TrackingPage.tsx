import React, { useState } from 'react';
import { Clock, CheckCircle2, AlertCircle, XCircle, User2, Plus } from 'lucide-react';
import { useCollection } from '../hooks/useFirestore';
import type { Activity } from '../types';
import NewActivityModal from './modals/NewActivityModal';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-blue-500" size={20} />;
      case 'completed':
        return <CheckCircle2 className="text-green-500" size={20} />;
      case 'blocked':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {getStatusIcon(activity.status || 'pending')}
          <span className="font-medium text-gray-900">{activity.type}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClass(activity.priority || 'medium')}`}>
          {activity.priority || 'medium'}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{activity.notes}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User2 size={16} />
          <span>{activity.participants}</span>
        </div>
        <span>{new Date(activity.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

const TrackingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { documents: activities } = useCollection<Activity>('activities');

  const columns = [
    { title: 'Pending', status: 'pending' },
    { title: 'In Progress', status: 'in-progress' },
    { title: 'Completed', status: 'completed' },
    { title: 'Blocked', status: 'blocked' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Activity Tracking</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          <span>New Activity</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.status} className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">{column.title}</h2>
            <div className="space-y-3">
              {activities
                .filter(activity => (activity.status || 'pending') === column.status)
                .map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <NewActivityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TrackingPage;