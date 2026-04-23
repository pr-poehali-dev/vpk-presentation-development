export default function MissionSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#080d1a' }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ background: '#ea580c' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ наша миссия /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            Мы не просто разливаем —<br />
            <span style={{
              background: 'linear-gradient(135deg, #fb923c, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>мы запускаем бренды</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Полный цикл',
              text: 'Рецептура, дизайн, упаковка, сертификация и розлив — всё под одной крышей. Без лишних подрядчиков.',
              color: '#fb923c',
              delay: 'delay-100',
            },
            {
              icon: '🏭',
              title: 'Собственная линия',
              text: '12 000 банок в час на собственной производственной линии. Все технологические и санитарные стандарты.',
              color: '#a78bfa',
              delay: 'delay-300',
            },
            {
              icon: '🛒',
              title: 'Вход в сети',
              text: 'Продукция ВПК уже стоит на полках X5 Group, Магнит, Красное & Белое. Знаем путь от цеха до сети.',
              color: '#67e8f9',
              delay: 'delay-500',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`reveal ${item.delay} rounded-2xl p-8 h-full flex flex-col gap-5`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${item.color}30`,
              }}
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{item.text}</p>
              <div className="mt-auto pt-4">
                <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-200 mt-16 rounded-3xl p-12 text-center" style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.2)' }}>
          <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
            "Наша задача —{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>сократить путь бренда</span>{' '}
            от идеи до полки{' '}
            <span style={{
              background: 'linear-gradient(135deg, #fb923c, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>с нескольких лет до нескольких месяцев</span>"
          </p>
          <p className="mt-6 text-gray-500 font-mono text-sm">— Основатели ВПК</p>
        </div>
      </div>
    </section>
  );
}
