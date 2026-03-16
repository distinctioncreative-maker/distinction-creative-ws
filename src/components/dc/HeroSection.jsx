import { useEffect, useRef, useState } from 'react';

const NODES = [
  { id: 'website',  label: 'Premium Website',   x: 50,  y: 18,  size: 42 },
  { id: 'chatbot',  label: 'AI Chatbot',         x: 82,  y: 42,  size: 36 },
  { id: 'portal',   label: 'KPI Portal',         x: 72,  y: 76,  size: 36 },
  { id: 'openclaw', label: 'OpenClaw',            x: 28,  y: 76,  size: 36 },
  { id: 'auto',     label: 'Automation',         x: 18,  y: 42,  size: 36 },
  { id: 'core',     label: 'Distinction OS',     x: 50,  y: 47,  size: 52, isCore: true },
];

const EDGES = [
  ['website','core'],['chatbot','core'],['portal','core'],
  ['openclaw','core'],['auto','core'],
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const getPos = (n, w, h) => ({ x: (n.x / 100) * w, y: (n.y / 100) * h });

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: '#06080F',
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(201,168,76,0.07) 0%, transparent 65%)',
      }} />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 32px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 100,
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.05)',
              marginBottom: 32,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s ease',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#C9A84C', display: 'block',
                animation: 'blinkDot 2s ease infinite',
              }} />
              <span style={{ color: '#C9A84C', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI Infrastructure Partner
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 24,
              color: '#F0EEE8',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.1s',
            }}>
              We Install the OS<br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 55%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Your Business<br />Runs On.
              </span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize: 18, lineHeight: 1.7, color: 'rgba(240,238,232,0.58)',
              maxWidth: 480, marginBottom: 44,
              fontWeight: 400,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.2s',
            }}>
              Distinction Creative installs Distinction OS into your business — a unified AI infrastructure combining a premium website, intelligent chatbot, analytics portal, and proactive communication assistant.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s ease 0.32s',
            }}>
              <a href="#cta" style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#06080F', fontWeight: 700, fontSize: 14,
                padding: '14px 28px', borderRadius: 10,
                textDecoration: 'none', letterSpacing: '0.03em',
                textTransform: 'uppercase', fontFamily: 'Inter',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
              >
                Book Strategy Session
              </a>
              <a href="#system" style={{
                color: '#F0EEE8', fontWeight: 500, fontSize: 14,
                padding: '14px 28px', borderRadius: 10,
                textDecoration: 'none', letterSpacing: '0.02em',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                transition: 'border-color 0.2s, background 0.2s',
                fontFamily: 'Inter',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                See Distinction OS →
              </a>
            </div>

            {/* Social proof strip */}
            <div style={{
              display: 'flex', gap: 32, marginTop: 56,
              opacity: visible ? 1 : 0,
              transition: 'all 0.7s ease 0.5s',
            }}>
              {[
                { val: '24/7', label: 'AI-Active System' },
                { val: '5×', label: 'Faster Lead Response' },
                { val: '100%', label: 'Visibility, One Portal' },
              ].map(stat => (
                <div key={stat.val} style={{ borderLeft: '1px solid rgba(201,168,76,0.25)', paddingLeft: 16 }}>
                  <div style={{
                    fontSize: 22, fontWeight: 800, color: '#C9A84C',
                    fontFamily: 'Inter', letterSpacing: '-0.02em',
                  }}>{stat.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.45)', fontWeight: 500, marginTop: 2 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: System diagram */}
          <div style={{
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transition: 'all 1s ease 0.4s',
          }}>
            <SystemDiagram hovered={hovered} setHovered={setHovered} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemDiagram({ hovered, setHovered }) {
  const W = 400, H = 400;

  return (
    <div style={{
      width: W, height: H, position: 'relative',
      filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.06))',
    }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        {/* Edges */}
        {EDGES.map(([a, b]) => {
          const na = NODES.find(n => n.id === a);
          const nb = NODES.find(n => n.id === b);
          const ax = (na.x / 100) * W, ay = (na.y / 100) * H;
          const bx = (nb.x / 100) * W, by = (nb.y / 100) * H;
          const active = hovered === a || hovered === b || hovered === 'core';
          return (
            <line key={`${a}-${b}`}
              x1={ax} y1={ay} x2={bx} y2={by}
              stroke={active ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'}
              strokeWidth={active ? 1.5 : 1}
              style={{ transition: 'all 0.3s ease' }}
            />
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
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
              background: n.isCore
                ? 'linear-gradient(135deg, rgba(201,168,76,0.25), rgba(232,201,122,0.15))'
                : isActive
                  ? 'rgba(201,168,76,0.12)'
                  : 'rgba(255,255,255,0.04)',
              border: n.isCore
                ? '1.5px solid rgba(201,168,76,0.6)'
                : isActive
                  ? '1px solid rgba(201,168,76,0.4)'
                  : '1px solid rgba(255,255,255,0.1)',
              boxShadow: n.isCore
                ? '0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.06)'
                : isActive
                  ? '0 0 20px rgba(201,168,76,0.12)'
                  : 'none',
            }}
          >
            {n.isCore && (
              <span style={{
                fontSize: 8, fontWeight: 800, color: '#C9A84C',
                fontFamily: 'Inter', letterSpacing: '0.05em',
                textAlign: 'center', lineHeight: 1.2,
                textTransform: 'uppercase',
              }}>D·OS</span>
            )}
            {!n.isCore && (
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: isActive ? '#C9A84C' : 'rgba(201,168,76,0.5)',
                transition: 'all 0.3s',
              }} />
            )}
            {/* Label */}
            <div style={{
              position: 'absolute',
              top: n.size + 6,
              left: '50%', transform: 'translateX(-50%)',
              fontSize: 10, fontWeight: 600,
              color: isActive ? 'rgba(240,238,232,0.9)' : 'rgba(240,238,232,0.38)',
              whiteSpace: 'nowrap', fontFamily: 'Inter',
              letterSpacing: '0.02em',
              transition: 'color 0.3s',
            }}>{n.label}</div>
          </div>
        );
      })}

      {/* Outer glow ring */}
      <div style={{
        position: 'absolute',
        left: (NODES.find(n=>n.id==='core').x / 100) * W - 80,
        top: (NODES.find(n=>n.id==='core').y / 100) * H - 80,
        width: 160, height: 160, borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.06)',
        pointerEvents: 'none',
        animation: 'float 7s ease-in-out infinite',
      }} />
    </div>
  );
}