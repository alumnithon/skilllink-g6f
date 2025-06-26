import { User, Info } from 'lucide-react';
import { useState } from 'react';
import type { MentorProfile, StudentProfile } from '../services/profileService';

interface ProfileHeaderProps {
  profile: MentorProfile | StudentProfile;
  onEditClick: () => void;
}

const ProfileHeader = ({ profile, onEditClick }: ProfileHeaderProps) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const isStudent = profile?.ocupation === 'Estudiante';

  const showTooltip = (id: string) => setActiveTooltip(id);
  const hideTooltip = () => setActiveTooltip(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-4 font-Inter">
      {/* Contenido principal */}
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden mb-4">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt="Avatar del usuario"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-12 h-12 text-white" />
          )}
        </div>

        {/* Nombre */}
        <h1 className="text-3xl font-extrabold text-theme-text-dark mb-1 font-Inter tracking-tight">
          {profile.fullName}
        </h1>

        {/* Role Badge */}
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 font-Inter ${
            isStudent
              ? 'bg-blue-100 text-blue-600'
              : 'bg-blue-100 text-blue-600'
          }`}
        >
          {profile.ocupation}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4 font-Inter">
          <span className="text-lg font-semibold text-amber-500">
            {profile.rating?.toFixed(1) || '4.8'}
          </span>
          <span className="text-sm text-amber-500">
            ({profile.reviewsCount || 0} reseñas)
          </span>
        </div>

        {/* Botón Editar perfil */}
        <button
          onClick={onEditClick}
          className="bg-theme-button-primary hover:bg-theme-button-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-6 font-Inter"
        >
          Editar perfil
        </button>

        {/* Estadísticas con Tooltips */}
        <div className="w-full border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-Inter">
            Estadísticas
          </h3>
          <div className="flex justify-center gap-8">
            {isStudent ? (
              <>
                {/* Cursos */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('courses')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.courses || 5}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">Cursos</div>

                  {/* Tooltip */}
                  {activeTooltip === 'courses' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Cursos completados y en progreso
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>

                {/* Proyectos */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('projects')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.projects || 7}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">
                    Proyectos
                  </div>

                  {activeTooltip === 'projects' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Proyectos desarrollados y publicados
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>

                {/* Mentorías */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('mentorships')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.mentorships || 3}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">
                    Mentorías
                  </div>

                  {activeTooltip === 'mentorships' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Sesiones de mentoría recibidas
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Estudiantes */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('students')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.students || 23}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">
                    Estudiantes
                  </div>

                  {activeTooltip === 'students' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Estudiantes mentoreados en total
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>

                {/* Proyectos */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('projects-mentor')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.projects || 8}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">
                    Proyectos
                  </div>

                  {activeTooltip === 'projects-mentor' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Proyectos guiados y supervisados
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>

                {/* Años Experiencia */}
                <div
                  className="text-center relative"
                  onMouseEnter={() => showTooltip('experience')}
                  onMouseLeave={hideTooltip}
                >
                  <div className="text-2xl font-bold text-theme-button-primary font-Inter cursor-help flex items-center justify-center gap-1">
                    {profile.statistics?.yearsExperience || 5}
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-Inter">
                    Años Experiencia
                  </div>

                  {activeTooltip === 'experience' && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap z-50">
                      Años de experiencia profesional
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
