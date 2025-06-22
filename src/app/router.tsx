import { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Header from '../shared/components/header/Header';
import Footer from '../shared/components/Footer';
import SideBar from '../shared/components/SideBar';
import Loading from '../shared/components/Loading';
import useAuthStore from '../features/auth/store/useAuthStore';

// Lazy load de las páginas
const HomePage = lazy(() => import('../shared/pages/HomePage'));
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));
const DashboardPage = lazy(
  () => import('../features/profiles/pages/DashboardPage')
);
const NotFoundPage = lazy(() => import('../shared/pages/NotFoundPage'));

// Componente para rutas privadas
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

// Componente para rutas públicas
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const getIsAuthenticated = useAuthStore((state) => state.getIsAuthenticated);

  useEffect(() => {
    getIsAuthenticated();
  });

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/panel" /> : children;
};

const Layout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="flex-1 flex">
          {isAuthenticated && <SideBar />}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

// Configuración de rutas principales
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Layout />
            </PublicRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/iniciar-sesion" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
        </Route>
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/panel" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
