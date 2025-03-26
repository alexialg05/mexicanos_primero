
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  isVisible: boolean;
}

const Hero = ({ isVisible }: HeroProps) => {
  return (
    <section 
      id="hero" 
      className={cn(
        "observe-section min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden",
        isVisible ? 'animate-fade-in' : 'opacity-0'
      )}
    >
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Plataforma de vinculación educativa
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
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
  );
};

export default Hero;
