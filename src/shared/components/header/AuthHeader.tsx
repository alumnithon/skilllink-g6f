import { useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const AuthHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="absolute top-6 left-6 z-10">
      {/* Logo clickeable */}
      <button
        onClick={handleLogoClick}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
      >
        <Rocket className="w-8 h-8 text-theme-button-primary" />
        <h1 className="text-2xl lg:text-3xl font-bold text-theme-text-dark">
          SkillLink
        </h1>
      </button>
    </div>
  );
};

export default AuthHeader;
