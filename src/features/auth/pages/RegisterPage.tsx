import { ButtonPrimary } from '../../../shared/components/Button';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';
import SelectDropdown from '../components/SelectDropdown';
import { useForm, Controller } from 'react-hook-form';
import InputPassword from '../components/InputPassword';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted:', data);
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
          register={register('fullName', { required: true })}
          error={errors.fullName ? 'Nombre completo es requerido' : undefined}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Ingresa tu email"
          register={register('email', { required: true })}
          error={errors.email ? 'Email es requerido' : undefined}
        />
        <InputPassword
          register={register('password', { required: true })}
          error={errors.password ? 'Contraseña es requerida' : undefined}
        />
        <Controller
          name="userType"
          control={control}
          defaultValue={null}
          rules={{ required: 'Selecciona un rol' }}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors.userType ? 'Selecciona un rol' : undefined}
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
