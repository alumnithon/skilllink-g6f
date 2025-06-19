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
  fullName: string;
  role: string;
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
    set({ isAuthenticated: false });
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  },
}));

export default useAuthStore;
