import { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import InterestsSection from '../components/InterestsSection';
import Breadcrumb from '../../../shared/components/Breadcrumb';
import { getMockProfile } from '../services/profileService';
import MentorshipSpecialties from '../components/InterestsSection';
import useAuthStore from '../../auth/store/useAuthStore';
import { useProfile } from '../hooks/useProfile';
import EditProfileModal from '../components/EditProfileModal';

const ProfilePage = () => {
  const { data: profile, isLoading, error } = useProfile();
  const { user } = useAuthStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  console.log('ProfilePage - User:', user);
  console.log('ProfilePage - Profile:', profile);
  console.log('ProfilePage - Loading:', isLoading);
  console.log('ProfilePage - Error:', error);

  // Usar mock directamente si no hay profile
  const finalProfile = profile || getMockProfile();

  if (isLoading) return <div>Cargando perfil...</div>;
  if (error) return <div>Error cargando perfil</div>;

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header fijo con breadcrumb y título - Espaciado reducido */}
      <div className="sticky top-0 bg-gray-50 z-10 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 font-Inter">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Título de página - Espacio reducido */}
          <h1 className="text-2xl lg:text-3xl font-bold text-green-600 font-Inter mt-1">
            Mi Perfil
          </h1>
        </div>
      </div>

      {/* Contenido scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 font-Inter">
          {/* Layout en columnas - Espaciado optimizado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Columna izquierda */}
            <div className="lg:col-span-1 space-y-4">
              <ProfileHeader
                profile={finalProfile}
                onEditClick={() => setIsEditModalOpen(true)}
              />
              <ContactSection profile={finalProfile} />
              {user?.role === 'MENTOR' && (
                <MentorshipSpecialties profile={finalProfile} />
              )}
              <InterestsSection profile={finalProfile} />
            </div>

            {/* Columna derecha */}
            <div className="lg:col-span-2 space-y-4">
              <AboutSection profile={finalProfile} />
              <SkillsSection profile={finalProfile} />
              <ExperienceSection profile={finalProfile} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal global */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={finalProfile}
        section="all"
      />
    </div>
  );
};

export default ProfilePage;
