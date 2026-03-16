import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Distinction OS', href: '#system' },
    { label: 'OpenClaw', href: '#openclaw' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(6,8,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#06080F', fontWeight: 800, fontSize: 14, fontFamily: 'Inter' }}>D</span>
            </div>
            <span style={{
              color: '#F0EEE8', fontWeight: 600, fontSize: 15,
              fontFamily: 'Inter', letterSpacing: '-0.01em',
            }}>
              Distinction <span style={{ color: '#C9A84C' }}>Creative</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                color: 'rgba(240,238,232,0.55)', fontSize: 14, fontWeight: 500,
                fontFamily: 'Inter', textDecoration: 'none', letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#F0EEE8'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.55)'}
              >{l.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#cta" style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            color: '#06080F', fontWeight: 700, fontSize: 13,
            padding: '10px 22px', borderRadius: 8,
            textDecoration: 'none', fontFamily: 'Inter',
            letterSpacing: '0.03em', textTransform: 'uppercase',
            transition: 'opacity 0.2s, transform 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book Strategy Session
          </a>
        </div>
      </div>
    </header>
  );
}