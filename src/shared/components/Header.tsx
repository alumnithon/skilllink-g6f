import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <a href="/" className="hover:underline">
          <h1 className="text-2xl font-bold">SkillLink</h1>
        </a>
        <nav>
          <ul className="flex gap-4">
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/panel" className="hover:underline">
                    Panel
                  </Link>
                </li>
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
