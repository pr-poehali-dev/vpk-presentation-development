export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 60%, #ede9fe 0%, #ffffff 60%)',
      }}
    >
      <div className="absolute inset-0 grid-lines opacity-40" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(8,145,178,0.07) 50%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'rgba(219,39,119,0.06)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src="https://cdn.poehali.dev/projects/464e3b76-117f-416b-ac7d-1548e29f69d5/bucket/4a3bd78c-1a60-48c7-86ff-894bb057295d.png"
            alt="ВПК — Вяземская производственная компания"
            className="h-20 md:h-28 w-auto object-contain"
          />
        </div>

        <h1 className="font-bold leading-none mb-6 tracking-tight">
          <span
            className="block text-[clamp(3.5rem,12vw,9rem)]"
            style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 40%, #7c3aed 70%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(124,58,237,0.2))',
            }}
          >
            Твой вкус.
          </span>
          <span
            className="block text-[clamp(3rem,10vw,7.5rem)]"
            style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #db2777 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(234,88,12,0.2))',
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
              background: 'linear-gradient(90deg, #0891b2, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Энергетики · Холодные чаи · Лимонады · Мохито
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
        </div>

        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
          Производим напитки в алюминиевой банке под вашим брендом —
          <span className="text-gray-800 font-medium"> от рецептуры до полки</span> федеральных сетей.
        </p>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
