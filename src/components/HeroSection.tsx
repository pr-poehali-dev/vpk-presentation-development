import { useEffect, useRef, useState } from 'react';

const DRINKS = ['Энергетик', 'Холодный чай', 'Лимонад', 'Мохито', 'Тоник'];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drinkIndex, setDrinkIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setDrinkIndex((i) => (i + 1) % DRINKS.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    type Bubble = {
      x: number; y: number; vy: number;
      size: number; opacity: number; color: string;
    };

    const bubbles: Bubble[] = [];
    const colors = ['#8B5CF6', '#00FFFF', '#FF006E', '#FF6B00', '#ffffff'];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      bubbles.push({
        x: Math.random() * (canvas.width || 1200),
        y: Math.random() * (canvas.height || 800),
        vy: -(Math.random() * 0.6 + 0.2),
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.y += b.vy;
        b.x += Math.sin(b.y * 0.02) * 0.3;
        if (b.y < -10) {
          b.y = canvas.height + 10;
          b.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = b.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 60%, #1a0533 0%, #0a0a0a 60%)',
      }}
    >
      {/* Сетка */}
      <div className="absolute inset-0 grid-lines opacity-40" />

      {/* Пузырьки */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Большое свечение снизу — как жидкость */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, rgba(0,255,255,0.15) 50%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'rgba(255,0,110,0.12)' }}
      />

      {/* Контент */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Бейдж */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-mono mb-10 backdrop-blur-sm">
          <span className="pulse-dot w-2 h-2 rounded-full bg-purple-400 inline-block" />
          Вяземская производственная компания
        </div>

        {/* Главный заголовок */}
        <h1 className="font-bold leading-none mb-4 tracking-tight">
          <span
            className="block text-[clamp(3.5rem,12vw,9rem)]"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e0c3fc 40%, #8B5CF6 70%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.6))',
            }}
          >
            Твой вкус.
          </span>
          <span
            className="block text-[clamp(3rem,10vw,7.5rem)]"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #FF006E 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.5))',
            }}
          >
            Твой бренд.
          </span>
        </h1>

        {/* Анимированный тип напитка */}
        <div className="flex items-center justify-center gap-4 mb-10 h-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/60" />
          <div
            className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold font-mono transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              background: 'linear-gradient(90deg, #00FFFF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.7))',
            }}
          >
            {DRINKS[drinkIndex]}
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
        </div>

        {/* Подзаголовок */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
          Производим напитки в алюминиевой банке под вашим брендом —
          <span className="text-white font-medium"> от рецептуры до полки</span> федеральных сетей.
        </p>

        {/* Теги-пилюли */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {[
            { label: '12 000 банок/час', color: '#8B5CF6' },
            { label: 'X5 · Магнит · К&Б', color: '#00FFFF' },
            { label: 'Sleeve от 25K банок', color: '#FF6B00' },
            { label: 'Разработка рецептуры', color: '#FF006E' },
          ].map((tag) => (
            <span
              key={tag.label}
              className="px-4 py-2 rounded-full text-sm font-mono backdrop-blur-sm border"
              style={{
                borderColor: `${tag.color}30`,
                background: `${tag.color}10`,
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Скролл */}
        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
          <span className="font-mono text-xs tracking-widest uppercase opacity-60">Прокрути вниз</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <div className="scroll-dot w-1 h-2 rounded-full bg-purple-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
