// src/features/auth/store/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
  getIsAuthenticated: () => void;
  isAuthenticated: boolean;
  user: User | null;
  setAuthenticated: (userData: User) => void;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  role: 'ROLE_MENTOR' | 'ROLE_USER';
  avatar?: string;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  getIsAuthenticated: () => {
    const userData = localStorage.getItem('userData');
    const token = localStorage.getItem('authToken');
    set(() => ({
      user: JSON.parse(userData || 'null'),
      isAuthenticated: !!token,
    }));
  },
  user: null,
  setAuthenticated: (userData: User) => {
    set(() => ({
      isAuthenticated: true,
      user: userData,
    }));
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  },
}));

export default useAuthStore;
