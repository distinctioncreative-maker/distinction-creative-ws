import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'System', href: '#system' },
    { label: 'Portal', href: '#portal' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.7s cubic-bezier(0.16,1,0.3,1), border-color 0.7s ease, backdrop-filter 0.7s ease',
      background: scrolled
        ? 'rgba(6,8,15,0.88)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(40px) saturate(1.6)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(1.6)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.045)'
        : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 80,
        }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Monogram mark */}
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'linear-gradient(150deg, #C9A84C 0%, #F0D880 55%, #B8902A 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 16px rgba(201,168,76,0.22), inset 0 1px 0 rgba(255,255,255,0.25)',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 16, fontWeight: 900,
                color: '#06080F', letterSpacing: '-0.04em',
                lineHeight: 1, display: 'block',
                marginTop: 1,
              }}>D</span>
            </div>

            {/* Wordmark */}
            <div>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 16, fontWeight: 700,
                color: '#F0EEE8', letterSpacing: '-0.015em',
                lineHeight: 1,
              }}>
                Distinction
                <span style={{
                  color: 'rgba(240,238,232,0.38)',
                  fontWeight: 400,
                  marginLeft: 6,
                  fontSize: 15,
                }}>Creative</span>
              </div>
              <div style={{
                fontSize: 9, fontWeight: 600,
                color: 'rgba(201,168,76,0.5)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>AI Infrastructure</div>
            </div>
          </a>

          {/* Desktop Nav — centred */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                color: 'rgba(240,238,232,0.42)',
                fontSize: 12, fontWeight: 500,
                fontFamily: 'Inter', textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.25s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'rgba(240,238,232,0.88)'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.42)'}
              >{l.label}</a>
            ))}
          </nav>

          {/* CTA — refined outline + fill */}
          <a href="#cta" style={{
            color: '#C9A84C',
            fontWeight: 600, fontSize: 11,
            padding: '10px 24px', borderRadius: 6,
            textDecoration: 'none', fontFamily: 'Inter',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid rgba(201,168,76,0.35)',
            background: 'rgba(201,168,76,0.05)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.7)';
              e.currentTarget.style.color = '#E8C97A';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
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