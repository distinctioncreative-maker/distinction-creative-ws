import { useEffect, useRef, useState } from 'react';

export default function RoiCalculatorSection() {
  const ref = useRef(null);
  const [leads, setLeads] = useState(100);
  const [leadValue, setLeadValue] = useState(500);
  const [convRate, setConvRate] = useState(5);

  const boost = 0.15;
  const currentRevenue = leads * (convRate / 100) * leadValue;
  const newRate = convRate * (1 + boost);
  const potentialRevenue = leads * (newRate / 100) * leadValue;
  const roi = potentialRevenue - currentRevenue;

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

  const inputBase = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10, color: '#F0EEE8',
    fontSize: 16, fontFamily: 'Inter', outline: 'none',
    transition: 'border-color 0.25s cubic-bezier(0.16,1,0.3,1)',
  };

  return (
    <section id="roi-calculator" ref={ref} style={{
      background: '#090C16', padding: '160px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 24,
          }}>
            ROI Calculator
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 800, lineHeight: 1.04,
            letterSpacing: '-0.025em', color: '#F0EEE8', marginBottom: 20,
          }}>
            See What Distinction OS<br />
            <span style={{
              background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Could Mean for You.</span>
          </h2>
          <p className="reveal" style={{
            fontSize: 18, color: 'rgba(240,238,232,0.52)',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.75,
          }}>
            Enter your current metrics. We'll show you the impact of a 15% improvement in lead conversion — a conservative estimate of what Distinction OS delivers.
          </p>
        </div>

        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 40, alignItems: 'start',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 24, padding: '56px 60px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
          {/* Inputs */}
          <div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 26, fontWeight: 700, color: '#F0EEE8', marginBottom: 36,
            }}>Your Current Metrics</h3>

            {[
              { label: 'Monthly Leads', value: leads, setter: setLeads, min: 0, max: 99999 },
              { label: 'Average Lead Value ($)', value: leadValue, setter: setLeadValue, min: 0, max: 9999999 },
              { label: 'Current Conversion Rate (%)', value: convRate, setter: setConvRate, min: 0, max: 100 },
            ].map(field => (
              <div key={field.label} style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block', fontSize: 12, fontWeight: 700,
                  color: 'rgba(240,238,232,0.45)', marginBottom: 8,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                }}>{field.label}</label>
                <input
                  type="number"
                  value={field.value}
                  onChange={e => field.setter(Math.max(field.min, Math.min(field.max, parseFloat(e.target.value) || 0)))}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div style={{
            padding: '36px 40px',
            background: 'linear-gradient(160deg, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.02) 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 18,
            boxShadow: '0 0 80px rgba(201,168,76,0.08)',
          }}>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 22, fontWeight: 700, color: '#C9A84C', marginBottom: 36,
            }}>Potential with Distinction OS</h3>

            {[
              { label: 'Current Monthly Revenue', value: `$${currentRevenue.toLocaleString()}`, dim: true },
              { label: 'Optimized Conversion Rate', value: `${newRate.toFixed(2)}%`, dim: false },
              { label: 'Potential Monthly Revenue', value: `$${potentialRevenue.toLocaleString()}`, large: true },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 13, color: 'rgba(240,238,232,0.45)', marginBottom: 6, letterSpacing: '0.03em' }}>{item.label}</div>
                <div style={{
                  fontFamily: 'Inter', fontWeight: 800, letterSpacing: '-0.03em',
                  fontSize: item.large ? 40 : 28,
                  color: item.large ? '#E8C97A' : item.dim ? 'rgba(240,238,232,0.7)' : '#C9A84C',
                }}>{item.value}</div>
              </div>
            ))}

            <div style={{
              marginTop: 8, padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.5)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Potential Monthly Uplift
              </div>
              <div style={{
                fontSize: 36, fontWeight: 900, color: '#E8C97A',
                fontFamily: 'Inter', letterSpacing: '-0.04em',
              }}>+${roi.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}