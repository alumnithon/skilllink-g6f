import { Link } from 'react-router-dom';
import useAuthStore from '../../features/auth/store/useAuthStore.ts';
import { Rocket } from 'lucide-react';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <a href="/" className="hover:underline flex items-center gap-2">
          <Rocket />
          <h1 className="text-2xl font-bold">SkillLink</h1>
        </a>
        <nav>
          <ul className="flex gap-4">
            {isAuthenticated ? (
              <>
                {user && <li>{user.fullName}</li>}
                <li>
                  <button
                    onClick={() => {
                      logout();
                      window.location.reload();
                    }}
                    className="hover:underline"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/iniciar-sesion" className="hover:underline">
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link to="/registrarse" className="hover:underline">
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
