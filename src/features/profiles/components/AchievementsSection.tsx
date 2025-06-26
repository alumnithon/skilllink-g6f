import type { MentorProfile } from '../services/profileService';

interface SkillsSectionProps {
  profile: MentorProfile;
}

const SkillsSection = ({ profile }: SkillsSectionProps) => {
  // Función para obtener color consistente por habilidad
  const getSkillColor = (skill: string) => {
    const colors = [
      'bg-blue-100 text-blue-700',
      'bg-orange-100 text-orange-700',
      'bg-green-100 text-green-700',
      'bg-red-100 text-red-700',
      'bg-purple-100 text-purple-700',
      'bg-yellow-100 text-yellow-700',
      'bg-indigo-100 text-indigo-700',
      'bg-pink-100 text-pink-700',
    ];

    // Hash simple del string para consistencia
    let hash = 0;
    for (let i = 0; i < skill.length; i++) {
      hash = skill.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-4 font-Inter">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-Inter">
          Habilidades
        </h2>
        <button className="text-theme-button-primary hover:text-theme-button-primary/80 text-sm font-medium transition-colors font-Inter">
          Editar
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-sm font-medium font-Inter ${getSkillColor(skill)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
