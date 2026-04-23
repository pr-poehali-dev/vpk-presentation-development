export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0d1230 50%, #080d1a 100%)' }}
    >
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, rgba(8,145,178,0.12) 50%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(219,39,119,0.12)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        <div className="flex justify-center mb-12">
          <img
            src="https://cdn.poehali.dev/projects/464e3b76-117f-416b-ac7d-1548e29f69d5/bucket/4a3bd78c-1a60-48c7-86ff-894bb057295d.png"
            alt="ВПК — Вяземская производственная компания"
            className="h-24 md:h-36 w-auto object-contain brightness-200"
          />
        </div>

        <h1 className="font-bold leading-none mb-8 tracking-tight">
          <span
            className="block text-[clamp(4rem,13vw,10rem)]"
            style={{
              background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #818cf8 70%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(167,139,250,0.4))',
            }}
          >
            Твой вкус.
          </span>
          <span
            className="block text-[clamp(3.5rem,11vw,8.5rem)]"
            style={{
              background: 'linear-gradient(135deg, #fb923c 0%, #f472b6 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(244,114,182,0.35))',
            }}
          >
            Твой бренд.
          </span>
        </h1>

        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-400/60" />
          <span
            className="text-[clamp(1.1rem,2.5vw,1.8rem)] font-bold font-mono tracking-wide"
            style={{
              background: 'linear-gradient(90deg, #67e8f9, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Энергетики · Холодные чаи · Лимонады · Мохито
          </span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed">
          Производим напитки в алюминиевой банке под вашим брендом —
          <span className="text-white font-semibold"> от рецептуры до полки</span> федеральных сетей.
        </p>

      </div>
    </section>
  );
}
