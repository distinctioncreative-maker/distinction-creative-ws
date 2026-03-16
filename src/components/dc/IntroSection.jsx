import { useEffect, useRef } from 'react';

export default function IntroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Separator */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 80,
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
            }}>
              The Company
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#F0EEE8',
              marginBottom: 24,
            }}>
              Distinction Creative<br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                is an AI infrastructure<br />installation partner.
              </span>
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', maxWidth: 440,
            }}>
              We don't hand you a dashboard and leave. We assess your current business, design the right system architecture, and install Distinction OS around your actual operations — fully integrated, fully operational.
            </p>
          </div>

          {/* Right: Three pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
            {[
              {
                num: '01',
                title: 'We Assess Your Stack',
                body: 'Every business runs on different tools. Before a single line of configuration, we understand your current workflows, data, and systems.',
              },
              {
                num: '02',
                title: 'We Design Your System',
                body: 'We architect a Distinction OS configuration tailored to your business — integrating what works, replacing what limits you.',
              },
              {
                num: '03',
                title: 'We Install & Operate',
                body: 'We install your operating system, configure every layer, and hand you the keys to a business that is more visible, faster, and smarter.',
              },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{
                padding: '24px 28px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                display: 'flex', gap: 20, alignItems: 'flex-start',
                transition: 'border-color 0.3s, background 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
              >
                <span style={{
                  fontSize: 11, fontWeight: 800, color: 'rgba(201,168,76,0.5)',
                  fontFamily: 'Inter', letterSpacing: '0.05em', minWidth: 24,
                  marginTop: 2,
                }}>{item.num}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#F0EEE8', marginBottom: 6 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(240,238,232,0.5)' }}>
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}