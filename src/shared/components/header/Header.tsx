import useAuthStore from '../../../features/auth/store/useAuthStore';
import PublicHeader from './PublicHeader';
import DashboardHeader from './DashboardHeader';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <DashboardHeader /> : <PublicHeader />;
};

export default Header;
