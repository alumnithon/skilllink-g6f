import { useEffect, useState } from 'react';
import useAuthStore from '../../auth/store/useAuthStore';
import Sidebar from '../../../shared/components/SideBar';
import Footer from '../../../shared/components/Footer';
import DashboardHeader from '../../../shared/components/header/DashboardHeader';
import axios from 'axios';

const DashboardPage = () => {

  const { user, isAuthenticated, logout } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    notifications: 0,
    unreadMessages: 0,
    oportunidades: 0,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarOpen]);

  useEffect(() => {
    if (isAuthenticated && user) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/dashboard/metrics?userId=${user.id}`)
        .then((response) => {
          setMetrics(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar métricas:', error);
          setLoading(false);
        });
    }
  }, [isAuthenticated, user]);

  if (loading) return <p className="text-center mt-8">Cargando...</p>;
  if (!user || !isAuthenticated) return <p className="text-center mt-8">No estás autenticado.</p>;

  const { notifications, unreadMessages, oportunidades } = metrics;

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <DashboardHeader />

      {/* Botón hamburguesa Responsive */}
      <button
        className="lg:hidden p-4"
        onClick={() => setSidebarOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex flex-1">
        {/* Sidebar Desktop */}
        <div className="hidden lg:flex">
          <Sidebar
            userType={user.role.toLowerCase() === 'mentor' ? 'mentor' : 'estudiante'}
            userName={user.fullName}
            notifications={notifications}
            unreadMessages={unreadMessages}
            onLogout={logout}
          />
        </div>

        {/* Sidebar Responsive para tablet y móvil */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="bg-white w-64 h-full shadow-lg p-4 overflow-y-auto scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                className="mb-4"
                onClick={() => setSidebarOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Sidebar
                userType={user.role.toLowerCase() === 'mentor' ? 'mentor' : 'estudiante'}
                userName={user.fullName}
                notifications={notifications}
                unreadMessages={unreadMessages}
                onLogout={logout}
              />
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <main className="flex-1 bg-[#36393F4D] pt-4 overflow-y-auto">
          <div className="bg-[#FFFFFFF7] p-8 max-w-[1100px] w-full rounded-lg shadow-sm mx-auto mt-4">
            <h1 className="text-2xl font-bold text-[#16A34A] mb-2">¡Hola {user.fullName}!</h1>

            {oportunidades > 0 || unreadMessages > 0 ? (
              <p className="text-[#4B5563]">
                Tienes{' '}
                {oportunidades > 0 &&
                  `${oportunidades} nueva${oportunidades > 1 ? 's' : ''} oportunidad${oportunidades > 1 ? 'es' : ''}`}
                {oportunidades > 0 && unreadMessages > 0 && ' y '}
                {unreadMessages > 0 &&
                  `${unreadMessages} mensaje${unreadMessages > 1 ? 's' : ''} ${
                    user.role.toLowerCase() === 'mentor' ? 'para mentorías' : 'de mentores'
                  }.`}
              </p>
            ) : (
              <p className="text-[#4B5563]">No tienes nuevas oportunidades ni mensajes por ahora.</p>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
