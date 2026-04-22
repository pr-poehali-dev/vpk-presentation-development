export default function MissionSection() {
  return (
    <section className="slide relative h-screen flex items-center overflow-hidden px-6" style={{ background: 'var(--deep-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="reveal text-center mb-10">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ наша миссия /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Мы не просто разливаем —<br />
            <span className="gradient-text-fire">мы запускаем бренды</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Полный цикл',
              text: 'Рецептура, дизайн, упаковка, сертификация и розлив — всё под одной крышей. Без лишних подрядчиков и потерянного времени.',
              color: '#FF6B00',
              delay: 'delay-100',
            },
            {
              icon: '🏭',
              title: 'Собственная линия',
              text: '12 000 банок в час на собственной производственной линии. Соблюдение всех технологических и санитарных стандартов.',
              color: '#8B5CF6',
              delay: 'delay-300',
            },
            {
              icon: '🛒',
              title: 'Вход в сети',
              text: 'Продукция ВПК уже стоит на полках X5 Group, Магнит, Красное & Белое. Мы знаем, как пройти путь от цеха до сети.',
              color: '#00FFFF',
              delay: 'delay-500',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`reveal ${item.delay} animated-border rounded-2xl p-px`}
            >
              <div className="rounded-2xl p-8 h-full flex flex-col gap-4" style={{ background: 'var(--card-bg)' }}>
                <div className="text-5xl float">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="h-1 rounded-full" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-8 rounded-3xl p-px animated-border">
          <div className="rounded-3xl p-8 text-center" style={{ background: 'var(--card-bg)' }}>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Наша задача —{' '}
              <span className="gradient-text-purple">сократить путь бренда</span>{' '}
              от идеи до полки{' '}
              <span className="gradient-text-fire">с нескольких лет до нескольких месяцев</span>"
            </p>
            <p className="mt-6 text-gray-500 font-mono text-sm">— Основатели ВПК</p>
          </div>
        </div>
      </div>
    </section>
  );
}