export default function MissionSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: 'var(--deep-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ наша миссия /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Мы не просто строим —<br />
            <span className="gradient-text-fire">мы меняем правила</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Скорость',
              text: 'Мы двигаемся быстрее рынка. Идея утром — прототип вечером. Готовый продукт — через неделю.',
              color: '#FF6B00',
              delay: 'delay-100',
            },
            {
              icon: '🚀',
              title: 'Масштаб',
              text: 'Мыслим глобально с первого дня. Каждое решение проектируется под миллионы пользователей.',
              color: '#8B5CF6',
              delay: 'delay-300',
            },
            {
              icon: '🔮',
              title: 'Будущее',
              text: 'Не догоняем тренды — создаём их. Технологии завтрашнего дня внедряем сегодня.',
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

        <div className="reveal delay-200 mt-20 rounded-3xl p-px animated-border">
          <div className="rounded-3xl p-12 text-center" style={{ background: 'var(--card-bg)' }}>
            <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
              "Мы верим, что{' '}
              <span className="gradient-text-purple">правильная технология</span>{' '}
              в руках правильных людей{' '}
              <span className="gradient-text-fire">меняет мир</span>"
            </p>
            <p className="mt-6 text-gray-500 font-mono text-sm">— Основатель компании</p>
          </div>
        </div>
      </div>
    </section>
  );
}
