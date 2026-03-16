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
      background: '#06080F', padding: '140px 56px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top separator line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 80,
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
      }} />
      {/* Ambient right glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-180px',
        width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.035) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="reveal" style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: 28,
            }}>
              The Firm
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(34px, 4vw, 54px)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.025em', color: '#F0EEE8',
              marginBottom: 28,
            }}>
              Not an Agency.<br />
              <span style={{
                background: 'linear-gradient(135deg, #B8902A, #E8C97A, #F5E0A0, #C9A84C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                An Infrastructure<br />Installation Partner.
              </span>
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.85,
              color: 'rgba(240,238,232,0.48)', maxWidth: 420,
              letterSpacing: '0.005em',
            }}>
              We assess your business from the ground up, design a system architecture built around your actual operations, and install Distinction OS — fully integrated and fully operational from day one.
            </p>
          </div>

          {/* Right: Process pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 8 }}>
            {[
              {
                num: '01',
                title: 'We Assess Your Stack',
                body: 'Before any configuration, we map your current tools, workflows, data, and operational gaps.',
              },
              {
                num: '02',
                title: 'We Design Your System',
                body: 'We architect Distinction OS around your business — integrating what works, evolving what limits you.',
              },
              {
                num: '03',
                title: 'We Install & Operate',
                body: 'Your system is live, configured, and optimised. Faster, more visible, and running on intelligence.',
              },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{
                padding: '26px 30px',
                background: 'rgba(255,255,255,0.018)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 12,
                display: 'flex', gap: 20, alignItems: 'flex-start',
                transition: 'border-color 0.35s, background 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.03)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.018)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span style={{
                  fontSize: 10, fontWeight: 800, color: 'rgba(201,168,76,0.4)',
                  fontFamily: 'Inter', letterSpacing: '0.1em', minWidth: 24, marginTop: 2,
                }}>{item.num}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#F0EEE8', marginBottom: 7, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(240,238,232,0.44)' }}>
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