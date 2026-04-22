import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HistorySection from '@/components/HistorySection';
import StatsSection from '@/components/StatsSection';
import ValuesSection from '@/components/ValuesSection';
import TeamSection from '@/components/TeamSection';
import CtaSection from '@/components/CtaSection';

const SLIDES = [
  { id: 'hero', label: 'Начало' },
  { id: 'mission', label: 'Миссия' },
  { id: 'history', label: 'История' },
  { id: 'stats', label: 'Цифры' },
  { id: 'values', label: 'Ценности' },
  { id: 'team', label: 'Команда' },
  { id: 'cta', label: 'Контакт' },
];

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const isScrolling = useRef(false);

  // Reveal-анимации при смене слайдов
  useEffect(() => {
    const revealInView = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
      return observer;
    };
    const observer = revealInView();
    return () => observer.disconnect();
  }, []);

  // Отслеживаем активный слайд через IntersectionObserver
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = Array.from(slides).indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveSlide(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Колёсико мыши — плавный переход между слайдами
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      const slides = container.querySelectorAll('.slide');
      const direction = e.deltaY > 0 ? 1 : -1;
      const next = Math.min(Math.max(activeSlide + direction, 0), slides.length - 1);

      if (next !== activeSlide) {
        isScrolling.current = true;
        slides[next].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [activeSlide]);

  // Стрелки клавиатуры
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      const container = containerRef.current;
      if (!container) return;
      const slides = container.querySelectorAll('.slide');

      let next = activeSlide;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') next = Math.min(activeSlide + 1, slides.length - 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') next = Math.max(activeSlide - 1, 0);

      if (next !== activeSlide) {
        isScrolling.current = true;
        slides[next].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeSlide]);

  const goToSlide = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll('.slide');
    slides[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll"
      style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}
    >
      {/* Боковая навигация — точки */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(i)}
            className="group flex items-center gap-3 justify-end"
            title={slide.label}
          >
            <span
              className="text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
            >
              {slide.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeSlide === i ? '10px' : '6px',
                height: activeSlide === i ? '10px' : '6px',
                background: activeSlide === i ? '#8B5CF6' : 'rgba(255,255,255,0.25)',
                boxShadow: activeSlide === i ? '0 0 10px #8B5CF6' : 'none',
              }}
            />
          </button>
        ))}
      </nav>

      {/* Номер слайда */}
      <div className="fixed left-6 bottom-8 z-50 font-mono text-xs text-gray-600 select-none">
        <span className="text-white">{String(activeSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* Название текущего слайда */}
      <div className="fixed left-6 top-8 z-50 font-mono text-xs text-gray-500 tracking-widest uppercase select-none">
        ВПК · <span className="text-purple-400">{SLIDES[activeSlide]?.label}</span>
      </div>

      {/* Слайды */}
      <HeroSection />
      <MissionSection />
      <HistorySection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <CtaSection />
    </div>
  );
}