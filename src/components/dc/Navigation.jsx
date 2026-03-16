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
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(6,8,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Distinction
            </span>
            <span style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em',
              color: 'rgba(240,238,232,0.75)',
              marginLeft: 7,
            }}>
              Creative
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
            background: 'linear-gradient(135deg, #B8902A, #C9A84C, #E8C97A)',
            color: '#06080F', fontWeight: 800, fontSize: 12,
            padding: '12px 26px', borderRadius: 10,
            textDecoration: 'none', fontFamily: 'Inter',
            letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'inline-block',
            boxShadow: '0 2px 16px rgba(201,168,76,0.15)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(201,168,76,0.15)'; }}
          >
            Book Strategy Session
          </a>
        </div>
      </div>
    </header>
  );
}