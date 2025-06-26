import type { MentorProfile } from '../services/profileService';

interface InterestsSectionProps {
  profile: MentorProfile;
}

const InterestsSection = ({ profile }: InterestsSectionProps) => {
  // Función para obtener emoji basado en palabras clave (EXACTA del modal)
  const getEmojiForInterest = (interest: string) => {
    const lowerInterest = interest.toLowerCase();

    const emojiMap = {
      // Carrera/Trabajo
      'primer empleo': '🚀',
      empleo: '💼',
      trabajo: '💼',
      carrera: '🚀',
      entrevista: '🎯',
      transición: '🔄',
      cv: '📄',
      resume: '📄',
      networking: '🤝',

      // Tecnología
      react: '⚛️',
      javascript: '🟨',
      python: '🐍',
      web: '🌐',
      frontend: '🎨',
      backend: '⚙️',
      ecosistema: '🌐',
      desarrollo: '💻',
      programación: '💻',
      código: '💻',
      node: '🟢',
      angular: '🔴',
      vue: '💚',
      css: '🎨',
      html: '📄',
      docker: '🐳',
      kubernetes: '☸️',
      aws: '☁️',
      azure: '☁️',
      cloud: '☁️',

      // Soft skills y otros
      comunicación: '💬',
      liderazgo: '👑',
      teamwork: '🤝',
      equipo: '🤝',
      creatividad: '💡',
      innovación: '💡',
      'problem solving': '🧩',
      resolución: '🧩',
      diseño: '🎨',
      ux: '🎨',
      ui: '🎨',
      data: '📊',
      'machine learning': '🤖',
      ai: '🤖',
      'inteligencia artificial': '🤖',
      blockchain: '⛓️',
      devops: '🔧',
      testing: '🧪',
      qa: '🧪',
    };

    // Buscar coincidencias en el texto
    for (const [keyword, emoji] of Object.entries(emojiMap)) {
      if (lowerInterest.includes(keyword)) {
        return emoji;
      }
    }

    return '✨'; // Default
  };

  // Función para obtener color consistente por interés (EXACTA del modal)
  const getInterestColor = (interest: string) => {
    const colors = [
      'bg-purple-100 text-purple-700 border-purple-200',
      'bg-green-100 text-green-700 border-green-200',
      'bg-blue-100 text-blue-700 border-blue-200',
      'bg-orange-100 text-orange-700 border-orange-200',
      'bg-pink-100 text-pink-700 border-pink-200',
      'bg-indigo-100 text-indigo-700 border-indigo-200',
    ];

    let hash = 0;
    for (let i = 0; i < interest.length; i++) {
      hash = interest.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  if (!profile.interests || profile.interests.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-4 font-Inter">
      <h2 className="text-xl font-bold text-gray-900 font-Inter mb-4">
        Intereses
      </h2>

      {/* Ahora usando chips con colores y emojis como en el modal */}
      <div className="flex flex-wrap gap-2">
        {profile.interests.map((interest) => (
          <span
            key={interest}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getInterestColor(interest)}`}
          >
            <span className="text-base">{getEmojiForInterest(interest)}</span>
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;
