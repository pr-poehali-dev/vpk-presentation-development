export default function ArnesSection() {
  const benefits = [
    {
      num: '01',
      audience: 'Малый и средний бизнес',
      title: 'Вход в FMCG с премиальной упаковкой',
      text: 'Запустить продукт сразу в брендированной банке — без необходимости заказывать сотни тысяч или миллионы единиц. Наши партнёры особенно ценят эту возможность.',
      color: '#a78bfa',
    },
    {
      num: '02',
      audience: 'Крупные бренды',
      title: 'Быстрое тестирование без рисков',
      text: 'Новые вкусы, лимитированные серии, проверка гипотез — без серьёзных инвестиций и складских рисков. Скорость вывода продукта кратно выше.',
      color: '#67e8f9',
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#080d1a' }}>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-12 pointer-events-none"
        style={{ background: '#a78bfa' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="reveal text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">/ партнёрство /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            Арнест — наш<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>стратегический поставщик</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-xl leading-relaxed">
            Единственный производитель в России, предлагающий алюминиевую банку с литографией
            от тиража <span className="text-white font-bold">100 000 штук</span>. Для рынка это критически важно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((item, i) => (
            <div
              key={item.num}
              className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${i * 200 + 100} group relative rounded-2xl p-8 transition-all duration-300`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${item.color}30`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}08, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <span
                    className="text-7xl font-bold font-mono leading-none opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: item.color }}>
                      {item.audience}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-300 rounded-3xl p-10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Что это даёт рынку</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📉', label: 'Снижает барьер входа в рынок', color: '#a78bfa' },
              { icon: '🚀', label: 'Ускоряет вывод новых продуктов', color: '#67e8f9' },
              { icon: '🛒', label: 'Повышает визуальный облик бренда на полке', color: '#fb923c' },
            ].map((point) => (
              <div key={point.label} className="flex flex-col items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${point.color}15`, border: `1px solid ${point.color}30` }}
                >
                  {point.icon}
                </div>
                <p className="text-gray-300 font-medium text-base leading-snug max-w-[180px]">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
