import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string; // Optional error message to display
  register: UseFormRegisterReturn;
  labelColor?: string;
  inputBg?: string;
}

const InputField = ({
  label,
  type,
  placeholder,
  error,
  register,
  labelColor = 'text-theme-text-primary', // Default
  inputBg = 'bg-transparent', // Default
}: InputFieldProps) => {
  return (
    <div>
      <label className={`block mb-1 font-medium ${labelColor}`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border border-theme-border-primary rounded-lg px-4 py-2.5 placeholder-theme-placeholder-primary focus:outline-none focus:ring-2 focus:ring-theme-button-primary focus:border-transparent transition-all text-sm ${inputBg}`}
        {...register}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
