const TEAM = [
  {
    name: 'Евгений Петиков',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и продаж. Строит партнёрства с федеральными сетями и находит точки роста для брендов-партнёров ВПК.',
    emoji: '🤝',
    color: '#a78bfa',
  },
  {
    name: 'Денис Штанько',
    role: 'Сооснователь · Генеральный директор',
    bio: 'Операционное управление производством. Отвечает за то, чтобы каждая банка сходила с линии точно в срок и по стандарту.',
    emoji: '🏭',
    color: '#67e8f9',
  },
  {
    name: 'Даниэль Швец',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и привлечение партнёров на контрактное производство. Знает, как вывести бренд на полку с нуля.',
    emoji: '🚀',
    color: '#fb923c',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-32 px-6" style={{ background: '#0a0f20' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] opacity-08 pointer-events-none"
        style={{ background: '#67e8f9' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">/ команда /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            Команда,<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>которая строит ВПК</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-xl">
            Управление осуществляется напрямую собственниками — без лишней иерархии, с полной ответственностью за результат.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`reveal delay-${i * 200 + 100} group rounded-3xl p-8 transition-all duration-300`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${member.color}30`,
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                style={{ background: `${member.color}15`, border: `1px solid ${member.color}30` }}
              >
                {member.emoji}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm font-mono mb-4" style={{ color: member.color }}>{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="reveal delay-300 mt-16 text-center">
          <p className="text-gray-500 mb-6 text-lg">Также в числе учредителей: <span className="text-white font-bold">Виктория Ремешевская</span> и <span className="text-white font-bold">Елизавета Львова</span></p>
          <button
            className="px-10 py-5 rounded-xl font-mono font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl text-lg"
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              boxShadow: '0 0 40px rgba(167,139,250,0.3)',
            }}
          >
            Стать партнёром →
          </button>
        </div>
      </div>
    </section>
  );
}
