const TIMELINE = [
  {
    year: '2023',
    title: 'Регистрация и старт',
    text: 'Октябрь 2023 года — официальная регистрация ООО «ВПК». Команда основателей ставит амбициозную цель: создать производственную платформу для запуска напитков под ключ.',
    color: '#7c3aed',
    icon: '💡',
  },
  {
    year: '2024',
    title: 'Запуск производства',
    text: 'Собственная производственная линия запущена. Первые партии энергетиков и лимонадов сходят с конвейера. Начало контрактного розлива для внешних брендов.',
    color: '#0891b2',
    icon: '🏭',
  },
  {
    year: '2024',
    title: 'Вход в федеральные сети',
    text: 'Продукция ВПК появляется на полках X5 Group, Магнит и Красное & Белое. Более 100 деклараций на продукцию зарегистрировано — энергетики, лимонады, газированные напитки.',
    color: '#ea580c',
    icon: '🛒',
  },
  {
    year: '2025',
    title: 'Масштабирование',
    text: 'Работа с федеральными брендами на контрактном производстве. 80+ млн банок произведено. Вторая производственная линия выходит на мощность 5 000 000 банок в месяц.',
    color: '#db2777',
    icon: '📈',
  },
  {
    year: '2026',
    title: 'Земля куплена — Бородино',
    text: 'Приобретён земельный участок под строительство индустриального парка «Бородино». Начало проектирования. Ищем инвесторов для реализации амбициозного проекта.',
    color: '#7c3aed',
    icon: '🏗️',
  },
  {
    year: '2028',
    title: 'Запуск индустриального парка «Бородино»',
    text: 'Плановый запуск флагманского объекта ВПК: 8 000 м² производства, линия 60 000 банок в час, склады прямой отгрузки в сети, ответственное хранение и фулфилмент для маркетплейсов.',
    color: '#0891b2',
    icon: '🌆',
  },
];

const DELAYS = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300'];

export default function HistorySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-purple-600 font-mono text-sm tracking-widest uppercase">/ история компании /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            Путь от идеи<br />
            <span style={{
              background: 'linear-gradient(135deg, #ea580c, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>до федеральных полок</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TIMELINE.map((item, i) => (
            <div
              key={item.title + i}
              className={`reveal ${DELAYS[i]} rounded-2xl p-8 h-full flex flex-col gap-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="text-5xl">{item.icon}</div>
              <div>
                <span
                  className="text-xs font-mono px-3 py-1 rounded-full border"
                  style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}
                >
                  {item.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
