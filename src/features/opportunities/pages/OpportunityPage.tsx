import { Search } from 'lucide-react';
import { useState } from 'react';
import Breadcrumb from '../../../shared/components/Breadcrumb';
import OpportunityCard from '../../../shared/components/OpportunityCard';
import useAuthStore from '../../auth/store/useAuthStore';
import { useOpportunities } from '../hooks/useOpportunities';
import Loading from '../../../shared/components/Loading';
import CreateOpportunityModal from '../components/CreateOpportunityModal';

const OpportunityPage = () => {
  const user = useAuthStore((state) => state.user);
  const { opportunities, loading, error, refetch } = useOpportunities();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSuccess = () => {
    refetch();
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="sticky top-0 bg-gray-50 z-10 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 font-Inter">
          {/* Breadcrumb */}
          <Breadcrumb />

          {user?.role === 'ROLE_MENTOR' && (
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-green-600 font-Inter mt-1">
                Mis Oportunidades
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-600/80 text-white"
              >
                Crear Oportunidad
              </button>
            </div>
          )}
          {user?.role === 'ROLE_USER' && (
            <h1 className="text-2xl lg:text-3xl font-bold text-green-600 font-Inter mt-1">
              Oportunidades Disponibles
            </h1>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4 h-full">
        <div className="max-w-7xl w-full mx-auto px-4 flex items-center gap-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Buscar en mis oportunidades"
            className="placeholder-gray-500 w-full py-2.5 outline-none bg-transparent"
          />
        </div>
        <nav className="max-w-7xl w-full mx-auto flex gap-4 font-bold">
          <button className="text-theme-button-primary px-4 py-2 border-b-2 border-theme-button-primary">
            Todas
          </button>
          <button className="text-theme-button-primary px-4 py-2">
            Activas
          </button>
          <button className="text-theme-button-primary px-4 py-2">
            Pendientes
          </button>
          <button className="text-theme-button-primary px-4 py-2">
            Finalizadas
          </button>
        </nav>
        {/* cards scrollable */}
        <div className="max-w-7xl w-full mx-auto overflow-y-auto flex-1">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loading />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-red-600">Error: {error}</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 h-full">
              {opportunities.length === 0 ? (
                <div className="flex justify-center items-center w-full h-full">
                  <p className="text-gray-500">
                    No hay oportunidades disponibles
                  </p>
                </div>
              ) : (
                opportunities.map((opportunity) => (
                  <OpportunityCard
                    id={opportunity.id}
                    type={opportunity.type}
                    title={opportunity.title}
                    description={opportunity.description}
                    tagsName={opportunity.tags}
                    difficultyLevel={opportunity.difficultyLevel}
                    buttonTitle={
                      user?.role === 'ROLE_MENTOR' ? 'Gestionar' : 'Aplicar'
                    }
                    hasCertification={opportunity.hasCertification || false}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal para crear oportunidad */}
      <CreateOpportunityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleCreateSuccess}
      />
    </div>
  );
};

export default OpportunityPage;
