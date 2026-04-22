const VALUES = [
  {
    num: '01',
    title: 'Дерзость',
    text: 'Мы не боимся ставить невозможные цели. Дерзость — это не самонадеянность, это готовность идти туда, куда другие боятся.',
    color: '#8B5CF6',
  },
  {
    num: '02',
    title: 'Честность',
    text: 'С командой, клиентами и самими собой. Прозрачность в каждом решении — это основа доверия, которое мы строим годами.',
    color: '#00FFFF',
  },
  {
    num: '03',
    title: 'Скорость',
    text: 'Скорость — не враг качества. Это дисциплина. Мы доставляем результат быстро, потому что уважаем время — наше и клиента.',
    color: '#FF6B00',
  },
  {
    num: '04',
    title: 'Эволюция',
    text: 'Мы учимся каждый день. Компания которая перестаёт учиться — умирает. Мы растём быстрее, чем меняется рынок.',
    color: '#FF006E',
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#050505' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-[100px]" style={{ background: '#8B5CF6' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-orange-400 font-mono text-sm tracking-widest uppercase">/ наши ценности /</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-white">
            То, во что<br />
            <span className="gradient-text-fire">мы верим</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${i * 100 + 100} group relative rounded-2xl p-8 border overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-default`}
              style={{ background: 'var(--card-bg)', borderColor: `${v.color}20` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${v.color}08, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <span
                    className="text-6xl font-bold font-mono leading-none opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ color: v.color }}
                  >
                    {v.num}
                  </span>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-3 transition-all duration-300"
                      style={{ color: v.color }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{v.text}</p>
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
