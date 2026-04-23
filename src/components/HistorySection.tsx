const TIMELINE = [
  {
    year: '2023',
    title: 'Регистрация и старт',
    text: 'Октябрь 2023 — официальная регистрация ООО «ВПК». Цель: производственная платформа для запуска напитков под ключ.',
    color: '#a78bfa',
    icon: '💡',
  },
  {
    year: '2024',
    title: 'Запуск производства',
    text: 'Собственная производственная линия запущена. Первые партии энергетиков и лимонадов. Старт контрактного розлива.',
    color: '#67e8f9',
    icon: '🏭',
  },
  {
    year: '2024',
    title: 'Вход в федеральные сети',
    text: 'Продукция появляется на полках X5 Group, Магнит и Красное & Белое. 100+ деклараций зарегистрировано.',
    color: '#fb923c',
    icon: '🛒',
  },
  {
    year: '2025',
    title: 'Масштабирование',
    text: 'Работа с федеральными брендами. 80+ млн банок произведено. Вторая линия — 5 млн банок в месяц.',
    color: '#f472b6',
    icon: '📈',
  },
  {
    year: '2026',
    title: 'Земля куплена — Бородино',
    text: 'Приобретён участок под индустриальный парк «Бородино». Начало проектирования. Привлечение инвесторов.',
    color: '#a78bfa',
    icon: '🏗️',
  },
  {
    year: '2028',
    title: 'Запуск парка «Бородино»',
    text: '8 000 м² производства, линия 60 000 банок в час, склады прямой отгрузки и фулфилмент для маркетплейсов.',
    color: '#67e8f9',
    icon: '🌆',
  },
];

const DELAYS = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300'];

export default function HistorySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#0a0f20' }}>
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ background: '#a78bfa' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">/ история компании /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            Путь от идеи<br />
            <span style={{
              background: 'linear-gradient(135deg, #fb923c, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>до федеральных полок</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIMELINE.map((item, i) => (
            <div
              key={item.title + i}
              className={`reveal ${DELAYS[i]} rounded-2xl p-8 h-full flex flex-col gap-5`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${item.color}30`,
              }}
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <span
                  className="text-sm font-mono px-3 py-1 rounded-full border font-bold"
                  style={{ color: item.color, borderColor: `${item.color}50`, background: `${item.color}15` }}
                >
                  {item.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
              <div className="mt-auto pt-4">
                <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
