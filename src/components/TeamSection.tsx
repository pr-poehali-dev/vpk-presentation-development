const TEAM = [
  {
    name: 'Александр Волков',
    role: 'CEO & Co-founder',
    bio: '15 лет в технологиях. Бывший CTO в двух единорогах. Верит, что лучшие продукты рождаются на стыке страсти и данных.',
    emoji: '👨‍🚀',
    color: '#8B5CF6',
  },
  {
    name: 'Мария Соколова',
    role: 'CTO & Co-founder',
    bio: 'Архитектор систем, которые видели 10M+ запросов в секунду. Спикер на 20+ технических конференциях по всему миру.',
    emoji: '👩‍💻',
    color: '#00FFFF',
  },
  {
    name: 'Дмитрий Орлов',
    role: 'CPO & Co-founder',
    bio: 'Продуктовый мыслитель. Запустил 7 продуктов с нуля. Фанат простоты — убирает лишнее, пока не останется суть.',
    emoji: '🧪',
    color: '#FF6B00',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-32 px-6" style={{ background: 'var(--deep-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">/ команда /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Люди, которые<br />
            <span className="gradient-text-purple">делают это</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            За каждым продуктом стоят люди с характером. Познакомьтесь с теми, кто превращает идеи в реальность.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`reveal delay-${i * 200 + 100} group rounded-3xl p-px transition-all duration-300 hover:scale-105`}
              style={{ background: `linear-gradient(135deg, ${member.color}30, transparent, ${member.color}20)` }}
            >
              <div className="rounded-3xl p-8 h-full flex flex-col" style={{ background: 'var(--card-bg)' }}>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 float"
                  style={{ background: `${member.color}15`, border: `1px solid ${member.color}30` }}
                >
                  {member.emoji}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm font-mono mb-4" style={{ color: member.color }}>{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{member.bio}</p>

                <div className="mt-6 flex gap-3">
                  {['LinkedIn', 'Twitter'].map((soc) => (
                    <button
                      key={soc}
                      className="text-xs px-3 py-1.5 rounded-lg font-mono border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      {soc}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-300 mt-16 text-center">
          <p className="text-gray-400 mb-6">И ещё <span className="text-white font-bold">120+ человек</span>, которые делают магию каждый день</p>
          <button className="btn-neon px-8 py-4 rounded-xl font-mono font-semibold">
            Присоединиться к команде →
          </button>
        </div>
      </div>
    </section>
  );
}
