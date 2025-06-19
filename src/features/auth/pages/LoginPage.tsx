import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { ButtonPrimary } from '../../../shared/components/Button';
import InputField from '../components/InputField';
import { useForm } from 'react-hook-form';
import InputPassword from '../components/InputPassword';
import { loginService } from '../services/authService';
import useAuthStore from '../store/useAuthStore';

const LoginPage = () => {
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginService(data);
      setAuthenticated(response);
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  });

  return (
    <AuthLayout
      title="Iniciar Sesión"
      description="Accede a tu cuenta para continuar aprendiendo."
      imageUrl="https://images4.alphacoders.com/136/thumb-1920-1369866.png"
    >
      <form
        className="w-full bg-theme-bg-tertiary flex flex-col gap-4"
        onSubmit={onSubmit}
      >
        <InputField
          label="Email"
          type="email"
          placeholder="Ingresa tu email"
          register={register('email', { required: true })} // Example of using react-hook-form
          error={errors.email ? 'Email es requerido' : undefined}
        />
        <InputPassword
          register={register('password', { required: true })} // Example of using react-hook-form
          error={errors.password ? 'Contraseña es requerida' : undefined}
        />
        <div className="flex flex-wrap gap-2 items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="flex items-center gap-2">Recordarme</label>
          </div>
          <Link to="#" className="text-theme-button-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <ButtonPrimary title="Iniciar Sesion" styles="mt-3" />
        <p className="flex gap-2 flex-wrap justify-center text-center text-sm text-gray-500 mt-2">
          ¿No tienes una cuenta?{' '}
          <Link
            to="/registrarse"
            className="text-theme-button-primary hover:underline"
          >
            Registrarse →
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
