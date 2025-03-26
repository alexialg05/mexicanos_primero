
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

// Import the logo from our assets directory
import { MexicanosLogo } from '@/assets/MexicanosLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        isScrolled
          ? 'py-3 bg-background/80 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <img 
                src={MexicanosLogo} 
                alt="Mexicanos Primero Jalisco Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'link-hover text-foreground/80 font-medium hover:text-foreground transition-colors btn-transition',
                  location.pathname === item.href && 'text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="btn-transition">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button className="btn-transition">Registrarse</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-background/50 text-foreground focus-ring"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="pt-2 pb-4 space-y-1 stagger-animation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block py-2 px-3 rounded-md text-base font-medium transition-colors btn-transition',
                    location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">Registrarse</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
