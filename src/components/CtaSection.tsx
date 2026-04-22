export default function CtaSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-gray-900">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono mb-10">
            <span className="pulse-dot w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            Мы открыты для сотрудничества
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Запустим
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>ваш напиток?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Обсудим вашу задачу: рецептура, дизайн, объём, сети. Минимальная партия от 25 000 банок — мы готовы работать с новыми брендами.
          </p>
        </div>

        <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            className="px-10 py-5 rounded-2xl text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
              boxShadow: '0 0 40px rgba(124,58,237,0.3)',
            }}
          >
            Обсудить производство →
          </button>
          <button className="px-10 py-5 rounded-2xl text-lg font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-all">
            Рассчитать стоимость
          </button>
        </div>

        <div className="reveal delay-400 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { label: 'Sleeve от', value: '25 000 банок' },
            { label: 'Литография от', value: '250 000 банок' },
            { label: 'Мощность линии', value: '12 000 / час' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-xl font-bold font-mono"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >{item.value}</div>
              <div className="text-gray-500 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-10 mt-32 pt-8 border-t border-white/10 text-center">
        <img
          src="https://cdn.poehali.dev/projects/464e3b76-117f-416b-ac7d-1548e29f69d5/bucket/f0ace726-ce65-4e1c-b841-4438a5f61b65.jpg"
          alt="ВПК"
          className="h-10 w-auto object-contain mx-auto mb-4 opacity-50"
        />
        <p className="text-gray-600 font-mono text-sm">
          © 2024 ООО «ВПК» — Вяземская производственная компания. Все права защищены.
        </p>
      </footer>
    </section>
  );
}