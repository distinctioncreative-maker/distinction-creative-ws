export default function Footer() {
  return (
    <footer style={{
      background: '#06080F',
      borderTop: '1px solid rgba(255,255,255,0.045)',
      padding: '60px 48px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
      }}>
        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 40,
          paddingBottom: 40,
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          marginBottom: 32,
        }}>
          {/* Logo + tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'linear-gradient(135deg, #B8902A, #E8C97A)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(201,168,76,0.25)',
              }}>
                <span style={{ color: '#06080F', fontWeight: 900, fontSize: 14, letterSpacing: '-0.02em' }}>D</span>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#F0EEE8', letterSpacing: '-0.01em' }}>
                  Distinction Creative LLC
                </div>
                <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.3)', marginTop: 2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  AI Infrastructure Partner
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(240,238,232,0.3)', maxWidth: 280, lineHeight: 1.6 }}>
              We install the operating system your business runs on.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: 48 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(201,168,76,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
                System
              </div>
              {['Distinction OS', 'OpenClaw', 'Process'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={{
                  display: 'block', fontSize: 13, color: 'rgba(240,238,232,0.42)',
                  textDecoration: 'none', fontWeight: 500,
                  marginBottom: 10, transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#F0EEE8'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.42)'}
                >{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(201,168,76,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
                Company
              </div>
              {['Pricing', 'Book a Session'].map(l => (
                <a key={l} href={l === 'Book a Session' ? '#cta' : '#pricing'} style={{
                  display: 'block', fontSize: 13, color: 'rgba(240,238,232,0.42)',
                  textDecoration: 'none', fontWeight: 500,
                  marginBottom: 10, transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#F0EEE8'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.42)'}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* CTA micro */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(201,168,76,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
              Get Started
            </div>
            <a href="#cta" style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #B8902A, #C9A84C)',
              color: '#06080F', fontWeight: 800, fontSize: 12,
              textDecoration: 'none', borderRadius: 8,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(201,168,76,0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.2)'; }}
            >
              Book Strategy Session
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.22)', letterSpacing: '0.02em' }}>
            © 2026 Distinction Creative LLC. All rights reserved.
          </div>
          <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.18)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Distinction OS™ · OpenClaw™
          </div>
        </div>
      </div>
    </footer>
  );
}