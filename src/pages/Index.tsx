
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, 
  Handshake, 
  School, 
  BarChart3, 
  MessageSquare, 
  CheckCircle, 
  MapPin,
  BookOpen,
  Users,
  Building,
  BadgeCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Import the logo
import MexicanosLogo from '/public/lovable-uploads/75746f01-469f-4e6a-bd7e-0861b6a20d53.png';

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    hero: false,
    features: false,
    howItWorks: false,
    stats: false,
    cta: false,
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const features = [
    {
      title: 'Gestión de usuarios',
      description: 'Perfiles completos para administradores, escuelas y aliados con información detallada.',
      icon: Users,
      link: null,
    },
    {
      title: 'Registro de necesidades',
      description: 'Las escuelas pueden registrar sus necesidades, subir evidencias y dar seguimiento.',
      icon: BookOpen,
      link: '/register-needs',
    },
    {
      title: 'Seguimiento de apoyos',
      description: 'Control detallado de los apoyos brindados, cronogramas y evidencias del impacto.',
      icon: CheckCircle,
      link: null,
    },
    {
      title: 'Mapeo de escuelas',
      description: 'Visualización geográfica de escuelas y sus necesidades para facilitar la ayuda.',
      icon: MapPin,
      link: null,
    },
    {
      title: 'Comunicación directa',
      description: 'Sistema de mensajería entre escuelas y aliados para coordinación efectiva.',
      icon: MessageSquare,
      link: '/chat',
    },
    {
      title: 'Reportes y estadísticas',
      description: 'Generación de informes detallados sobre los apoyos y su impacto en la comunidad.',
      icon: BarChart3,
      link: null,
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Registro',
      description: 'Las escuelas y aliados se registran completando sus perfiles con información detallada.',
      icon: BadgeCheck,
      role: 'ambos',
    },
    {
      number: 2,
      title: 'Registro de necesidades',
      description: 'Las escuelas identifican y registran sus necesidades específicas en la plataforma.',
      icon: BookOpen,
      role: 'escuela',
    },
    {
      number: 3,
      title: 'Exploración y match',
      description: 'Los aliados exploran las necesidades y encuentran escuelas compatibles para apoyar.',
      icon: MapPin,
      role: 'aliado',
    },
    {
      number: 4,
      title: 'Coordinación',
      description: 'Escuelas y aliados se comunican y establecen un plan de apoyo conjunto.',
      icon: MessageSquare,
      role: 'ambos',
    },
    {
      number: 5,
      title: 'Implementación',
      description: 'Los aliados brindan el apoyo necesario según el cronograma establecido.',
      icon: Handshake,
      role: 'aliado',
    },
    {
      number: 6,
      title: 'Seguimiento',
      description: 'La plataforma facilita el seguimiento transparente de los apoyos brindados.',
      icon: CheckCircle,
      role: 'ambos',
    }
  ];

  const stats = [
    { number: '100+', label: 'Escuelas beneficiadas' },
    { number: '50+', label: 'Aliados comprometidos' },
    { number: '200+', label: 'Necesidades atendidas' },
    { number: '1000+', label: 'Estudiantes impactados' },
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className={cn(
          "observe-section min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden",
          visibleSections.hero ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-6">
              <img 
                src={MexicanosLogo} 
                alt="Mexicanos Primero Jalisco Logo" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Plataforma de vinculación educativa
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
              Mexicanos Primero Jalisco
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conectando escuelas y aliados para transformar la educación en Jalisco
              a través de una plataforma que facilita la colaboración efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="group">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-20 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_20%)]" />
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className={cn(
          "observe-section section-padding bg-card relative overflow-hidden py-24",
          visibleSections.features ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Una solución integral</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestra plataforma ofrece todas las herramientas necesarias para conectar 
              eficientemente las necesidades educativas con los recursos disponibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={cn(
                  "glass-card p-6 rounded-lg hover-scale transition-all", 
                  feature.link ? "cursor-pointer" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature.link ? (
                  <Link to={feature.link} className="block h-full">
                    <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Link>
                ) : (
                  <>
                    <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section 
        id="howItWorks" 
        className={cn(
          "observe-section section-padding relative overflow-hidden",
          visibleSections.howItWorks ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso sencillo diseñado para maximizar el impacto educativo 
              a través de la colaboración efectiva.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className={cn(
                    "flex flex-col md:flex-row gap-8 items-center relative",
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  )}
                >
                  <div className="md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground max-w-md mx-auto md:mx-0">{step.description}</p>
                    
                    <div className="mt-4">
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-medium",
                        step.role === 'escuela' 
                          ? "bg-blue-100 text-blue-700" 
                          : step.role === 'aliado' 
                          ? "bg-green-100 text-green-700" 
                          : "bg-purple-100 text-purple-700"
                      )}>
                        {step.role === 'escuela' 
                          ? "Para escuelas" 
                          : step.role === 'aliado' 
                          ? "Para aliados" 
                          : "Para ambos"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 rounded-full bg-primary/5 flex items-center justify-center">
                      <step.icon className="h-20 w-20 text-primary" />
                      <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section 
        id="stats" 
        className={cn(
          "observe-section bg-primary text-white py-20 relative overflow-hidden",
          visibleSections.stats ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        className={cn(
          "observe-section section-padding",
          visibleSections.cta ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <Container>
          <div className="bg-card shadow-lg rounded-xl p-8 md:p-12 glass-card">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  ¿Listo para impulsar la educación en Jalisco?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Únete a nuestra comunidad de escuelas y aliados comprometidos con
                  mejorar la calidad educativa.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:flex md:flex-shrink-0 md:items-center">
                <div className="flex flex-col md:flex-row gap-4">
                  <Link to="/register?role=escuela">
                    <Button variant="outline" className="w-full btn-transition">
                      <School className="mr-2 h-5 w-5" />
                      Registrar escuela
                    </Button>
                  </Link>
                  <Link to="/register?role=aliado">
                    <Button className="w-full btn-transition">
                      <Handshake className="mr-2 h-5 w-5" />
                      Registrar como aliado
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
