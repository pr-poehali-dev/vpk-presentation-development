export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 60%, #1a0533 0%, #0a0a0a 60%)',
      }}
    >
      <div className="absolute inset-0 grid-lines opacity-40" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, rgba(0,255,255,0.15) 50%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'rgba(255,0,110,0.12)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-mono mb-10 backdrop-blur-sm">
          <span className="pulse-dot w-2 h-2 rounded-full bg-purple-400 inline-block" />
          Вяземская производственная компания
        </div>

        <h1 className="font-bold leading-none mb-6 tracking-tight">
          <span
            className="block text-[clamp(3.5rem,12vw,9rem)]"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e0c3fc 40%, #8B5CF6 70%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.6))',
            }}
          >
            Твой вкус.
          </span>
          <span
            className="block text-[clamp(3rem,10vw,7.5rem)]"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #FF006E 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.5))',
            }}
          >
            Твой бренд.
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/60" />
          <span
            className="text-[clamp(1.2rem,3vw,2rem)] font-bold font-mono"
            style={{
              background: 'linear-gradient(90deg, #00FFFF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.5))',
            }}
          >
            Энергетики · Холодные чаи · Лимонады · Мохито
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
          Производим напитки в алюминиевой банке под вашим брендом —
          <span className="text-white font-medium"> от рецептуры до полки</span> федеральных сетей.
        </p>

        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
          <span className="font-mono text-xs tracking-widest uppercase opacity-60">Прокрути вниз</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <div className="scroll-dot w-1 h-2 rounded-full bg-purple-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}