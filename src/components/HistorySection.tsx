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
    text: 'Работа с федеральными брендами на контрактном производстве. 80+ млн банок произведено. Вторая производственная линия выходит на мощность 5 000 000 банок в месяц.',
    tag: 'Рост',
    color: '#FF006E',
    side: 'right',
    icon: '📈',
  },
  {
    year: '2026',
    title: 'Земля куплена — Бородино',
    text: 'Приобретён земельный участок под строительство индустриального парка «Бородино». Начало проектирования. Ищем инвесторов для реализации амбициозного проекта.',
    tag: 'Сейчас',
    color: '#8B5CF6',
    side: 'left',
    icon: '🏗️',
  },
  {
    year: '2028',
    title: 'Запуск индустриального парка «Бородино»',
    text: 'Плановый запуск флагманского объекта ВПК: 8 000 м² производства, линия 60 000 банок в час, склады прямой отгрузки в сети, ответственное хранение и фулфилмент для маркетплейсов.',
    tag: 'Цель',
    color: '#00FFFF',
    side: 'right',
    icon: '🌆',
  },
];

export default function HistorySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: 'var(--deep-bg)' }}>
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ история компании /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            Путь от идеи<br />
            <span className="gradient-text-fire">до федеральных полок</span>
          </h2>
        </div>

        <div className="timeline-line relative">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year + i}
              className={`flex items-center mb-16 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-5/12 ${item.side === 'right' ? 'reveal-right' : 'reveal-left'} delay-${(i % 3 + 1) * 100}`}>
                <div className="animated-border rounded-2xl p-px">
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:scale-105"
                    style={{ background: 'var(--card-bg)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl float">{item.icon}</span>
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full border"
                        style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="h-1 rounded-full" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
                    </div>
                  </div>
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