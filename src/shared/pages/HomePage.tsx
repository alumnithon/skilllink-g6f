import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-theme-bg-primary text-theme-text-primary relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-green-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-theme-text-primary to-theme-text-secondary bg-clip-text text-transparent">
                Aprende, crece y conecta
              </h1>
              <p className="text-lg lg:text-xl text-theme-text-secondary mb-8 max-w-2xl leading-relaxed">
                ¿Quieres aprender nuevas habilidades o compartir tu experiencia?
                Conecta con una comunidad donde estudiantes encuentran mentores
                expertos y profesionales comparten conocimiento. Crece
                profesionalmente mientras ayudas a otros a alcanzar sus metas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/registrarse">
                  <ButtonPrimary
                    title="Únete gratis"
                    styles="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  />
                </Link>
                <Link
                  to="#explorar"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-theme-text-primary text-theme-text-primary rounded-lg font-semibold text-lg hover:bg-theme-text-primary hover:text-theme-bg-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  Descubre más
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Pantalla de computadora con código de programación"
                className="w-full h-auto max-w-lg rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Roles Section */}
      <section id="explorar" className="roles-section section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              ¿Cómo quieres participar?
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Elige el rol que mejor se adapte a tus objetivos y comienza tu
              journey de aprendizaje colaborativo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Estudiante Card */}
            <div className="role-card">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl text-white">
                  🎓
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Estudiante
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Acelera tu crecimiento profesional aprendiendo directamente de
                  expertos en la industria
                </p>
              </div>
              <ul className="space-y-4 mb-8 text-left border border-dashed border-blue-300 rounded-lg p-4 bg-blue-50/30">
                {[
                  'Acceso a mentores verificados',
                  'Mentorías personalizadas 1:1',
                  'Proyectos reales para tu portafolio',
                  'Desafíos para practicar skills',
                  'Networking con profesionales',
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link to="/registrarse" className="block">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Comenzar a Aprender
                </button>
              </Link>
            </div>

            {/* Mentor Card */}
            <div className="role-card">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-amber-500"></div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-amber-500 flex items-center justify-center text-4xl text-white">
                  👨‍🏫
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Mentor
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Comparte tu experiencia, construye tu marca personal y genera
                  impacto en la próxima generación
                </p>
              </div>
              <ul className="space-y-4 mb-8 text-left border border-dashed border-green-300 rounded-lg p-4 bg-green-50/30">
                {[
                  'Construye tu marca personal',
                  'Flexibilidad total de horarios',
                  'Amplía tu red profesional',
                  'Crea contenido y desafíos',
                  'Desarrolla habilidades de liderazgo',
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link to="/registrarse" className="block">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Convertirme en Mentor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
