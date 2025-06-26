import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import type { UserProfile } from '../services/profileService';

interface ContactSectionProps {
  profile: UserProfile;
}

const ContactSection = ({ profile }: ContactSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-4 font-Inter">
      <h2 className="text-xl font-bold text-gray-900 font-Inter mb-4">
        Contacto
      </h2>

      <div className="space-y-1">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <a
            href={`mailto:${profile.contactEmail}`}
            className="text-gray-700 font-Inter text-sm hover:text-theme-button-primary transition-colors"
          >
            {profile.contactEmail}
          </a>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <span className="text-gray-700 font-Inter text-sm">
            {profile.location}
          </span>
        </div>

        {profile.socialLinks.linkedin && (
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <a
              href={`https://linkedin.com/in/${profile.socialLinks.linkedin.replace(/^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/)?/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-Inter text-sm hover:text-blue-600 transition-colors"
            >
              {profile.socialLinks.linkedin}
            </a>
          </div>
        )}

        {profile.socialLinks.github && (
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Github className="w-5 h-5 text-gray-700 flex-shrink-0" />
            <a
              href={`https://${profile.socialLinks.github.replace(/^https?:\/\//, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-Inter text-sm hover:text-gray-900 transition-colors"
            >
              {profile.socialLinks.github}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
