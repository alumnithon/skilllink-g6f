import type { UserProfile } from '../services/profileService';

interface AboutSectionProps {
  profile: UserProfile;
}

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-4 font-Inter">
      <h2 className="text-xl font-bold text-gray-900 font-Inter mb-4">
        Acerca de mí
      </h2>

      <div className="text-gray-700 leading-relaxed font-Inter">
        <p>{profile.bio}</p>
      </div>
    </div>
  );
};

export default AboutSection;
