import { useEffect, useRef } from 'react';

export default function IntroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 130);
          });
        }
      });
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: '#06080F', padding: '140px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top vertical line separator */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 100,
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)',
      }} />
      {/* Ambient glow right */}
      <div style={{
        position: 'absolute', top: '20%', right: '-150px',
        width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: 24,
            }}>
              The Company
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 800, lineHeight: 1.04,
              letterSpacing: '-0.025em', color: '#F0EEE8',
              marginBottom: 28,
            }}>
              Distinction Creative<br />
              <span style={{
                background: 'linear-gradient(135deg, #B8902A, #E8C97A, #F5E0A0, #C9A84C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                is an AI infrastructure<br />installation partner.
              </span>
            </h2>
            <p className="reveal" style={{
              fontSize: 17, lineHeight: 1.8,
              color: 'rgba(240,238,232,0.52)', maxWidth: 440,
              letterSpacing: '0.005em',
            }}>
              We don't hand you a dashboard and leave. We assess your current business, design the right system architecture, and install Distinction OS around your actual operations — fully integrated, fully operational.
            </p>
          </div>

          {/* Right: Three pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 12 }}>
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
                padding: '28px 32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.055)',
                borderRadius: 14,
                display: 'flex', gap: 22, alignItems: 'flex-start',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.35s, background 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.04)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{
                  fontSize: 11, fontWeight: 900, color: 'rgba(201,168,76,0.45)',
                  fontFamily: 'Inter', letterSpacing: '0.08em', minWidth: 26, marginTop: 3,
                }}>{item.num}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#F0EEE8', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(240,238,232,0.48)' }}>
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