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

        {/* Площадка 1 */}
        <div className="reveal delay-200 mt-16">
          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <div className="px-8 pt-10 pb-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-4xl">🏭</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-50 text-green-700 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block pulse-dot" />
                      Запущена · июнь 2024
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-mono">
                      Работает
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Производственная площадка{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>№1</span>
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-2xl">
                    Первая площадка запущена в июне 2024 года. Производит энергетики, холодные чаи и лимонады в алюминиевой банке.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { icon: '⚡', value: '12 000', unit: 'банок / час', label: 'Мощность линии', color: '#7c3aed' },
                { icon: '📅', value: 'Июнь', unit: '2024', label: 'Дата запуска', color: '#0891b2' },
                { icon: '🏪', value: 'X5, Магнит,', unit: 'К&Б', label: 'Поставки в федеральные сети', color: '#ea580c' },
              ].map((item) => (
                <div key={item.label} className="p-8 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-400 font-mono text-sm ml-2">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Площадка 2 */}
        <div className="reveal delay-200 mt-8">
          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <div className="px-8 pt-10 pb-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-4xl">🏭</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-50 text-green-700 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block pulse-dot" />
                      Запущена · апрель 2026
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block pulse-dot" />
                      Полная загрузка
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Производственная площадка{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #ea580c, #db2777)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>№2</span>
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-2xl">
                    Вторая площадка запущена в апреле 2026 года. На сегодняшний день работает на полной загрузке производственных мощностей.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { icon: '⚡', value: '9 000', unit: 'банок / час', label: 'Мощность линии', color: '#ea580c' },
                { icon: '📅', value: 'Апрель', unit: '2026', label: 'Дата запуска', color: '#7c3aed' },
                { icon: '🔥', value: '100%', unit: 'загрузка', label: 'Полная загрузка мощностей', color: '#db2777' },
              ].map((item) => (
                <div key={item.label} className="p-8 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-400 font-mono text-sm ml-2">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Бегущая строка */}
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

        {/* Бородино */}
        <div className="reveal delay-200 mt-8">
          <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            <div className="px-8 pt-10 pb-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-4xl">🏗️</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 text-xs font-mono">
                      <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
                      Земля куплена · 2026
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-mono">
                      <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                      Ищем инвесторов
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-mono">
                      Запуск · 2028
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Индустриальный парк{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #0891b2, #7c3aed)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>«Бородино»</span>
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-2xl">
                    Флагманский производственный объект ВПК. Земля приобретена, начато проектирование. Ищем стратегических инвесторов для строительства.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { icon: '⚡', value: '60 000', unit: 'банок / час', label: 'Целевая мощность', color: '#7c3aed' },
                { icon: '🏢', value: '8 000', unit: 'м²', label: 'Площадь производства', color: '#0891b2' },
                { icon: '📅', value: '2028', unit: 'год', label: 'Плановый запуск', color: '#ea580c' },
                { icon: '💰', value: 'Открыт', unit: 'для инвесторов', label: 'Статус финансирования', color: '#db2777' },
              ].map((item) => (
                <div key={item.label} className="p-8 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <span className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</span>
                    <span className="text-gray-400 font-mono text-sm ml-2">{item.unit}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
