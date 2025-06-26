// src/shared/components/header/DashboardHeader.tsx
import { useNavigate } from 'react-router-dom';
import { Rocket, Bell, Settings, User, ChevronDown, MoreVertical } from 'lucide-react';
import useAuthStore from '../../../features/auth/store/useAuthStore';
import { useState } from 'react';

interface DashboardHeaderProps {
  onEditProfile?: () => void;
}

const DashboardHeader = ({ onEditProfile }: DashboardHeaderProps) => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/panel');
  };

  return (
    <header className="bg-gradient-to-r from-theme-button-primary to-theme-button-secondary shadow-lg backdrop-blur-sm relative z-50">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Mobile toggle button */}
          <button
            onClick={() => window.dispatchEvent(new Event('openSidebar'))}
            className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 mr-4"
          >
            <MoreVertical className="w-6 h-6" />
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
            <button
              onClick={onEditProfile}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">
                    {user?.fullName || 'Usuario'}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transform opacity-100 visible translate-y-0">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        navigate('/perfil');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Mi Perfil
                    </button>
                    <button
                      onClick={() => {
                        navigate('/configuracion');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Configuración
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        logout();
                        navigate('/');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar dropdown al hacer click fuera */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default DashboardHeader;
