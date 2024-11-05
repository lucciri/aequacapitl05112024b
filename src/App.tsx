import React from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DealsPage from './components/DealsPage';
import PipelinePage from './components/PipelinePage';
import InvestmentsPage from './components/InvestmentsPage';
import AnalyticsPage from './components/AnalyticsPage';
import GeographyPage from './components/GeographyPage';
import TrackingPage from './components/TrackingPage';
import DocumentsPage from './components/DocumentsPage';
import DataPage from './components/DataPage';
import SettingsPage from './components/SettingsPage';
import ProfilePage from './components/ProfilePage';
import { useAuth } from './hooks/useAuth';
import AuthPage from './components/AuthPage';
import EmailVerification from './components/EmailVerification';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  const { user } = useAuth();

  if (!user) {
    return <AuthPage />;
  }

  if (!user.emailVerified) {
    return <EmailVerification />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 overflow-auto">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'deals' && <DealsPage />}
        {currentPage === 'pipeline' && <PipelinePage />}
        {currentPage === 'investments' && <InvestmentsPage />}
        {currentPage === 'analytics' && <AnalyticsPage />}
        {currentPage === 'geography' && <GeographyPage />}
        {currentPage === 'tracking' && <TrackingPage />}
        {currentPage === 'documents' && <DocumentsPage />}
        {currentPage === 'data' && <DataPage />}
        {currentPage === 'settings' && <SettingsPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </main>
      <Toaster />
    </div>
  );
};

export default App;