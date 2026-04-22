import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 2000000, suffix: '+', label: 'Активных пользователей', color: '#8B5CF6' },
  { value: 47, suffix: '', label: 'Стран присутствия', color: '#00FFFF' },
  { value: 99.9, suffix: '%', label: 'Uptime платформы', color: '#FF6B00', decimals: 1 },
  { value: 340, suffix: '%', label: 'Рост за 2 года', color: '#FF006E' },
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
    <section className="relative py-32 px-6" style={{ background: 'var(--deep-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ цифры говорят /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Результаты,<br />
            <span className="gradient-text-purple">которые видно</span>
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
                {['React', 'Python', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'GraphQL', 'WebSockets', 'AI/ML', 'Edge Computing',
                  'React', 'Python', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'GraphQL', 'WebSockets', 'AI/ML', 'Edge Computing'].map((tech, i) => (
                  <span key={i} className="text-gray-400 font-mono text-sm px-4 py-2 rounded-full border border-white/10">
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
