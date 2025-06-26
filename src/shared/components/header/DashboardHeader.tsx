import { useNavigate } from 'react-router-dom';
import { Rocket, Bell, Settings, User, ChevronDown, MoreVertical } from 'lucide-react';
import useAuthStore from '../../../features/auth/store/useAuthStore';

const DashboardHeader = () => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Para usuarios autenticados, ir al panel en lugar del inicio público
    navigate('/panel');
  };

  return (
    <header className="bg-gradient-to-r from-theme-button-primary to-theme-button-secondary shadow-lg backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          <button
            onClick={() => window.dispatchEvent(new Event('openSidebar'))}
            className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 mr-4"
           >
            <MoreVertical className="w-5 h-5" />
           </button>

          {/* Logo clickeable que va al PANEL */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <Rocket className="w-8 h-8 text-white" />
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              SkillLink
            </h1>
          </button>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
              <Bell className="w-5 h-5" />
            </button>

            {/* Settings */}
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
              <Settings className="w-5 h-5" />
            </button>

            {/* User Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-3 px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">
                    {user?.fullName || 'Usuario'}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <button
                    onClick={() => navigate('/perfil')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Mi Perfil
                  </button>
                  <button
                    onClick={() => navigate('/configuracion')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Configuración
                  </button>
                  <hr className="my-1" />
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
