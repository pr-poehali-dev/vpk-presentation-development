const TEAM = [
  {
    name: 'Евгений Петиков',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и продаж. Строит партнёрства с федеральными сетями и находит точки роста для брендов-партнёров ВПК.',
    emoji: '🤝',
    color: '#7c3aed',
  },
  {
    name: 'Денис Штанько',
    role: 'Генеральный директор',
    bio: 'Операционное управление производством. Отвечает за то, чтобы каждая банка сходила с линии точно в срок и по стандарту.',
    emoji: '🏭',
    color: '#0891b2',
  },
  {
    name: 'Даниэль Швец',
    role: 'Сооснователь',
    bio: 'Развитие бизнеса и привлечение новых партнёров на контрактное производство. Знает, как вывести бренд на полку с нуля.',
    emoji: '🚀',
    color: '#ea580c',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-cyan-600 font-mono text-sm tracking-widest uppercase">/ команда /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            Команда,<br />
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>которая строит ВПК</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Управление осуществляется напрямую собственниками — без лишней иерархии, с полной ответственностью за результат.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`reveal delay-${i * 200 + 100} group rounded-3xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                style={{ background: `${member.color}10`, border: `1px solid ${member.color}25` }}
              >
                {member.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-mono mb-4" style={{ color: member.color }}>{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="reveal delay-300 mt-16 text-center">
          <p className="text-gray-500 mb-6">Также в числе учредителей: <span className="text-gray-900 font-bold">Виктория Ремешевская</span> и <span className="text-gray-900 font-bold">Елизавета Львова</span></p>
          <button
            className="px-8 py-4 rounded-xl font-mono font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}
          >
            Стать партнёром →
          </button>
        </div>
      </div>
    </section>
  );
}
