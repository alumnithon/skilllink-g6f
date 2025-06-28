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
import DashboardPage from '../features/profiles/pages/DashboardPage';
import OpportunityPage from '../features/opportunities/pages/OpportunityPage';

// Lazy load de las páginas
const HomePage = lazy(() => import('../shared/pages/HomePage'));
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));
const ProfilePage = lazy(
  () => import('../features/profiles/pages/ProfilePage')
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
    <div className="flex flex-col h-screen relative z-40">
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="flex-1 flex h-[calc(100vh-4.25rem-4rem)] md:h-[calc(100vh-4.5rem-5rem)]">
          {isAuthenticated && <SideBar />}
          <main className="max-h-full w-full">
            {/* paginas privadas */}
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
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/oportunidades" element={<OpportunityPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
