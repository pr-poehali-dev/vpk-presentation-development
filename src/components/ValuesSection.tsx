const VALUES = [
  {
    num: '01',
    title: 'Дерзость',
    text: 'Мы не боимся ставить невозможные цели. Дерзость — это не самонадеянность, это готовность идти туда, куда другие боятся.',
    color: '#7c3aed',
  },
  {
    num: '02',
    title: 'Честность',
    text: 'С командой, клиентами и самими собой. Прозрачность в каждом решении — это основа доверия, которое мы строим годами.',
    color: '#0891b2',
  },
  {
    num: '03',
    title: 'Скорость',
    text: 'Скорость — не враг качества. Это дисциплина. Мы доставляем результат быстро, потому что уважаем время — наше и клиента.',
    color: '#ea580c',
  },
  {
    num: '04',
    title: 'Эволюция',
    text: 'Мы учимся каждый день. Компания которая перестаёт учиться — умирает. Мы растём быстрее, чем меняется рынок.',
    color: '#db2777',
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">/ наши ценности /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
            То, во что<br />
            <span style={{
              background: 'linear-gradient(135deg, #ea580c, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>мы верим</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${i * 100 + 100} group relative rounded-2xl p-8 border bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-default`}
              style={{ borderColor: `${v.color}25` }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${v.color}06, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <span
                    className="text-6xl font-bold font-mono leading-none opacity-15 group-hover:opacity-30 transition-opacity"
                    style={{ color: v.color }}
                  >
                    {v.num}
                  </span>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: v.color }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
