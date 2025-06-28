import { useState } from 'react';

interface SelectDropdownProps {
  value: string | null;
  onChange: (value: string) => void;
  error?: string;
}

const SelectDropdown = ({ value, onChange, error }: SelectDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setDropdownOpen(false);
  };
  return (
    <div>
      <label className="block mb-1 font-medium">Tipo de usuario</label>
      <div className="w-full bg-theme-bg-tertiary flex flex-col gap-4">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="relative w-full border border-theme-border-primary rounded-lg px-4 py-2 text-left"
        >
          <span id="selectedOption">
            {value === 'ROLE_MENTOR' ? 'Mentor' : 'Estudiante'}
          </span>
        </button>
        {dropdownOpen && (
          <div
            id="dropdown"
            className="absolute mt-12 bg-theme-bg-tertiary border border-theme-border-primary rounded-lg shadow-md z-10"
          >
            <div
              onClick={() => handleSelect('ROLE_USER')}
              className="p-4 hover:bg-theme-bg-secondary rounded-t-lg cursor-pointer border-b border-theme-border-primary"
            >
              <div className="flex items-center gap-2">
                <span>🎓</span>
                <span>Estudiante</span>
              </div>
              <p className="text-sm text-gray-500">
                Aprende y desarrolla nuevas habilidades
              </p>
            </div>
            <div
              onClick={() => handleSelect('ROLE_MENTOR')}
              className="p-4 hover:bg-theme-bg-secondary rounded-b-lg cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>👨‍🏫</span>
                <span>Mentor</span>
              </div>
              <p className="text-sm text-gray-500">
                Comparte tu conocimiento y experiencia
              </p>
            </div>
          </div>
        )}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default SelectDropdown;
