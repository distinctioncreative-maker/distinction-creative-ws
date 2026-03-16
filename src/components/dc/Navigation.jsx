import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'System', href: '#system' },
  { label: 'Portal', href: '#portal' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.8s cubic-bezier(0.16,1,0.3,1), border-color 0.8s ease, backdrop-filter 0.6s ease',
      background: scrolled ? 'rgba(6,8,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(48px) saturate(1.8)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(48px) saturate(1.8)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 56px' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 16, fontWeight: 700,
                color: '#F0EEE8', letterSpacing: '-0.015em', lineHeight: 1,
              }}>
                Distinction
                <span style={{ color: 'rgba(240,238,232,0.45)', fontWeight: 400, marginLeft: 7, fontSize: 15 }}>
                  Creative
                </span>
              </div>
              <div style={{
                fontSize: 8.5, fontWeight: 700,
                color: 'rgba(201,168,76,0.5)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}>AI Infrastructure</div>
            </div>
          </a>

          {/* Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {LINKS.map(l => (
              <a key={l.label} href={l.href} style={{
                color: 'rgba(240,238,232,0.4)',
                fontSize: 11, fontWeight: 600,
                fontFamily: 'Inter', textDecoration: 'none',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'rgba(240,238,232,0.9)'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.4)'}
              >{l.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#cta" style={{
            color: '#C9A84C',
            fontWeight: 600, fontSize: 11,
            padding: '10px 22px', borderRadius: 7,
            textDecoration: 'none', fontFamily: 'Inter',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid rgba(201,168,76,0.3)',
            background: 'rgba(201,168,76,0.05)',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'inline-block', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.65)';
              e.currentTarget.style.color = '#E8C97A';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
              e.currentTarget.style.color = '#C9A84C';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
}