import { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';
import SideBar from '../shared/components/SideBar';
import Loading from '../shared/components/Loading';
import { isAuthenticated } from '../shared/utils/auth';

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
  return isAuthenticated() ? children : <Navigate to="/" />;
};

// Componente para rutas públicas
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <Navigate to="/panel" /> : children;
};

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-grow">
          {isAuthenticated() && <SideBar />}
          <main className="flex-grow p-4">
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
