
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

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

  return (
    <div>
      <Header />
      <Hero isVisible={visibleSections.hero} />
      <Features isVisible={visibleSections.features} />
      <HowItWorks isVisible={visibleSections.howItWorks} />
      <Stats isVisible={visibleSections.stats} />
      <CTA isVisible={visibleSections.cta} />
      <Footer />
    </div>
  );
};

export default Index;
