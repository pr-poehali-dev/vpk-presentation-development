export default function MissionSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-600 font-mono text-sm tracking-widest uppercase">/ наша миссия /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            Мы не просто разливаем —<br />
            <span style={{
              background: 'linear-gradient(135deg, #ea580c, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>мы запускаем бренды</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Полный цикл',
              text: 'Рецептура, дизайн, упаковка, сертификация и розлив — всё под одной крышей. Без лишних подрядчиков и потерянного времени.',
              color: '#ea580c',
              delay: 'delay-100',
            },
            {
              icon: '🏭',
              title: 'Собственная линия',
              text: '12 000 банок в час на собственной производственной линии. Соблюдение всех технологических и санитарных стандартов.',
              color: '#7c3aed',
              delay: 'delay-300',
            },
            {
              icon: '🛒',
              title: 'Вход в сети',
              text: 'Продукция ВПК уже стоит на полках X5 Group, Магнит, Красное & Белое. Мы знаем, как пройти путь от цеха до сети.',
              color: '#0891b2',
              delay: 'delay-500',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`reveal ${item.delay} rounded-2xl p-8 h-full flex flex-col gap-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-20 rounded-3xl p-12 text-center bg-white border border-gray-100 shadow-sm">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed">
            "Наша задача —{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>сократить путь бренда</span>{' '}
            от идеи до полки{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ea580c, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>с нескольких лет до нескольких месяцев</span>"
          </p>
          <p className="mt-6 text-gray-400 font-mono text-sm">— Основатели ВПК</p>
        </div>
      </div>
    </section>
  );
}
