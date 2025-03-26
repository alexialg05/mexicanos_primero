
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface StatsProps {
  isVisible: boolean;
}

const Stats = ({ isVisible }: StatsProps) => {
  const stats = [
    { number: '100+', label: 'Escuelas beneficiadas' },
    { number: '50+', label: 'Aliados comprometidos' },
    { number: '200+', label: 'Necesidades atendidas' },
    { number: '1000+', label: 'Estudiantes impactados' },
  ];

  return (
    <section 
      id="stats" 
      className={cn(
        "observe-section bg-primary text-white py-20 relative overflow-hidden",
        isVisible ? 'animate-fade-in' : 'opacity-0'
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
  );
};

export default Stats;
