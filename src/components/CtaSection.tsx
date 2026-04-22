export default function CtaSection() {
  return (
    <section className="slide relative h-screen flex flex-col justify-center overflow-hidden px-6" style={{ background: '#050505' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ background: 'conic-gradient(#8B5CF6, #00FFFF, #FF006E, #FF6B00, #8B5CF6)' }} />

      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono mb-10">
            <span className="pulse-dot w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            Мы открыты для сотрудничества
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Запустим
            <br />
            <span className="gradient-text-purple text-glow-purple">ваш напиток?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Обсудим вашу задачу: рецептура, дизайн, объём, сети. Минимальная партия от 25 000 банок — мы готовы работать с новыми брендами.
          </p>
        </div>

        <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            className="px-10 py-5 rounded-2xl text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #00FFFF)',
              boxShadow: '0 0 40px rgba(139,92,246,0.4)',
            }}
          >
            Обсудить производство →
          </button>
          <button className="px-10 py-5 rounded-2xl text-lg font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all">
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
              <div className="text-xl font-bold gradient-text-purple font-mono">{item.value}</div>
              <div className="text-gray-500 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-10 mt-32 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 font-mono text-sm">
          © 2024 ООО «ВПК» — Вяземская производственная компания. Все права защищены.
        </p>
      </footer>
    </section>
  );
}