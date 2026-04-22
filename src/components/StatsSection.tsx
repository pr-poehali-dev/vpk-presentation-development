import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 80000000, suffix: '+', label: 'Банок произведено', color: '#8B5CF6' },
  { value: 12000, suffix: '', label: 'Банок в час — мощность линии', color: '#00FFFF' },
  { value: 100, suffix: '+', label: 'Деклараций на продукцию', color: '#FF6B00' },
  { value: 3, suffix: '', label: 'Федеральные сети: X5, Магнит, К&Б', color: '#FF006E' },
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
    <section className="slide relative h-screen flex items-center overflow-hidden px-6" style={{ background: 'var(--deep-bg)' }}>
      <div className="max-w-6xl mx-auto w-full overflow-y-auto max-h-screen py-8">
        <div className="reveal text-center mb-10">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ цифры говорят /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Производство<br />
            <span className="gradient-text-purple">в цифрах</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-scale delay-${i * 100 + 100} rounded-2xl p-8 text-center border transition-all hover:scale-105 duration-300`}
              style={{
                background: 'var(--card-bg)',
                borderColor: `${stat.color}20`,
                boxShadow: `0 0 40px ${stat.color}10`,
              }}
            >
              <Counter target={stat.value} suffix={stat.suffix} color={stat.color} decimals={stat.decimals} />
              <p className="text-gray-400 text-sm mt-3 leading-tight">{stat.label}</p>
              <div className="mt-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal delay-300 mt-16 rounded-3xl p-8 overflow-hidden relative" style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-500/10" />
          <div className="relative z-10">
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-12 whitespace-nowrap">
                {['Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур',
                  'Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур'].map((tech, i) => (
                  <span key={i} className="text-gray-400 font-mono text-sm px-4 py-2 rounded-full border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Бородино */}
        <div className="reveal delay-200 mt-16">
          <div
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: 'rgba(0,255,255,0.15)', background: 'var(--card-bg)' }}
          >
            <div className="px-8 pt-10 pb-6 border-b border-white/5">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-4xl">🏗️</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono">
                      <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                      Земля куплена · 2026
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-mono">
                      <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                      Ищем инвесторов
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono">
                      Запуск · 2028
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Индустриальный парк{' '}
                    <span className="gradient-text-purple">«Бородино»</span>
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-2xl">
                    В 2026 году куплена земля. Плановый запуск — 2028. Сегодня открыты для инвестиций: строим производственный объект нового поколения для выпуска напитков и логистики под ключ.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {[
                {
                  icon: '🏭',
                  value: '60 000',
                  unit: 'банок / час',
                  label: 'Мощность новой линии',
                  color: '#00FFFF',
                },
                {
                  icon: '📐',
                  value: '8 000',
                  unit: 'м²',
                  label: 'Производственные площади',
                  color: '#8B5CF6',
                },
                {
                  icon: '🚚',
                  value: 'Прямая',
                  unit: 'отгрузка',
                  label: 'В федеральные сети без посредников',
                  color: '#FF6B00',
                },
                {
                  icon: '📦',
                  value: 'Фулфилмент',
                  unit: '360°',
                  label: 'Полный цикл для маркетплейсов',
                  color: '#FF006E',
                },
              ].map((item) => (
                <div key={item.label} className="p-8 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-500 font-mono text-sm ml-2">{item.unit}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="px-8 py-5 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block pulse-dot" />
                Также: склады ответственного хранения · отгрузка в сети · фулфилмент WB, Ozon и других маркетплейсов
              </div>
              <button
                className="shrink-0 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #FF6B00, #FF006E)', boxShadow: '0 0 20px rgba(255,107,0,0.3)' }}
              >
                Обсудить инвестиции →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}