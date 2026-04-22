const TIMELINE = [
  {
    year: '2019',
    title: 'Рождение идеи',
    text: 'Трое друзей в маленькой комнате решают: существующие решения слишком медленны, слишком дороги и слишком сложны. Мы можем лучше.',
    tag: 'Основание',
    color: '#8B5CF6',
    side: 'left',
    icon: '💡',
  },
  {
    year: '2020',
    title: 'Первый продукт',
    text: 'MVP запущен за 6 недель. 47 первых пользователей оставили отзывы, которые полностью изменили вектор развития — и мы им благодарны.',
    tag: 'Запуск',
    color: '#00FFFF',
    side: 'right',
    icon: '🛸',
  },
  {
    year: '2021',
    title: 'Прорывной рост',
    text: 'Первые инвестиции. Команда выросла с 3 до 28 человек за год. Продукт выходит на международный рынок — первые клиенты из 12 стран.',
    tag: 'Рост × 10',
    color: '#FF6B00',
    side: 'left',
    icon: '📈',
  },
  {
    year: '2022',
    title: 'Технологический сдвиг',
    text: 'Мы переосмыслили архитектуру с нуля. Новая платформа работает в 40 раз быстрее. Конкуренты начинают копировать наши решения.',
    tag: 'Технологии',
    color: '#FF006E',
    side: 'right',
    icon: '⚙️',
  },
  {
    year: '2023',
    title: 'Масштаб и признание',
    text: '500 000 активных пользователей. Попадаем в топ-10 Forbes "Самые инновационные компании". Открываем офисы в трёх городах.',
    tag: 'Признание',
    color: '#8B5CF6',
    side: 'left',
    icon: '🏆',
  },
  {
    year: '2024',
    title: 'Новая орбита',
    text: 'Выходим на глобальный уровень. Партнёрства с мировыми лидерами рынка. 2 миллиона пользователей и первый выход на прибыльность.',
    tag: 'Сейчас',
    color: '#00FFFF',
    side: 'right',
    icon: '🌍',
  },
];

export default function HistorySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">/ история компании /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Путь от гаража<br />
            <span className="gradient-text-purple">до космоса</span>
          </h2>
        </div>

        <div className="timeline-line relative">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`flex items-center mb-16 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-5/12 ${item.side === 'right' ? 'reveal-right' : 'reveal-left'} delay-${(i % 3 + 1) * 100}`}>
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--card-bg)',
                    borderColor: `${item.color}30`,
                    boxShadow: `0 0 30px ${item.color}15`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full border"
                      style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>

              <div className="w-2/12 flex justify-center">
                <div className="relative flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold font-mono border-2 reveal-scale z-10"
                    style={{
                      background: 'var(--deep-bg)',
                      borderColor: item.color,
                      color: item.color,
                      boxShadow: `0 0 20px ${item.color}50`,
                    }}
                  >
                    {item.year.slice(2)}
                  </div>
                </div>
              </div>

              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
