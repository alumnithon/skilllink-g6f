import { useEffect, useState } from 'react';
import useAuthStore from '../../auth/store/useAuthStore';
import axios from 'axios';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    notifications: 0,
    unreadMessages: 0,
    oportunidades: 0,
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/dashboard/metrics?userId=${user.id}`
        )
        .then((response) => {
          setMetrics(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar métricas:', error);
          setLoading(false);
        });
    }
  }, [isAuthenticated, user]);

  if (loading) return <p className="text-center mt-8">Cargando...</p>;
  if (!user || !isAuthenticated)
    return <p className="text-center mt-8">No estás autenticado.</p>;

  const { unreadMessages, oportunidades } = metrics;

  return (
    <main className="flex-1 bg-[#36393F4D] pt-4 overflow-y-auto">
      <div className="bg-[#FFFFFFF7] p-8 max-w-[1100px] w-full rounded-lg shadow-sm mx-auto mt-4">
        <h1 className="text-2xl font-bold text-[#16A34A] mb-2">
          ¡Hola {user.name}!
        </h1>

        {oportunidades > 0 || unreadMessages > 0 ? (
          <p className="text-[#4B5563]">
            Tienes{' '}
            {oportunidades > 0 &&
              `${oportunidades} nueva${oportunidades > 1 ? 's' : ''} oportunidad${oportunidades > 1 ? 'es' : ''}`}
            {oportunidades > 0 && unreadMessages > 0 && ' y '}
            {unreadMessages > 0 &&
              `${unreadMessages} mensaje${unreadMessages > 1 ? 's' : ''} ${
                user.role.toLowerCase() === 'mentor'
                  ? 'para mentorías'
                  : 'de mentores'
              }.`}
          </p>
        ) : (
          <p className="text-[#4B5563]">
            No tienes nuevas oportunidades ni mensajes por ahora.
          </p>
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
