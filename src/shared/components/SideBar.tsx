import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-600 p-4">
      <nav>
        <ul>
          <li>
            <Link to="/panel" className="block py-2 hover:underline">
              Panel
            </Link>
          </li>
          <li>
            <Link to="/perfil" className="block py-2 hover:underline">
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/configuracion" className="block py-2 hover:underline">
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
