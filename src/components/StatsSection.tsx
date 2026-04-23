import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 80000000, suffix: '+', label: 'Банок произведено суммарно', color: '#7c3aed' },
  { value: 21000, suffix: '', label: 'Банок в час — суммарная мощность', color: '#0891b2' },
  { value: 100, suffix: '+', label: 'Деклараций на продукцию всего', color: '#ea580c' },
  { value: 3, suffix: '', label: 'Федеральные сети на двух площадках', color: '#db2777' },
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
    <section className="relative py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-600 font-mono text-sm tracking-widest uppercase">/ цифры говорят /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            Производство<br />
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>в цифрах</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-scale delay-${i * 100 + 100} rounded-2xl p-8 text-center bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300`}
            >
              <Counter target={stat.value} suffix={stat.suffix} color={stat.color} decimals={stat.decimals} />
              <p className="text-gray-500 text-sm mt-3 leading-tight">{stat.label}</p>
              <div className="mt-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-16 grid md:grid-cols-2 gap-6">

          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm flex flex-col">
            <div className="px-6 pt-8 pb-5 border-b border-gray-100">
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-50 text-green-700 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block pulse-dot" />
                  Запущена · июнь 2024
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-mono">
                  Работает
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Площадка{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>№1</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Запущена в июне 2024 года. Производит энергетики, холодные чаи и лимонады в алюминиевой банке.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100 flex-1">
              {[
                { icon: '⚡', value: '12 000', unit: 'бан/ч', label: 'Мощность', color: '#7c3aed' },
                { icon: '📅', value: 'Июнь', unit: '2024', label: 'Запуск', color: '#0891b2' },
                { icon: '🏪', value: 'X5,Магнит', unit: 'К&Б', label: 'Сети', color: '#ea580c' },
              ].map((item) => (
                <div key={item.label} className="p-5 flex flex-col gap-1 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-lg font-bold font-mono leading-tight" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-400 font-mono text-xs ml-1">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm flex flex-col">
            <div className="px-6 pt-8 pb-5 border-b border-gray-100">
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-50 text-green-700 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block pulse-dot" />
                  Запущена · апрель 2026
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block pulse-dot" />
                  Полная загрузка
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Площадка{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #ea580c, #db2777)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>№2</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Запущена в апреле 2026 года. Работает на полной загрузке производственных мощностей.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100 flex-1">
              {[
                { icon: '⚡', value: '9 000', unit: 'бан/ч', label: 'Мощность', color: '#ea580c' },
                { icon: '📅', value: 'Апрель', unit: '2026', label: 'Запуск', color: '#7c3aed' },
                { icon: '🔥', value: '100%', unit: 'загрузка', label: 'Мощности', color: '#db2777' },
              ].map((item) => (
                <div key={item.label} className="p-5 flex flex-col gap-1 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-lg font-bold font-mono leading-tight" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-400 font-mono text-xs ml-1">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="reveal delay-200 mt-12">
          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm p-6">
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-8 whitespace-nowrap">
                {['Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур',
                  'Энергетики', 'Лимонады', 'Холодные чаи', 'Тонизирующие', 'Мохито', 'Газированные', 'СТМ', 'Sleeve от 25K', 'Литография от 250K', 'Разработка рецептур'].map((tech, i) => (
                  <span key={i} className="text-gray-500 font-mono text-sm px-4 py-2 rounded-full border border-gray-200 bg-gray-50">
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
