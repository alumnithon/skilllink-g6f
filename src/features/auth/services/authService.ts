import api from '../../../shared/lib/axios';
import type { FieldValues } from 'react-hook-form';

// Función para iniciar sesión
export async function loginService(userData: FieldValues) {
  try {
    const response = await api.post('/login', userData);
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userData', JSON.stringify(response.data.user));
    return response.data.user;
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    throw error; // Propagar el error para que sea manejado por la UI
  }
}

// Función para registrar un nuevo usuario
export async function registerService(userData: FieldValues) {
  try {
    const response = await api.post('/register', userData);
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userData', JSON.stringify(response.data.user));
    return response.data.user;
  } catch (error) {
    console.error('Error de registro:', error);
    throw error;
  }
}
