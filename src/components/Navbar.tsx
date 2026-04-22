import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img
          src="https://cdn.poehali.dev/projects/464e3b76-117f-416b-ac7d-1548e29f69d5/bucket/4a3bd78c-1a60-48c7-86ff-894bb057295d.png"
          alt="ВПК — Вяземская производственная компания"
          className="h-9 w-auto object-contain"
        />

        <a
          href="#cta"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md"
          style={{ background: 'linear-gradient(135deg, #1e3a8a, #dc2626)' }}
        >
          Стать партнёром →
        </a>
      </div>
    </header>
  );
}
