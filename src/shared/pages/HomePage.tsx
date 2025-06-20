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
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-theme-text-primary to-theme-text-secondary bg-clip-text text-transparent">
                  Aprende, crece y conecta
                </span>
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
    </div>
  );
};

export default HomePage;
