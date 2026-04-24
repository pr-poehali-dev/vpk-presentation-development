export default function BorodinoSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
    }}>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ background: '#7c3aed' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none" style={{ background: '#0891b2' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="reveal text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Индустриальный парк</span><br />
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
        <div className="reveal delay-200 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '⚡', value: '60 000', unit: 'банок / час', label: 'Целевая мощность', color: '#a78bfa' },
            { icon: '🏢', value: '43 000', unit: 'м²', label: 'Общая площадь', color: '#67e8f9' },
            { icon: '🏭', value: '8 000', unit: 'м²', label: 'Площадь производства', color: '#60a5fa' },
            { icon: '📅', value: '2026', unit: 'год', label: 'Плановый запуск', color: '#fbbf24' },
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

        {/* Логистические преимущества */}
        <div className="reveal delay-300 max-w-4xl mx-auto">
          <h3 className="text-center text-white font-semibold text-xl mb-6">Логистические преимущества</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { from: 'Вязьма', to: 'Москва', km: '210 км', icon: '🛣️', color: '#a78bfa' },
              { from: 'Вязьма', to: 'Минск', km: '490 км', icon: '🛣️', color: '#67e8f9' },
              { from: 'Вязьма', to: 'Санкт-Петербург', km: '760 км', icon: '🛣️', color: '#fbbf24' },
            ].map((item) => (
              <div
                key={item.to}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center gap-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{item.from} → {item.to}</div>
                  <div className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.km}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}