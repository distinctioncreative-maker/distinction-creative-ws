import { useEffect, useRef, useState } from 'react';

const NODES = [
  { id: 'website',  label: 'Premium Website',   x: 50,  y: 12,  size: 46 },
  { id: 'chatbot',  label: 'AI Chatbot',         x: 84,  y: 38,  size: 40 },
  { id: 'portal',   label: 'KPI Portal',         x: 76,  y: 76,  size: 40 },
  { id: 'comms',    label: 'Comms Layer',        x: 24,  y: 76,  size: 40 },
  { id: 'auto',     label: 'Automation',         x: 16,  y: 38,  size: 40 },
  { id: 'core',     label: 'Distinction OS',     x: 50,  y: 47,  size: 72, isCore: true },
];

const EDGES = [
  ['website','core'],['chatbot','core'],['portal','core'],
  ['comms','core'],['auto','core'],
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: '#06080F',
    }}>
      {/* Radial glow — top centre */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 100% 70% at 50% -5%, rgba(201,168,76,0.09) 0%, rgba(80,80,180,0.03) 50%, transparent 70%)',
      }} />
      {/* Bottom-left ambient */}
      <div style={{
        position: 'absolute', bottom: '-120px', left: '-80px', pointerEvents: 'none',
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,140,254,0.035) 0%, transparent 70%)',
      }} />
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 10%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 10%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '160px 56px 120px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>

          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 16px', borderRadius: 100,
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.05)',
              backdropFilter: 'blur(12px)',
              marginBottom: 44,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#C9A84C', display: 'block', flexShrink: 0,
                boxShadow: '0 0 8px rgba(201,168,76,0.9)',
                animation: 'blinkDot 2s ease infinite',
              }} />
              <span style={{ color: 'rgba(201,168,76,0.9)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                AI Infrastructure Partner
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(50px, 5.6vw, 84px)',
              fontWeight: 800,
              lineHeight: 0.97,
              letterSpacing: '-0.03em',
              marginBottom: 32,
              color: '#F0EEE8',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}>
              We Install<br />the OS Your<br />
              <span style={{
                background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 45%, #F0D880 60%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}>
                Business<br />Runs On.
              </span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize: 17, lineHeight: 1.8, color: 'rgba(240,238,232,0.48)',
              maxWidth: 440, marginBottom: 52,
              fontWeight: 400, letterSpacing: '0.01em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}>
              Distinction Creative is an AI infrastructure firm. We assess your business, design the architecture, and install <strong style={{ color: 'rgba(240,238,232,0.75)', fontWeight: 600 }}>Distinction OS</strong> — a unified system of website, chatbot, analytics, and intelligent automation.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 12, flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
            }}>
              <a href="#cta" style={{
                background: 'linear-gradient(135deg, #B8902A, #C9A84C, #E8C97A)',
                color: '#06080F', fontWeight: 700, fontSize: 12,
                padding: '15px 30px', borderRadius: 8,
                textDecoration: 'none', letterSpacing: '0.08em',
                textTransform: 'uppercase', fontFamily: 'Inter',
                transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
                boxShadow: '0 4px 20px rgba(201,168,76,0.2)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 36px rgba(201,168,76,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.2)';
                }}
              >
                Book Strategy Session
              </a>
              <a href="#system" style={{
                color: 'rgba(240,238,232,0.65)', fontWeight: 500, fontSize: 12,
                padding: '15px 30px', borderRadius: 8,
                textDecoration: 'none', letterSpacing: '0.06em',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'transparent',
                transition: 'border-color 0.3s, color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                fontFamily: 'Inter', textTransform: 'uppercase',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.color = '#F0EEE8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(240,238,232,0.65)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore the System →
              </a>
            </div>

            {/* Stats — minimal */}
            <div style={{
              display: 'flex', gap: 44, marginTop: 68,
              paddingTop: 36,
              borderTop: '1px solid rgba(255,255,255,0.05)',
              opacity: visible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.5s',
            }}>
              {[
                { val: '24/7', label: 'AI-Active System' },
                { val: '5×', label: 'Faster Lead Response' },
                { val: '100%', label: 'Unified Visibility' },
              ].map(stat => (
                <div key={stat.val}>
                  <div style={{
                    fontSize: 26, fontWeight: 900, color: '#C9A84C',
                    fontFamily: 'Inter', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>{stat.val}</div>
                  <div style={{
                    fontSize: 11, color: 'rgba(240,238,232,0.35)',
                    fontWeight: 500, marginTop: 7,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
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
            transition: 'all 1.4s cubic-bezier(0.16,1,0.3,1) 0.38s',
          }}>
            <SystemDiagram hovered={hovered} setHovered={setHovered} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 140,
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
      filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.06))',
    }}>
      {/* Ambient rings */}
      {[190, 148, 108].map((r, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: (NODES.find(n => n.id === 'core').x / 100) * W - r,
          top: (NODES.find(n => n.id === 'core').y / 100) * H - r,
          width: r * 2, height: r * 2, borderRadius: '50%',
          border: `1px solid rgba(201,168,76,${0.03 - i * 0.008})`,
          pointerEvents: 'none',
          animation: `float ${8 + i * 2}s ease-in-out infinite ${i * 1.8}s`,
        }} />
      ))}

      <svg width={W} height={H} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
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
                  stroke="rgba(201,168,76,0.12)" strokeWidth={8}
                  filter="url(#glow2)"
                />
              )}
              <line x1={ax} y1={ay} x2={bx} y2={by}
                stroke={active ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.08)'}
                strokeWidth={active ? 1.5 : 1}
                strokeDasharray={active ? 'none' : '5 5'}
                style={{ transition: 'all 0.4s ease' }}
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
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              background: n.isCore
                ? 'radial-gradient(circle at 38% 32%, rgba(240,216,128,0.28), rgba(201,168,76,0.1))'
                : isActive
                  ? 'rgba(201,168,76,0.12)'
                  : 'rgba(255,255,255,0.028)',
              border: n.isCore
                ? '1.5px solid rgba(201,168,76,0.65)'
                : isActive
                  ? '1px solid rgba(201,168,76,0.45)'
                  : '1px solid rgba(255,255,255,0.07)',
              boxShadow: n.isCore
                ? '0 0 50px rgba(201,168,76,0.22), 0 0 100px rgba(201,168,76,0.06), inset 0 1px 0 rgba(255,255,255,0.08)'
                : isActive
                  ? '0 0 24px rgba(201,168,76,0.14)'
                  : 'none',
              transform: isActive && !n.isCore ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {n.isCore && (
              <>
                <span style={{
                  fontSize: 9, fontWeight: 900, color: '#E8C97A',
                  fontFamily: 'Inter', letterSpacing: '0.1em',
                  textAlign: 'center', lineHeight: 1, textTransform: 'uppercase',
                }}>D·OS</span>
                <span style={{
                  fontSize: 7, fontWeight: 500, color: 'rgba(201,168,76,0.5)',
                  fontFamily: 'Inter', letterSpacing: '0.05em',
                  marginTop: 3, textTransform: 'uppercase',
                }}>Core</span>
              </>
            )}
            {!n.isCore && (
              <div style={{
                width: isActive ? 9 : 6, height: isActive ? 9 : 6,
                borderRadius: '50%',
                background: isActive ? '#E8C97A' : 'rgba(201,168,76,0.5)',
                boxShadow: isActive ? '0 0 10px rgba(201,168,76,0.9)' : 'none',
                transition: 'all 0.35s ease',
              }} />
            )}
            <div style={{
              position: 'absolute',
              top: n.size + 10,
              left: '50%', transform: 'translateX(-50%)',
              fontSize: 10, fontWeight: 600,
              color: isActive ? 'rgba(240,238,232,0.9)' : 'rgba(240,238,232,0.28)',
              whiteSpace: 'nowrap', fontFamily: 'Inter',
              letterSpacing: '0.05em', textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}>{n.label}</div>
          </div>
        );
      })}
    </div>
  );
}