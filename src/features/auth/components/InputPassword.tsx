import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputPasswordProps {
  error?: string; // Optional error message to display
  register: UseFormRegisterReturn;
}

const InputPassword = ({ error, register }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? 'text' : 'password';

  return (
    <div>
      <label className="block mb-1 font-medium text-theme-text-primary">
        Contraseña
      </label>
      <div className="flex items-center justify-end relative">
        <input
          type={inputType}
          placeholder="Enter your password"
          className="w-full border border-theme-border-primary rounded-lg px-4 py-2 placeholder-theme-placeholder-primary"
          {...register}
        />
        <button
          type="button"
          className="absolute right-0 mr-2 text-theme-text-primary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Eye className="text-theme-placeholder-primary" />
          ) : (
            <EyeClosed className="text-theme-placeholder-primary" />
          )}
        </button>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputPassword;
