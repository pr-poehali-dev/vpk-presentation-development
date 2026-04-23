const VALUES = [
  {
    num: '01',
    title: 'Дерзость',
    text: 'Мы не боимся ставить невозможные цели. Дерзость — это готовность идти туда, куда другие боятся.',
    color: '#a78bfa',
  },
  {
    num: '02',
    title: 'Честность',
    text: 'С командой, клиентами и самими собой. Прозрачность в каждом решении — основа доверия, которое мы строим годами.',
    color: '#67e8f9',
  },
  {
    num: '03',
    title: 'Скорость',
    text: 'Скорость — не враг качества. Это дисциплина. Мы доставляем результат быстро, потому что уважаем время.',
    color: '#fb923c',
  },
  {
    num: '04',
    title: 'Эволюция',
    text: 'Мы учимся каждый день. Компания, которая перестаёт учиться — умирает. Мы растём быстрее рынка.',
    color: '#f472b6',
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: '#0a0f20' }}>
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 pointer-events-none"
        style={{ background: '#f472b6' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="text-orange-400 font-mono text-sm tracking-widest uppercase">/ наши ценности /</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
            То, во что<br />
            <span style={{
              background: 'linear-gradient(135deg, #fb923c, #f472b6)',
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
              className={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${i * 100 + 100} group relative rounded-2xl p-8 transition-all duration-300`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${v.color}30`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${v.color}08, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <span
                    className="text-7xl font-bold font-mono leading-none opacity-20 group-hover:opacity-40 transition-opacity"
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
                    <p className="text-gray-400 leading-relaxed text-lg">{v.text}</p>
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
