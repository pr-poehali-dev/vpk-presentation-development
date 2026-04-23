import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 80000000, suffix: '+', label: 'Банок произведено суммарно', color: '#a78bfa' },
  { value: 21000, suffix: '', label: 'Банок в час — суммарная мощность', color: '#67e8f9' },
  { value: 100, suffix: '+', label: 'Деклараций на продукцию', color: '#fb923c' },
  { value: 3, suffix: '', label: 'Федеральные сети на двух площадках', color: '#f472b6' },
];

function Counter({ target, suffix, color, decimals = 0 }: { target: number; suffix: string; color: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const step = target / steps;
          let current = 0;
          let count = 0;

          const timer = setInterval(() => {
            count++;
            current = Math.min(current + step, target);
            setCount(current);
            if (count >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const formatted = count >= 1000000
    ? (count / 1000000).toFixed(1) + 'M'
    : count >= 1000
    ? (count / 1000).toFixed(0) + 'K'
    : count.toFixed(decimals);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-mono" style={{ color }}>
      {formatted}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-32 px-6" style={{ background: '#080d1a' }}>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10 pointer-events-none"
        style={{ background: '#67e8f9' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">/ цифры говорят /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            Производство<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>в цифрах</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-scale delay-${i * 100 + 100} rounded-2xl p-8 text-center`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${stat.color}30`,
              }}
            >
              <Counter target={stat.value} suffix={stat.suffix} color={stat.color} decimals={stat.decimals} />
              <p className="text-gray-400 text-base mt-4 leading-snug">{stat.label}</p>
              <div className="mt-5 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-14 grid md:grid-cols-2 gap-6">

          <div className="rounded-3xl overflow-hidden flex flex-col" style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.2)' }}>
            <div className="px-6 pt-8 pb-5" style={{ borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 border border-green-500/40 text-green-300 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block pulse-dot" />
                  Запущена · июнь 2024
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Площадка{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>№1</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Энергетики, холодные чаи и лимонады в алюминиевой банке.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x flex-1" style={{ borderColor: 'rgba(167,139,250,0.15)' }}>
              {[
                { icon: '⚡', value: '12 000', unit: 'бан/ч', label: 'Мощность', color: '#a78bfa' },
                { icon: '📅', value: 'Июнь', unit: '2024', label: 'Запуск', color: '#67e8f9' },
                { icon: '🏪', value: 'X5, Магнит', unit: 'К&Б', label: 'Сети', color: '#fb923c' },
              ].map((item) => (
                <div key={item.label} className="p-5 flex flex-col gap-1" style={{ borderColor: 'rgba(167,139,250,0.15)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-lg font-bold font-mono leading-tight" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-500 font-mono text-xs ml-1">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden flex flex-col" style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.2)' }}>
            <div className="px-6 pt-8 pb-5" style={{ borderBottom: '1px solid rgba(251,146,60,0.15)' }}>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 border border-green-500/40 text-green-300 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block pulse-dot" />
                  Запущена · апрель 2026
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-500/40 text-orange-300 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block pulse-dot" />
                  Полная загрузка
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Площадка{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #fb923c, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>№2</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Запущена в апреле 2026 года. Работает на полной загрузке мощностей.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x flex-1" style={{ borderColor: 'rgba(251,146,60,0.15)' }}>
              {[
                { icon: '⚡', value: '9 000', unit: 'бан/ч', label: 'Мощность', color: '#fb923c' },
                { icon: '📅', value: 'Апрель', unit: '2026', label: 'Запуск', color: '#a78bfa' },
                { icon: '🔥', value: '100%', unit: 'загрузка', label: 'Мощности', color: '#f472b6' },
              ].map((item) => (
                <div key={item.label} className="p-5 flex flex-col gap-1" style={{ borderColor: 'rgba(251,146,60,0.15)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-lg font-bold font-mono leading-tight" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-500 font-mono text-xs ml-1">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="reveal delay-200 mt-10">
          <div className="rounded-3xl overflow-hidden p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-6 whitespace-nowrap">
                {['Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур',
                  'Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур'].map((tech, i) => (
                  <span key={i} className="text-gray-400 font-mono text-sm px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
