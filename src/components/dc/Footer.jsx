export default function Footer() {
  return (
    <footer style={{
      background: '#06080F',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '48px 32px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#06080F', fontWeight: 800, fontSize: 12 }}>D</span>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#F0EEE8' }}>
              Distinction Creative LLC
            </div>
            <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.3)', marginTop: 2 }}>
              AI Infrastructure & Automation
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32 }}>
          {['Distinction OS', 'OpenClaw', 'Process', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={{
              fontSize: 13, color: 'rgba(240,238,232,0.4)',
              textDecoration: 'none', fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#F0EEE8'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,238,232,0.4)'}
            >{l}</a>
          ))}
        </div>

        <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.25)' }}>
          © 2026 Distinction Creative LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}