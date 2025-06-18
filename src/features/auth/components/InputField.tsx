import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string; // Optional error message to display
  register: UseFormRegisterReturn;
}

const InputField = ({
  label,
  type,
  placeholder,
  error,
  register,
}: InputFieldProps) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-theme-text-primary">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-theme-border-primary rounded-lg px-4 py-2 placeholder-theme-placeholder-primary"
        {...register} // Apply react-hook-form register properties
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
