const TEAM = [
  {
    name: 'Евгений Петиков',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и продаж. Строит партнёрства с федеральными сетями и находит точки роста для брендов-партнёров ВПК.',
    emoji: '🤝',
    color: '#8B5CF6',
  },
  {
    name: 'Денис Штанько',
    role: 'Генеральный директор',
    bio: 'Операционное управление производством. Отвечает за то, чтобы каждая банка сходила с линии точно в срок и по стандарту.',
    emoji: '🏭',
    color: '#00FFFF',
  },
  {
    name: 'Даниэль Швец',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и привлечение новых партнёров на контрактное производство. Знает, как вывести бренд на полку с нуля.',
    emoji: '🚀',
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
            Команда,<br />
            <span className="gradient-text-purple">которая строит ВПК</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Управление осуществляется напрямую собственниками — без лишней иерархии, с полной ответственностью за результат.
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
          <p className="text-gray-400 mb-6">Также в числе учредителей: <span className="text-white font-bold">Виктория Ремешевская</span> и <span className="text-white font-bold">Елизавета Львова</span></p>
          <button className="btn-neon px-8 py-4 rounded-xl font-mono font-semibold">
            Стать партнёром →
          </button>
        </div>
      </div>
    </section>
  );
}