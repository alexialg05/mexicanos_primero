
import { Container } from '@/components/ui/Container';
import { 
  Handshake, 
  MessageSquare, 
  CheckCircle, 
  MapPin,
  BookOpen,
  BadgeCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface HowItWorksProps {
  isVisible: boolean;
}

const HowItWorks = ({ isVisible }: HowItWorksProps) => {
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

  return (
    <section 
      id="howItWorks" 
      className={cn(
        "observe-section section-padding relative overflow-hidden",
        isVisible ? 'animate-fade-in' : 'opacity-0'
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
  );
};

export default HowItWorks;
