
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { 
  BarChart3, 
  MessageSquare, 
  CheckCircle, 
  MapPin,
  BookOpen,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturesProps {
  isVisible: boolean;
}

const Features = ({ isVisible }: FeaturesProps) => {
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

  return (
    <section 
      id="features" 
      className={cn(
        "observe-section section-padding bg-card relative overflow-hidden py-24",
        isVisible ? 'animate-fade-in' : 'opacity-0'
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
  );
};

export default Features;
