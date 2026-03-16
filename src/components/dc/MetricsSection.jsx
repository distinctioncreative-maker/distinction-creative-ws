import { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: '< 10s',
    label: 'AI Response Time',
    sub: 'vs industry avg of 6+ hours',
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
    sub: 'all data in one portal',
    accent: '#A078F0',
    rgb: '160,120,240',
  },
];

const BAR_DATA = [
  { label: 'Lead Response', before: 22, after: 94, color: '#5CC8B0' },
  { label: 'Qualification Rate', before: 38, after: 71, color: '#C9A84C' },
  { label: 'Operational Clarity', before: 19, after: 88, color: '#638CFE' },
  { label: 'Follow-Up Speed', before: 28, after: 92, color: '#A078F0' },
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
      background: '#090C16', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            System Performance
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: '#F0EEE8',
            marginBottom: 20,
          }}>
            The Numbers Behind<br />
            <span style={{
              background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Distinction OS.
            </span>
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.48)',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.75,
          }}>
            Infrastructure performance benchmarks across lead handling, response speed, operational visibility, and conversion infrastructure.
          </p>
        </div>

        {/* Stat cards */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16, marginBottom: 64,
        }}>
          {METRICS.map((m, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              background: `rgba(${m.rgb},0.04)`,
              border: `1px solid rgba(${m.rgb},0.15)`,
              borderRadius: 16,
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 48px rgba(${m.rgb},0.12)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                fontFamily: 'Inter', fontWeight: 900,
                fontSize: 44, letterSpacing: '-0.04em',
                color: m.accent, lineHeight: 1, marginBottom: 12,
              }}>{m.value}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#F0EEE8', marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.38)', lineHeight: 1.4 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Before / After bar chart */}
        <div className="reveal" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.065)',
          borderRadius: 20, padding: '44px 48px',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 36,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>
                Before vs After Distinction OS
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#F0EEE8', letterSpacing: '-0.01em' }}>
                Business Performance Benchmark
              </div>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.4)' }}>Before</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#C9A84C' }} />
                <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.4)' }}>After</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {BAR_DATA.map((row, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: 8,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(240,238,232,0.7)' }}>{row.label}</span>
                  <span style={{ fontSize: 12, color: row.color, fontWeight: 700 }}>+{row.after - row.before}% improvement</span>
                </div>
                <div style={{ position: 'relative', height: 8 }}>
                  {/* Before bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '100%', borderRadius: 4,
                    background: 'rgba(255,255,255,0.1)',
                    width: `${row.before}%`,
                  }} />
                  {/* After bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '100%', borderRadius: 4,
                    background: `linear-gradient(90deg, ${row.color}99, ${row.color})`,
                    width: animated ? `${row.after}%` : '0%',
                    transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                    boxShadow: `0 0 12px ${row.color}40`,
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