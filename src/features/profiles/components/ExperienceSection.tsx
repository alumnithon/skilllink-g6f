import { Building2 } from 'lucide-react';
import type { MentorProfile } from '../services/profileService';

interface ExperienceSectionProps {
  profile: MentorProfile;
}

const ExperienceSection = ({ profile }: ExperienceSectionProps) => {
  const experienceArray = Array.isArray(profile.experience)
    ? profile.experience
    : profile.experience
      ? [
          {
            title: 'Experiencia Profesional',
            company: 'Múltiples empresas',
            period: 'Varios años',
            description: profile.experience,
          },
        ]
      : [];

  if (!experienceArray || experienceArray.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-4 font-Inter">
      <h2 className="text-xl font-bold text-gray-900 font-Inter mb-4">
        Experiencia
      </h2>

      <div className="space-y-4">
        {experienceArray.map((exp, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-1 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              <Building2 className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 font-Inter">
                {exp.title}
              </h3>
              <p className="text-sm text-theme-button-primary font-medium font-Inter">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 font-Inter mt-1">
                {exp.period}
              </p>
              {exp.description && (
                <p className="text-sm text-gray-600 font-Inter mt-2">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
