// src/shared/components/SideBar.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Search,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  User,
  ChevronDown,
  Edit,
  Bell,
  Settings,
} from 'lucide-react';

import { ButtonLogout, ButtonProfileOption } from './Button';

interface SidebarProps {
  userType: 'estudiante' | 'mentor';
  userName: string;
  notifications: number;
  unreadMessages: number;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  userType,
  userName,
  notifications,
  unreadMessages,
  onLogout,
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const menuItemsEstudiante = [
    { name: 'Inicio', icon: <Home className="w-[0.9375rem] h-[0.9375rem]" />, path: 'inicio' },
    { name: 'Explorar', icon: <Search className="w-[0.9375rem] h-[0.9375rem]" />, path: 'oportunidades' },
    { name: 'Mentores', icon: <Users className="w-[0.9375rem] h-[0.9375rem]" />, path: 'conexiones' },
    { name: 'Mi Aprendizaje', icon: <BookOpen className="w-[0.9375rem] h-[0.9375rem]" />, path: 'aprendizaje' },
    { name: 'Mis Sesiones', icon: <Calendar className="w-[0.9375rem] h-[0.9375rem]" />, path: 'sesiones' },
    { name: 'Mensajes', icon: <MessageCircle className="w-[0.9375rem] h-[0.9375rem]" />, path: 'mensajes' },
  ];

  const menuItemsMentor = [
    { name: 'Inicio', icon: <Home className="w-[0.9375rem] h-[0.9375rem]" />, path: 'inicio' },
    { name: 'Mis Oportunidades', icon: <Search className="w-[0.9375rem] h-[0.9375rem]" />, path: 'oportunidades' },
    { name: 'Mis Conexiones', icon: <Users className="w-[0.9375rem] h-[0.9375rem]" />, path: 'conexiones' },
    { name: 'Mis Sesiones', icon: <Calendar className="w-[0.9375rem] h-[0.9375rem]" />, path: 'sesiones' },
    { name: 'Mensajes', icon: <MessageCircle className="w-[0.9375rem] h-[0.9375rem]" />, path: 'mensajes' },
  ];

  const menuItems = userType === 'mentor' ? menuItemsMentor : menuItemsEstudiante;

  const basePath = `/panel/${userType}`;

  return (
    <aside
      className="
        w-[220px]
        bg-white
        flex
        flex-col
        h-auto
        lg:h-auto
        md:h-[calc(100vh-4rem-3rem)]
        md:overflow-y-auto
        md:scrollbar-none
      "
    >
      <div className="flex flex-col p-4">
        <h1 className="text-[#5865F2] text-[1.3rem] font-bold font-mono text-center mb-[1.5rem] mt-[1.5rem] tracking-wide leading-snug">
          Bienvenido {userName}
        </h1>

        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={`${basePath}/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-[0.5rem] bg-transparent border-[0.025rem] border-[#E5E7EB] text-left text-gray-700 hover:bg-[#F3F4F6] text-[0.9375rem] font-bold rounded p-[0.70rem] w-[12rem] mx-auto ${
                  isActive ? 'bg-[#E5E7EB]' : ''
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
              {item.name === 'Mensajes' && unreadMessages > 0 && (
                <span className="ml-auto bg-[#6B7280] text-[#FFFFFF] text-[0.625rem] font-bold rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                  {unreadMessages}
                </span>
              )}
            </NavLink>
          ))}

          <div>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-[0.5rem] bg-transparent border-[0.025rem] border-[#E5E7EB] text-left text-gray-700 hover:bg-[#F3F4F6] text-[0.9375rem] font-bold rounded p-[0.70rem] w-[12rem] mx-auto"
            >
              <User className="w-[0.9375rem] h-[0.9375rem] rounded-full border border-[#000000]" />
              <span>Mi Perfil</span>
              <ChevronDown
                className={`ml-auto w-[0.9375rem] h-[0.9375rem] transition-transform ${
                  showProfileMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showProfileMenu && (
              <div className="mt-2 bg-gray-50 rounded shadow-md p-[0.5rem] w-[12rem] mx-auto">
                <ButtonProfileOption
                  title="Cuenta"
                  onClick={() => console.log('Cuenta')}
                  styles="flex items-center gap-[0.375rem]"
                  icon={<Edit className="w-[0.9375rem] h-[0.9375rem]" />}
                />
                <ButtonProfileOption
                  title="Editar Perfil"
                  onClick={() => console.log('Editar Perfil')}
                  styles="flex items-center gap-[0.375rem]"
                  icon={<Settings className="w-[0.9375rem] h-[0.9375rem]" />}
                />
                <ButtonProfileOption
                  title={`Notificaciones (${notifications})`}
                  onClick={() => console.log('Notificaciones')}
                  styles="flex items-center gap-[0.375rem]"
                  icon={<Bell className="w-[0.9375rem] h-[0.9375rem]" />}
                />
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="p-4 mt-10 lg:mt-auto">
        <ButtonLogout title="Salir" onClick={onLogout} />
      </div>
    </aside>
  );
};

export default Sidebar;

