import { ButtonPrimary } from '../../../shared/components/Button';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';
import SelectDropdown from '../components/SelectDropdown';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/validationSchemas';
import InputPassword from '../components/InputPassword';
import { registerService } from '../services/authService';
import useAuthStore from '../store/useAuthStore';

const RegisterPage = () => {
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await registerService(data);
      setAuthenticated(response);
    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Error al registrarse. Por favor, verifica tus datos.');
    }
  });

  return (
    <AuthLayout
      title="Crea tu cuenta"
      description="Regístrate para comenzar a usar nuestra aplicación"
      imageUrl="https://images4.alphacoders.com/136/thumb-1920-1369866.png"
    >
      <form
        className="w-full bg-theme-bg-tertiary flex flex-col gap-4"
        onSubmit={onSubmit}
      >
        <InputField
          label="Nombre Completo"
          type="name"
          placeholder="Ingresa tu Nombre Completo"
          register={register('name', { required: true })}
          error={errors.name?.message}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Ingresa tu email"
          register={register('email', { required: true })}
          error={errors.email?.message}
        />
        <InputPassword
          register={register('password', { required: true })}
          error={errors.password?.message}
        />
        <Controller
          name="role"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <SelectDropdown
              value={field.value || ''}
              onChange={field.onChange}
              error={errors.role?.message}
            />
          )}
        />
        <ButtonPrimary title="Registrate" styles="mt-3" />
        <p className="flex gap-2 flex-wrap justify-center text-center text-sm text-gray-500 mt-2">
          ¿Ya tienes una cuenta?{' '}
          <Link
            to="/iniciar-sesion"
            className="text-theme-button-primary hover:underline"
          >
            Iniciar sesion →
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
