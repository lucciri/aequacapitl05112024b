import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  BarChart3, 
  Map, 
  FileText, 
  Database,
  Settings,
  ListTodo,
  Briefcase,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Briefcase, label: 'My Deals', id: 'deals' },
  { icon: GitBranch, label: 'Cross Team Pipeline', id: 'pipeline' },
  { icon: PieChart, label: 'Investments', id: 'investments' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Map, label: 'Geography', id: 'geography' },
  { icon: ListTodo, label: 'Activity Tracking', id: 'tracking' },
  { icon: FileText, label: 'Documents', id: 'documents' },
  { icon: Database, label: 'Data', id: 'data' },
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Settings, label: 'Settings', id: 'settings' }
];

const Sidebar: React.FC<SidebarProps> = ({ onPageChange, currentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && <h1 className="text-xl font-bold text-gray-800">ÆquaCapital</h1>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} space-x-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg mb-1 ${
              currentPage === item.id ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}

        <button
          onClick={handleSignOut}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mb-1 mt-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm9.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L11.414 12H15a1 1 0 100-2h-3.586l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;