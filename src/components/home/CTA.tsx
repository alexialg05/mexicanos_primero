
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { School, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAProps {
  isVisible: boolean;
}

const CTA = ({ isVisible }: CTAProps) => {
  return (
    <section 
      id="cta" 
      className={cn(
        "observe-section section-padding",
        isVisible ? 'animate-fade-in' : 'opacity-0'
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
  );
};

export default CTA;
