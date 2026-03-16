import { useEffect, useRef, useState } from 'react';

const NODES = [
  { id: 'website',  label: 'Premium Website',   x: 50,  y: 14,  size: 48 },
  { id: 'chatbot',  label: 'AI Chatbot',         x: 84,  y: 40,  size: 42 },
  { id: 'portal',   label: 'KPI Portal',         x: 74,  y: 78,  size: 42 },
  { id: 'openclaw', label: 'OpenClaw',            x: 26,  y: 78,  size: 42 },
  { id: 'auto',     label: 'Automation',         x: 16,  y: 40,  size: 42 },
  { id: 'core',     label: 'Distinction OS',     x: 50,  y: 47,  size: 72, isCore: true },
];

const EDGES = [
  ['website','core'],['chatbot','core'],['portal','core'],
  ['openclaw','core'],['auto','core'],
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: '#06080F',
    }}>
      {/* Deep radial glow — larger and richer */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 110% 80% at 50% -10%, rgba(201,168,76,0.10) 0%, rgba(99,100,200,0.04) 40%, transparent 70%)',
      }} />
      {/* Secondary bottom-left accent */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px', pointerEvents: 'none',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,140,254,0.04) 0%, transparent 70%)',
      }} />
      {/* Grid overlay — tighter, more refined */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '140px 48px 100px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>

          {/* Left: Copy */}
          <div>
            {/* Eyebrow pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '7px 18px', borderRadius: 100,
              border: '1px solid rgba(201,168,76,0.25)',
              background: 'rgba(201,168,76,0.06)',
              backdropFilter: 'blur(12px)',
              marginBottom: 40,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#C9A84C', display: 'block', flexShrink: 0,
                boxShadow: '0 0 8px rgba(201,168,76,0.8)',
                animation: 'blinkDot 2s ease infinite',
              }} />
              <span style={{ color: '#C9A84C', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                AI Infrastructure Partner
              </span>
            </div>

            {/* Headline — much bolder and larger */}
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(52px, 6vw, 88px)',
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              marginBottom: 28,
              color: '#F0EEE8',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s',
            }}>
              We Install<br />the OS Your<br />
              <span style={{
                background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 40%, #F5E0A0 60%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}>
                Business<br />Runs On.
              </span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize: 18, lineHeight: 1.75, color: 'rgba(240,238,232,0.52)',
              maxWidth: 460, marginBottom: 52,
              fontWeight: 400, letterSpacing: '0.005em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.22s',
            }}>
              Distinction Creative installs Distinction OS — a unified AI infrastructure combining a premium website, intelligent chatbot, analytics portal, and proactive communication assistant.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.34s',
            }}>
              <a href="#cta" style={{
                background: 'linear-gradient(135deg, #B8902A, #C9A84C, #E8C97A)',
                color: '#06080F', fontWeight: 800, fontSize: 13,
                padding: '16px 32px', borderRadius: 10,
                textDecoration: 'none', letterSpacing: '0.06em',
                textTransform: 'uppercase', fontFamily: 'Inter',
                transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease',
                boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(201,168,76,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.25)';
                }}
              >
                Book Strategy Session
              </a>
              <a href="#system" style={{
                color: 'rgba(240,238,232,0.8)', fontWeight: 600, fontSize: 13,
                padding: '16px 32px', borderRadius: 10,
                textDecoration: 'none', letterSpacing: '0.04em',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.25s, background 0.25s, color 0.25s, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
                fontFamily: 'Inter', textTransform: 'uppercase',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                  e.currentTarget.style.color = '#F0EEE8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = 'rgba(240,238,232,0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Distinction OS →
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: 40, marginTop: 64,
              paddingTop: 40,
              borderTop: '1px solid rgba(255,255,255,0.06)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.52s',
            }}>
              {[
                { val: '24/7', label: 'AI-Active System' },
                { val: '5×', label: 'Faster Lead Response' },
                { val: '100%', label: 'Visibility, One Portal' },
              ].map(stat => (
                <div key={stat.val}>
                  <div style={{
                    fontSize: 28, fontWeight: 900, color: '#C9A84C',
                    fontFamily: 'Inter', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>{stat.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.4)', fontWeight: 500, marginTop: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: System diagram — bigger, richer */}
          <div style={{
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.42s',
          }}>
            <SystemDiagram hovered={hovered} setHovered={setHovered} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to bottom, transparent, #06080F)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}

function SystemDiagram({ hovered, setHovered }) {
  const W = 460, H = 460;

  return (
    <div style={{
      width: W, height: H, position: 'relative',
      filter: 'drop-shadow(0 0 80px rgba(201,168,76,0.08))',
    }}>
      {/* Ambient rings */}
      {[200, 160, 120].map((r, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: (NODES.find(n=>n.id==='core').x / 100) * W - r,
          top: (NODES.find(n=>n.id==='core').y / 100) * H - r,
          width: r * 2, height: r * 2, borderRadius: '50%',
          border: `1px solid rgba(201,168,76,${0.04 - i * 0.01})`,
          pointerEvents: 'none',
          animation: `float ${7 + i * 2}s ease-in-out infinite ${i * 1.5}s`,
        }} />
      ))}

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {EDGES.map(([a, b]) => {
          const na = NODES.find(n => n.id === a);
          const nb = NODES.find(n => n.id === b);
          const ax = (na.x / 100) * W, ay = (na.y / 100) * H;
          const bx = (nb.x / 100) * W, by = (nb.y / 100) * H;
          const active = hovered === a || hovered === b || hovered === 'core';
          return (
            <g key={`${a}-${b}`}>
              {active && (
                <line x1={ax} y1={ay} x2={bx} y2={by}
                  stroke='rgba(201,168,76,0.15)' strokeWidth={6}
                  filter="url(#glow)"
                />
              )}
              <line x1={ax} y1={ay} x2={bx} y2={by}
                stroke={active ? 'rgba(201,168,76,0.65)' : 'rgba(201,168,76,0.1)'}
                strokeWidth={active ? 1.5 : 1}
                strokeDasharray={active ? 'none' : '4 4'}
                style={{ transition: 'all 0.35s ease' }}
              />
            </g>
          );
        })}
      </svg>

      {NODES.map(n => {
        const x = (n.x / 100) * W;
        const y = (n.y / 100) * H;
        const isActive = hovered === n.id;
        return (
          <div key={n.id}
            onMouseEnter={() => setHovered(n.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              left: x - n.size / 2, top: y - n.size / 2,
              width: n.size, height: n.size,
              borderRadius: '50%',
              cursor: 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
              transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
              background: n.isCore
                ? 'radial-gradient(circle at 35% 35%, rgba(232,201,122,0.3), rgba(201,168,76,0.12))'
                : isActive
                  ? 'rgba(201,168,76,0.14)'
                  : 'rgba(255,255,255,0.035)',
              border: n.isCore
                ? '1.5px solid rgba(201,168,76,0.7)'
                : isActive
                  ? '1px solid rgba(201,168,76,0.5)'
                  : '1px solid rgba(255,255,255,0.09)',
              boxShadow: n.isCore
                ? '0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.1)'
                : isActive
                  ? '0 0 30px rgba(201,168,76,0.18), inset 0 1px 0 rgba(255,255,255,0.06)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.04)',
              transform: isActive && !n.isCore ? 'scale(1.12)' : 'scale(1)',
            }}
          >
            {n.isCore && (
              <>
                <span style={{
                  fontSize: 9, fontWeight: 900, color: '#E8C97A',
                  fontFamily: 'Inter', letterSpacing: '0.12em',
                  textAlign: 'center', lineHeight: 1,
                  textTransform: 'uppercase',
                }}>D·OS</span>
                <span style={{
                  fontSize: 7, fontWeight: 600, color: 'rgba(201,168,76,0.55)',
                  fontFamily: 'Inter', letterSpacing: '0.05em',
                  marginTop: 3, textTransform: 'uppercase',
                }}>Core</span>
              </>
            )}
            {!n.isCore && (
              <div style={{
                width: isActive ? 10 : 7, height: isActive ? 10 : 7,
                borderRadius: '50%',
                background: isActive ? '#E8C97A' : 'rgba(201,168,76,0.55)',
                boxShadow: isActive ? '0 0 10px rgba(201,168,76,0.8)' : 'none',
                transition: 'all 0.35s ease',
              }} />
            )}
            {/* Label */}
            <div style={{
              position: 'absolute',
              top: n.size + 8,
              left: '50%', transform: 'translateX(-50%)',
              fontSize: 11, fontWeight: 700,
              color: isActive ? 'rgba(240,238,232,0.95)' : 'rgba(240,238,232,0.32)',
              whiteSpace: 'nowrap', fontFamily: 'Inter',
              letterSpacing: '0.03em', textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}>{n.label}</div>
          </div>
        );
      })}
    </div>
  );
}