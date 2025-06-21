import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, X } from 'lucide-react';

const PublicHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para scroll suave a secciones con offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-theme-button-primary to-theme-button-secondary shadow-lg backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo clickeable con scroll al hero */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <Rocket className="w-8 h-8 text-white" />
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              SkillLink
            </h1>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 ml-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('explorar')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300"
            >
              Explorar
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300"
            >
              Contáctanos
            </button>
          </nav>

          {/* Auth Buttons + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Inicia sesión -- Solo visible en desktop y tablet */}
            <Link
              to="/iniciar-sesion"
              className="hidden sm:block px-3 lg:px-6 py-2 text-white/90 hover:text-white font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              Inicia sesión
            </Link>

            {/* Regístrate */}
            <Link
              to="/registrarse"
              className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-xs sm:text-sm lg:text-base"
            >
              Regístrate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-white/20">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {/* Inicia sesión en el menú móvil */}
              <Link
                to="/iniciar-sesion"
                onClick={() => setMobileMenuOpen(false)}
                className="text-theme-button-primary hover:text-theme-button-secondary font-semibold transition-colors duration-300 text-left py-2 border-b border-gray-200"
              >
                Inicia sesión
              </Link>

              {/* Navegación */}
              <button
                onClick={() => {
                  scrollToSection('hero');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-theme-button-primary font-medium transition-colors duration-300 text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  scrollToSection('explorar');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-theme-button-primary font-medium transition-colors duration-300 text-left"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => {
                  scrollToSection('proyectos');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-theme-button-primary font-medium transition-colors duration-300 text-left"
              >
                Explorar
              </button>
              <button
                onClick={() => {
                  scrollToSection('contacto');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-theme-button-primary font-medium transition-colors duration-300 text-left"
              >
                Contáctanos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PublicHeader;
