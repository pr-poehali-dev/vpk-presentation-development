export default function BorodinoSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
    }}>
      {/* Декоративные блики */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ background: '#7c3aed' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none" style={{ background: '#0891b2' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-sm font-mono mb-8">
            <span className="pulse-dot w-2 h-2 rounded-full bg-orange-400 inline-block" />
            Ищем инвесторов · Запуск 2028
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Инвестируй в<br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>индустриальный парк</span><br />
            <span style={{
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>«Бородино»</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            вместе с ВПК — Вяземской производственной компанией
          </p>
        </div>

        {/* Описание */}
        <div className="reveal delay-100 max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Земля приобретена. Проектирование начато. Флагманский объект ВПК — 
            производственный комплекс полного цикла с линией мощностью{' '}
            <span className="text-white font-semibold">60 000 банок в час</span>,
            складами прямой отгрузки и фулфилментом для маркетплейсов.
          </p>
        </div>

        {/* Цифры */}
        <div className="reveal delay-200 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: '⚡', value: '60 000', unit: 'банок / час', label: 'Целевая мощность', color: '#a78bfa' },
            { icon: '🏢', value: '8 000', unit: 'м²', label: 'Площадь производства', color: '#67e8f9' },
            { icon: '📅', value: '2028', unit: 'год', label: 'Плановый запуск', color: '#fbbf24' },
            { icon: '💰', value: 'Открыт', unit: 'для инвесторов', label: 'Статус финансирования', color: '#f97316' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold font-mono mb-1" style={{ color: item.color }}>{item.value}</div>
              <div className="text-gray-400 font-mono text-xs mb-2">{item.unit}</div>
              <div className="text-gray-500 text-xs">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal delay-300 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              className="px-10 py-5 rounded-2xl text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                boxShadow: '0 0 40px rgba(249,115,22,0.3)',
              }}
            >
              Обсудить инвестиции →
            </button>
            <button className="px-10 py-5 rounded-2xl text-lg font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
              Скачать презентацию
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
