import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    sub: 'We learn your business.',
    desc: 'We audit your current tools, workflows, data sources, communication channels, lead flow, and operational pain points. Nothing gets installed before we understand what already exists.',
    details: ['Current stack audit', 'Workflow mapping', 'KPI definition', 'Pain point analysis'],
  },
  {
    num: '02',
    title: 'System Design',
    sub: 'We architect your OS.',
    desc: 'We determine the optimal Distinction OS configuration for your business — which integrations to keep, what to replace, how OpenClaw should communicate, and what your portal needs to show.',
    details: ['Integration architecture', 'Portal configuration plan', 'OpenClaw channel setup', 'Automation blueprint'],
  },
  {
    num: '03',
    title: 'Integration',
    sub: 'We connect your world.',
    desc: 'We connect Distinction OS to your existing systems — CRM, payments, scheduling, analytics, POS, communication tools. Data flows into one canonical model.',
    details: ['API & webhook connections', 'Data normalization', 'CRM migration support', 'Channel configuration'],
  },
  {
    num: '04',
    title: 'Installation',
    sub: 'We go live.',
    desc: 'We deploy your premium website, activate your AI chatbot, configure your KPI portal, and bring OpenClaw online — tested, validated, and fully operational.',
    details: ['Website deployment', 'AI chatbot activation', 'Portal go-live', 'OpenClaw daily briefs'],
  },
  {
    num: '05',
    title: 'Optimization',
    sub: 'We refine the system.',
    desc: 'Post-launch, we monitor system performance, tune AI behavior, refine KPI thresholds, and ensure the operating environment is delivering measurable results.',
    details: ['KPI tuning', 'AI performance review', 'Conversion analysis', 'Ongoing refinement'],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} style={{
      background: '#090C16', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            Our Process
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#F0EEE8',
            marginBottom: 20,
          }}>
            Discovery → Integration →<br />Installation
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.5)',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.7,
          }}>
            A deliberate, high-touch implementation process. No shortcuts. No generic installs.
          </p>
        </div>

        {/* Process layout */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '260px 1fr', gap: 0,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 16, overflow: 'hidden',
        }}>
          {/* Left: Step nav */}
          <div style={{
            borderRight: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.015)',
          }}>
            {STEPS.map((step, i) => (
              <button key={i}
                onClick={() => setActive(i)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '22px 24px',
                  background: active === i ? 'rgba(201,168,76,0.07)' : 'transparent',
                  borderLeft: active === i ? '2px solid #C9A84C' : '2px solid transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  borderTop: 'none', borderRight: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
                  color: active === i ? '#C9A84C' : 'rgba(240,238,232,0.25)',
                  textTransform: 'uppercase', marginBottom: 6,
                }}>
                  Step {step.num}
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: active === i ? '#F0EEE8' : 'rgba(240,238,232,0.5)',
                  fontFamily: 'Inter',
                }}>
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail */}
          <div style={{ padding: '48px 52px' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12,
            }}>
              {STEPS[active].sub}
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 36, fontWeight: 700,
              color: '#F0EEE8', marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              {STEPS[active].title}
            </h3>
            <p style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.6)', marginBottom: 36,
              maxWidth: 500,
            }}>
              {STEPS[active].desc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {STEPS[active].details.map((d, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, color: '#C9A84C', flexShrink: 0,
                  }}>✓</div>
                  <span style={{ fontSize: 14, color: 'rgba(240,238,232,0.7)', fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}