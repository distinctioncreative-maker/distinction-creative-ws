import useReveal from '../../hooks/useReveal';

const TOOLS = [
  { name: 'Stripe', category: 'Payments' },
  { name: 'Shopify', category: 'Commerce' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Plaid', category: 'Finance' },
  { name: 'Slack', category: 'Comms' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'WhatsApp', category: 'Messaging' },
  { name: 'Telegram', category: 'Messaging' },
  { name: 'Discord', category: 'Comms' },
  { name: 'Square', category: 'POS' },
  { name: 'Analytics', category: 'Data' },
];

export default function CurrentStackSection() {
  const ref = useReveal();

  return (
    <section ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <div className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
            }}>
              Built Around You
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#F0EEE8',
              marginBottom: 24,
            }}>
              We Start With Your<br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Current Reality.
              </span>
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 32,
            }}>
              Most businesses already run on a collection of tools: payment processors, CRMs, scheduling platforms, messaging apps. We do not ask you to throw that away.
            </p>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 40,
            }}>
              Our discovery process maps your current environment. We assess what is working, what is costing you, and what gaps are limiting your growth. Then we install Distinction OS to unify, enhance, and elevate the whole stack.
            </p>

            {/* Three signals */}
            {[
              { icon: '◎', label: 'We integrate with what already works' },
              { icon: '◈', label: 'We replace only what limits you' },
              { icon: '▣', label: 'Installation scope is defined by your needs' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{
                display: 'flex', alignItems: 'center', gap: 14,
                marginBottom: 16,
              }}>
                <span style={{ color: '#C9A84C', fontSize: 14 }}>{item.icon}</span>
                <span style={{ fontSize: 15, color: 'rgba(240,238,232,0.7)', fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Tool grid */}
          <div className="reveal">
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
            }}>
              <div style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.35)',
                marginBottom: 24,
              }}>
                Systems We Work With
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10,
              }}>
                {TOOLS.map((tool, i) => (
                  <div key={i} style={{
                    padding: '10px 12px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                      e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#F0EEE8', marginBottom: 2 }}>
                      {tool.name}
                    </div>
                    <div style={{ fontSize: 10, color: 'rgba(240,238,232,0.35)', fontWeight: 500 }}>
                      {tool.category}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 20, padding: '14px 18px',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ color: '#C9A84C', fontSize: 16 }}>◈</span>
                <span style={{ fontSize: 13, color: 'rgba(240,238,232,0.7)', lineHeight: 1.5 }}>
                  <strong style={{ color: '#F0EEE8' }}>Already using something else?</strong> Discovery surfaces what connects, what replaces, and what to build around.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}