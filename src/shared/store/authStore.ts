import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem('authToken'),
  setAuthenticated: (value: boolean) => {
    set({ isAuthenticated: value });
    if (value) {
      localStorage.setItem('authToken', 'dummy-token');
    } else {
      localStorage.removeItem('authToken');
    }
  },
  logout: () => {
    set({ isAuthenticated: false });
    localStorage.removeItem('authToken');
  },
}));
