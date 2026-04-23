export default function ArnesSection() {
  const benefits = [
    {
      num: '01',
      audience: 'Малый и средний бизнес',
      title: 'Вход в FMCG с премиальной упаковкой',
      text: 'Запустить продукт сразу в брендированной банке — без необходимости заказывать сотни тысяч или миллионы единиц. Наши партнёры особенно ценят эту возможность.',
      color: '#7c3aed',
    },
    {
      num: '02',
      audience: 'Крупные бренды',
      title: 'Быстрое тестирование без рисков',
      text: 'Новые вкусы, лимитированные серии, проверка гипотез — без серьёзных инвестиций и складских рисков. Скорость вывода продукта кратно выше.',
      color: '#0891b2',
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="reveal text-center mb-20">
          <span className="text-cyan-600 font-mono text-sm tracking-widest uppercase">/ партнёрство /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            Арнест — наш<br />
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>стратегический поставщик</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Мы работаем с Арнест — фактически единственным производителем в России,
            который предлагает алюминиевую банку с литографией от тиража <span className="text-gray-900 font-bold">100 000 штук</span>.
            Для рынка это критически важно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((item, i) => (
            <div
              key={item.num}
              className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${i * 200 + 100} group relative rounded-2xl p-8 bg-white border hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-default`}
              style={{ borderColor: `${item.color}25` }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}06, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <span
                    className="text-6xl font-bold font-mono leading-none opacity-15 group-hover:opacity-30 transition-opacity"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: item.color }}>
                      {item.audience}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-300 rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
          <p className="text-center text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">Что это даёт рынку</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📉', label: 'Снижает барьер входа в рынок', color: '#7c3aed' },
              { icon: '🚀', label: 'Ускоряет вывод новых продуктов', color: '#0891b2' },
              { icon: '🛒', label: 'Повышает визуальный облик бренда на полке', color: '#ea580c' },
            ].map((point) => (
              <div key={point.label} className="flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${point.color}10`, border: `1px solid ${point.color}25` }}
                >
                  {point.icon}
                </div>
                <p className="text-gray-700 font-medium text-sm leading-snug max-w-[160px]">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
