import { useState, useEffect } from 'react';
import OpportunityCard from '../OpportunityCard';

const ExploreSection = () => {
  const buttons = ['Todos', 'Mentorías', 'Proyectos'];
  const [activeButton, setActiveButton] = useState('');

  interface Item {
    title: string;
    description: string;
  }

  const [mentorships, setMentorships] = useState<Item[]>([]);
  const [projects, setProjects] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const image = 'https://images4.alphacoders.com/136/thumb-1920-1369866.png';

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      const fetchedMentorships = [
        {
          title: 'Introducción a React',
          description:
            'Aprende los fundamentos de React y cómo construir interfaces interactivas.',
          image: 'https://example.com/react-course.jpg',
        },
        {
          title: 'Diseño UX/UI',
          description:
            'Descubre cómo diseñar experiencias de usuario atractivas y funcionales.',
          image: 'https://example.com/ux-ui.jpg',
        },
        {
          title: 'Mentoría en Data Science',
          description:
            'Explora el mundo de la ciencia de datos con un mentor experimentado.',
          image: 'https://example.com/data-science.jpg',
        },
        {
          title: 'Desarrollo Backend con Node.js',
          description: 'Domina la creación de APIs robustas y escalables.',
          image: 'https://example.com/nodejs-backend.jpg',
        },
        {
          title: 'Introducción a DevOps',
          description:
            'Conoce las herramientas y prácticas para integrar desarrollo y operaciones.',
          image: 'https://example.com/devops.jpg',
        },
        {
          title: 'Mentoría en Inteligencia Artificial',
          description:
            'Aprende sobre modelos de IA y su implementación práctica.',
          image: 'https://example.com/ai-mentorship.jpg',
        },
      ];
      const fetchedProjects = [
        {
          title: 'Aplicación de Tareas',
          description:
            'Un proyecto para gestionar tareas diarias con React y Firebase.',
          image: 'https://example.com/task-app.jpg',
        },
        {
          title: 'E-commerce Básico',
          description:
            'Crea una tienda en línea funcional con carrito de compras.',
          image: 'https://example.com/ecommerce.jpg',
        },
        {
          title: 'Dashboard de Analíticas',
          description:
            'Desarrolla un panel para visualizar datos en tiempo real.',
          image: 'https://example.com/analytics-dashboard.jpg',
        },
        {
          title: 'Juego de Memoria',
          description:
            'Construye un juego interactivo para mejorar la memoria.',
          image: 'https://example.com/memory-game.jpg',
        },
        {
          title: 'Blog Personal',
          description: 'Diseña y desarrolla un blog personal con Next.js.',
          image: 'https://example.com/personal-blog.jpg',
        },
        {
          title: 'Sistema de Reservas',
          description:
            'Implementa un sistema para gestionar reservas de eventos.',
          image: 'https://example.com/booking-system.jpg',
        },
      ];
      setMentorships(fetchedMentorships);
      setProjects(fetchedProjects);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Set the default active button
    setActiveButton(buttons[0]);
  }, []);

  return (
    <section
      id="explorar"
      className="flex flex-col justify-center items-center py-16 lg:py-24 gap-8"
    >
      <h2 className="text-theme-text-primary text-xl lg:text-4xl font-bold mb-4 text-center">
        Descubre tu próximo aprendizaje
      </h2>
      <div>
        {buttons.map((button) => (
          <button
            key={button}
            className={`border-b-2 w-30 md:w-60 lg:text-xl py-2 ${activeButton === button ? 'border-theme-button-primary text-theme-button-primary' : ''}`}
            onClick={() => setActiveButton(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí irían los componentes de tarjetas de mentorías o proyectos */}
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            {activeButton === 'Todos' &&
              // solo los primero 3 de cada tipo
              [...mentorships.slice(0, 3), ...projects.slice(0, 3)].map(
                (item) => (
                  <OpportunityCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={image}
                    type={mentorships.includes(item) ? 'Mentoría' : 'Proyecto'}
                  />
                )
              )}
            {activeButton === 'Mentorías' &&
              mentorships.map((mentorship) => (
                <OpportunityCard
                  key={mentorship.title}
                  title={mentorship.title}
                  description={mentorship.description}
                  image={image}
                  type="Mentoría"
                />
              ))}
            {activeButton === 'Proyectos' &&
              projects.map((project) => (
                <OpportunityCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={image}
                  type="Proyecto"
                />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ExploreSection;
