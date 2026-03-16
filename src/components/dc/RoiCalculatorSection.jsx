import { useState } from 'react';
import useReveal from '../../hooks/useReveal';

const BOOST_PRESETS = [
  { label: 'Conservative', pct: 10, desc: 'Baseline system effect' },
  { label: 'Moderate', pct: 20, desc: 'Typical client outcome' },
  { label: 'Aggressive', pct: 35, desc: 'High-adoption scenario' },
];

const fmt = (n) => '$' + Math.round(n).toLocaleString();

export default function RoiCalculatorSection() {
  const ref = useReveal();

  const [leads, setLeads] = useState(150);
  const [leadValue, setLeadValue] = useState(2500);
  const [convRate, setConvRate] = useState(4);
  const [responseHours, setResponseHours] = useState(6);
  const [boostIdx, setBoostIdx] = useState(1);

  const boost = BOOST_PRESETS[boostIdx].pct / 100;

  const currentRevenue = leads * (convRate / 100) * leadValue;
  const newConvRate = convRate * (1 + boost);
  const newRevenue = leads * (newConvRate / 100) * leadValue;
  const convUplift = newRevenue - currentRevenue;

  const leadsLostToDelay = leads * Math.min(responseHours * 0.06, 0.55);
  const leadsRecovered = leadsLostToDelay * 0.6;
  const responseUplift = leadsRecovered * (convRate / 100) * leadValue;

  const hoursPerMonth = (leads / 8) * 0.5;
  const opsUplift = hoursPerMonth * 75;

  const totalUplift = convUplift + responseUplift + opsUplift;
  const annualUplift = totalUplift * 12;

  const inputBase = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 10, color: '#F0EEE8',
    fontSize: 15, fontFamily: 'Inter', outline: 'none',
    transition: 'border-color 0.2s cubic-bezier(0.16,1,0.3,1)',
  };

  return (
    <section id="roi-calculator" ref={ref} style={{
      background: '#090C16', padding: '140px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 600,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.055) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            Revenue Impact Calculator
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800, lineHeight: 1.04,
            letterSpacing: '-0.025em', color: '#F0EEE8', marginBottom: 18,
          }}>
            What Does a Smarter Business<br />
            <span style={{
              background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Actually Cost You to Delay?</span>
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.48)',
            maxWidth: 560, margin: '0 auto', lineHeight: 1.8,
          }}>
            Model your real revenue across three dimensions: conversion, response speed, and operational efficiency. See the compounding impact Distinction OS delivers.
          </p>
        </div>

        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 32, alignItems: 'start',
        }}>

          {/* LEFT: Inputs */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.065)',
            borderRadius: 20, padding: '44px 48px',
            backdropFilter: 'blur(16px)',
          }}>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 22, fontWeight: 700, color: '#F0EEE8', marginBottom: 32,
            }}>Your Business Today</h3>

            {[
              { label: 'Monthly Inbound Leads', value: leads, setter: setLeads, min: 1, max: 99999 },
              { label: 'Average Deal / Lead Value ($)', value: leadValue, setter: setLeadValue, min: 1, max: 9999999 },
              { label: 'Current Close Rate (%)', value: convRate, setter: setConvRate, min: 0.1, max: 100 },
              { label: 'Avg Lead Response Time (hours)', value: responseHours, setter: setResponseHours, min: 0, max: 72 },
            ].map(field => (
              <div key={field.label} style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block', fontSize: 11, fontWeight: 700,
                  color: 'rgba(240,238,232,0.38)', marginBottom: 7,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>{field.label}</label>
                <input
                  type="number"
                  value={field.value}
                  onChange={e => field.setter(Math.max(field.min, Math.min(field.max, parseFloat(e.target.value) || 0)))}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.45)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                />
              </div>
            ))}

            {/* Boost Selector */}
            <div style={{ marginTop: 28 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(240,238,232,0.38)',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12,
              }}>Adoption Scenario</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {BOOST_PRESETS.map((p, i) => (
                  <button key={p.label} onClick={() => setBoostIdx(i)} style={{
                    flex: 1, padding: '11px 10px',
                    background: boostIdx === i ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${boostIdx === i ? 'rgba(201,168,76,0.45)' : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: 9, cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: 13, fontWeight: 800,
                      color: boostIdx === i ? '#E8C97A' : 'rgba(240,238,232,0.5)',
                      fontFamily: 'Inter', lineHeight: 1,
                    }}>{p.pct}%</div>
                    <div style={{
                      fontSize: 10, color: 'rgba(240,238,232,0.35)',
                      marginTop: 4, letterSpacing: '0.04em',
                    }}>{p.label}</div>
                  </button>
                ))}
              </div>
              <div style={{
                marginTop: 8, fontSize: 11, color: 'rgba(240,238,232,0.28)',
                textAlign: 'center', letterSpacing: '0.03em',
              }}>
                {BOOST_PRESETS[boostIdx].desc} — {BOOST_PRESETS[boostIdx].pct}% conversion improvement modeled
              </div>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.25)',
                marginBottom: 10,
              }}>Uplift Breakdown</div>

              {[
                { label: 'Conversion Rate Uplift', value: fmt(convUplift) + ' / mo', accent: '#C9A84C', note: `${convRate.toFixed(1)}% to ${newConvRate.toFixed(1)}% close rate` },
                { label: 'Response Speed Recovery', value: fmt(responseUplift) + ' / mo', accent: '#5CC8B0', note: `AI responds in under 10s vs your ${responseHours}hr avg` },
                { label: 'Operational Efficiency', value: fmt(opsUplift) + ' / mo', accent: '#638CFE', note: `~${Math.round(hoursPerMonth)} hrs/mo of manual work automated` },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '16px 20px', marginBottom: 8,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.055)',
                  borderRadius: 12,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.45)', marginBottom: 4, letterSpacing: '0.02em' }}>{item.label}</div>
                    <div style={{ fontSize: 10, color: 'rgba(240,238,232,0.25)', letterSpacing: '0.02em' }}>{item.note}</div>
                  </div>
                  <div style={{
                    fontFamily: 'Inter', fontWeight: 800, fontSize: 18,
                    color: item.accent, letterSpacing: '-0.02em', whiteSpace: 'nowrap', marginLeft: 16,
                  }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div style={{
              padding: '28px 32px',
              background: 'linear-gradient(160deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.03) 100%)',
              border: '1px solid rgba(201,168,76,0.32)',
              borderRadius: 16,
              boxShadow: '0 0 80px rgba(201,168,76,0.07)',
              marginBottom: 10,
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                marginBottom: 20,
              }}>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                    Total Monthly Impact
                  </div>
                  <div style={{
                    fontFamily: 'Inter', fontWeight: 900, fontSize: 52,
                    color: '#E8C97A', letterSpacing: '-0.04em', lineHeight: 1,
                  }}>
                    {fmt(totalUplift)}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                    Annual Projection
                  </div>
                  <div style={{
                    fontFamily: 'Inter', fontWeight: 800, fontSize: 28,
                    color: 'rgba(232,201,122,0.75)', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {fmt(annualUplift)}
                  </div>
                </div>
              </div>
              <div style={{
                paddingTop: 16,
                borderTop: '1px solid rgba(201,168,76,0.12)',
                fontSize: 12, color: 'rgba(240,238,232,0.32)', lineHeight: 1.6,
              }}>
                Based on your inputs and the <strong style={{ color: 'rgba(240,238,232,0.5)' }}>{BOOST_PRESETS[boostIdx].label.toLowerCase()}</strong> adoption scenario. Estimates are conservative and directional. Actual results vary by industry and implementation.
              </div>
            </div>

            {/* CTA */}
            <a href="#cta" style={{
              display: 'block', width: '100%',
              padding: '15px 24px',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              color: '#06080F', fontWeight: 800, fontSize: 13,
              textAlign: 'center', textDecoration: 'none',
              borderRadius: 10, fontFamily: 'Inter',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
              boxShadow: '0 4px 20px rgba(201,168,76,0.22)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(201,168,76,0.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.22)'; }}
            >
              Book a Session. Let's Build This.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}