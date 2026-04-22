import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HistorySection from '@/components/HistorySection';
import StatsSection from '@/components/StatsSection';
import ValuesSection from '@/components/ValuesSection';
import TeamSection from '@/components/TeamSection';
import BorodinoSection from '@/components/BorodinoSection';

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
      <footer className="bg-gray-900 py-8 text-center border-t border-white/10">
        <img
          src="https://cdn.poehali.dev/projects/464e3b76-117f-416b-ac7d-1548e29f69d5/bucket/4a3bd78c-1a60-48c7-86ff-894bb057295d.png"
          alt="ВПК"
          className="h-10 w-auto object-contain mx-auto mb-4 opacity-50"
        />
        <p className="text-gray-600 font-mono text-sm">
          © 2024 ООО «ВПК» — Вяземская производственная компания. Все права защищены.
        </p>
      </footer>
    </main>
  );
}