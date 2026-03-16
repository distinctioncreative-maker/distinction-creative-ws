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
    { label: 'System', href: '#system' },
    { label: 'OpenClaw', href: '#openclaw' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      background: scrolled ? 'rgba(6,8,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(32px) saturate(1.8)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(1.8)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.07)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo — refined wordmark */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Mark */}
            <div style={{
              width: 30, height: 30, borderRadius: 7,
              background: 'linear-gradient(145deg, #C9A84C 0%, #E8C97A 55%, #B8902A 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(201,168,76,0.3)',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 14, fontWeight: 900,
                color: '#06080F', letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>D</span>
            </div>
            {/* Wordmark */}
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 15, fontWeight: 700,
                color: '#F0EEE8', letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}>
                Distinction
                <span style={{
                  color: 'rgba(240,238,232,0.4)',
                  fontWeight: 400,
                  marginLeft: 5,
                }}>Creative</span>
              </div>
              <div style={{
                fontSize: 9, fontWeight: 700,
                color: 'rgba(201,168,76,0.55)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginTop: 2,
              }}>AI Infrastructure</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                color: 'rgba(240,238,232,0.48)', fontSize: 13, fontWeight: 500,
                fontFamily: 'Inter', textDecoration: 'none', letterSpacing: '0.02em',
                transition: 'color 0.2s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => e.target.style.color = 'rgba(240,238,232,0.92)'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.48)'}
              >{l.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#cta" style={{
            background: 'linear-gradient(135deg, #B8902A 0%, #C9A84C 50%, #E8C97A 100%)',
            color: '#06080F', fontWeight: 800, fontSize: 11,
            padding: '11px 22px', borderRadius: 8,
            textDecoration: 'none', fontFamily: 'Inter',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'inline-block',
            boxShadow: '0 2px 12px rgba(201,168,76,0.2)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,168,76,0.38)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(201,168,76,0.2)';
            }}
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
}