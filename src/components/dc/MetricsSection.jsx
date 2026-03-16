import { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: '< 10s',
    label: 'AI Response Time',
    sub: 'vs. industry avg of 6+ hours',
    accent: '#5CC8B0',
    rgb: '92,200,176',
  },
  {
    value: '3.4×',
    label: 'Lead Conversion Lift',
    sub: 'faster qualification pipeline',
    accent: '#C9A84C',
    rgb: '201,168,76',
  },
  {
    value: '24/7',
    label: 'System Uptime',
    sub: 'zero manual intervention required',
    accent: '#638CFE',
    rgb: '99,140,254',
  },
  {
    value: '100%',
    label: 'Unified Visibility',
    sub: 'all data, one portal',
    accent: '#A078F0',
    rgb: '160,120,240',
  },
];

const BAR_DATA = [
  { label: 'Lead Response Speed', before: 14, after: 96, color: '#5CC8B0', beforeLabel: 'Manual — hours', afterLabel: 'AI — seconds' },
  { label: 'Qualified Lead Rate', before: 36, after: 74, color: '#C9A84C', beforeLabel: 'Unqualified funnel', afterLabel: 'Chatbot qualified' },
  { label: 'Operational Visibility', before: 18, after: 91, color: '#638CFE', beforeLabel: 'Fragmented tools', afterLabel: 'One portal' },
  { label: 'Follow-Up Execution', before: 25, after: 93, color: '#A078F0', beforeLabel: 'Manual', afterLabel: 'Automated sequences' },
];

export default function MetricsSection() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
          setAnimated(true);
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: '#090C16', padding: '120px 56px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: 20,
          }}>
            System Performance
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '-0.025em', color: '#F0EEE8',
            marginBottom: 18,
          }}>
            Infrastructure That<br />
            <span style={{
              background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Moves the Numbers.
            </span>
          </h2>
          <p className="reveal" style={{
            fontSize: 16, color: 'rgba(240,238,232,0.42)',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.8,
          }}>
            Real benchmarks across the four dimensions that drive business performance after a Distinction OS installation.
          </p>
        </div>

        {/* Stat cards */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 14, marginBottom: 56,
        }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{
              padding: '36px 24px',
              background: `rgba(${m.rgb},0.04)`,
              border: `1px solid rgba(${m.rgb},0.12)`,
              borderRadius: 14,
              textAlign: 'center',
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.35s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(${m.rgb},0.1)`;
                e.currentTarget.style.borderColor = `rgba(${m.rgb},0.25)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `rgba(${m.rgb},0.12)`;
              }}
            >
              <div style={{
                fontFamily: 'Inter', fontWeight: 900,
                fontSize: 46, letterSpacing: '-0.04em',
                color: m.accent, lineHeight: 1, marginBottom: 14,
              }}>{m.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#F0EEE8', marginBottom: 8, letterSpacing: '-0.005em' }}>{m.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.32)', lineHeight: 1.5, letterSpacing: '0.02em' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="reveal" style={{
          background: 'rgba(255,255,255,0.018)',
          border: '1px solid rgba(255,255,255,0.055)',
          borderRadius: 18, padding: '48px 52px',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 44,
          }}>
            <div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: 10,
              }}>
                Before vs. After Distinction OS
              </div>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 22, fontWeight: 700, color: '#F0EEE8', letterSpacing: '-0.01em',
              }}>
                Business Performance Benchmark
              </div>
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.12)' }} />
                <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.35)', letterSpacing: '0.04em' }}>Before</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 4, borderRadius: 2, background: '#C9A84C' }} />
                <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.35)', letterSpacing: '0.04em' }}>After</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {BAR_DATA.map((row, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginBottom: 12,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(240,238,232,0.65)', letterSpacing: '0.01em' }}>{row.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.28)', letterSpacing: '0.02em' }}>{row.beforeLabel} → {row.afterLabel}</span>
                    <span style={{ fontSize: 12, color: row.color, fontWeight: 700, letterSpacing: '-0.01em' }}>+{row.after - row.before}pts</span>
                  </div>
                </div>
                {/* Track */}
                <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)' }}>
                  {/* Before marker */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '100%', borderRadius: 3,
                    background: 'rgba(255,255,255,0.1)',
                    width: `${row.before}%`,
                  }} />
                  {/* After bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '100%', borderRadius: 3,
                    background: `linear-gradient(90deg, ${row.color}70, ${row.color})`,
                    width: animated ? `${row.after}%` : '0%',
                    transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.18}s`,
                    boxShadow: `0 0 10px ${row.color}35`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}