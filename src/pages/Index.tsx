import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HistorySection from '@/components/HistorySection';
import StatsSection from '@/components/StatsSection';
import ValuesSection from '@/components/ValuesSection';
import TeamSection from '@/components/TeamSection';
import BorodinoSection from '@/components/BorodinoSection';
import CtaSection from '@/components/CtaSection';

export default function Index() {
  useEffect(() => {
    const observe = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = observe();
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <HistorySection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <BorodinoSection />
      <CtaSection />
    </main>
  );
}