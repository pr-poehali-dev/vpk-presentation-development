const TIMELINE = [
  {
    year: '2023',
    title: 'Регистрация и старт',
    text: 'Октябрь 2023 года — официальная регистрация ООО «ВПК». Команда основателей ставит амбициозную цель: создать производственную платформу для запуска напитков под ключ.',
    tag: 'Основание',
    color: '#8B5CF6',
    side: 'left',
    icon: '💡',
  },
  {
    year: '2024',
    title: 'Запуск производства',
    text: 'Собственная производственная линия запущена. Первые партии энергетиков и лимонадов сходят с конвейера. Начало контрактного розлива для внешних брендов.',
    tag: 'Запуск',
    color: '#00FFFF',
    side: 'right',
    icon: '🏭',
  },
  {
    year: '2024',
    title: 'Вход в федеральные сети',
    text: 'Продукция ВПК появляется на полках X5 Group, Магнит и Красное & Белое. Более 100 деклараций на продукцию зарегистрировано — энергетики, лимонады, газированные напитки.',
    tag: 'Федеральные сети',
    color: '#FF6B00',
    side: 'left',
    icon: '🛒',
  },
  {
    year: '2025',
    title: 'Масштабирование',
    text: 'Работа с федеральными брендами на контрактном производстве. 80+ млн банок произведено. ВПК становится надёжным производственным партнёром для брендов по всей России.',
    tag: 'Рост',
    color: '#FF006E',
    side: 'right',
    icon: '📈',
  },
  {
    year: '2026',
    title: 'Вторая площадка',
    text: 'Развитие производственных мощностей и запуск второй производственной площадки. Новый уровень объёмов и новые возможности для партнёров.',
    tag: 'Будущее',
    color: '#8B5CF6',
    side: 'left',
    icon: '🚀',
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
            Путь от идеи<br />
            <span className="gradient-text-purple">до федеральных полок</span>
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