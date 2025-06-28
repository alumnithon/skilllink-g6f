import api from '../../../shared/lib/axios';
import type {
  LoginFormData,
  RegisterFormData,
} from '../validation/validationSchemas';
import { loginSchema, registerSchema } from '../validation/validationSchemas';

// Función para mapear respuesta del backend a formato del frontend
const mapUserFromBackend = (backendUser: {
  id: string;
  name: string;
  role: 'ROLE_USER' | 'ROLE_MENTOR';
  avatar: string | null;
  ocupation?: string;
}): {
  id: string;
  fullName: string;
  name: string;
  role: 'ROLE_USER' | 'ROLE_MENTOR';
  avatar: string | null;
  ocupation?: string;
} => ({
  id: backendUser.id,
  fullName: backendUser.name, // Mapear name del backend a fullName del frontend
  name: backendUser.name, // Mantener también name como backup
  role: backendUser.role,
  avatar: backendUser.avatar,
  ocupation: backendUser.ocupation,
});

// Función para iniciar sesión
export async function loginService(userData: LoginFormData) {
  loginSchema.parse(userData);
  try {
    const response = await api.post('/auth', userData);

    // Mapear el usuario del backend al formato del frontend
    const mappedUser = mapUserFromBackend(response.data.user);

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userData', JSON.stringify(mappedUser));

    return mappedUser;
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    throw error; // Propagar el error para que sea manejado por la UI
  }
}

// Función para registrar un nuevo usuario
export async function registerService(userData: RegisterFormData) {
  const parsedData = registerSchema.parse(userData);
  const finalData = {
    ...parsedData,
    userType: parsedData.userType || 'Estudiante',
  };
  try {
    const response = await api.post('/register', finalData);

    // Mapear el usuario del backend al formato del frontend
    const mappedUser = mapUserFromBackend(response.data.user);

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userData', JSON.stringify(mappedUser));

    return mappedUser;
  } catch (error) {
    console.error('Error de registro:', error);
    throw error;
  }
}
