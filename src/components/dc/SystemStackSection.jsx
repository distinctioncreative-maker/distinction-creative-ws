import { useEffect, useRef, useState } from 'react';

const LAYERS = [
  {
    id: 'website',
    label: 'Premium Website',
    tag: 'Layer 01',
    desc: 'A high-performance, conversion-optimized front end designed to reflect your brand at the highest level. Built to attract, qualify, and convert.',
    icon: '◈',
    accent: '#C9A84C',
    rgb: '201,168,76',
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    tag: 'Layer 02',
    desc: 'An intelligent AI agent embedded in your website. It answers questions, qualifies leads, books appointments, and routes high-intent visitors — 24/7.',
    icon: '◎',
    accent: '#638CFE',
    rgb: '99,140,254',
  },
  {
    id: 'portal',
    label: 'KPI Portal',
    tag: 'Layer 03',
    desc: 'Your business control center. A clean portal giving you full visibility into leads, conversations, appointments, chatbot performance, and operational KPIs.',
    icon: '▣',
    accent: '#5CC8B0',
    rgb: '92,200,176',
  },
  {
    id: 'openclaw',
    label: 'OpenClaw Assistant',
    tag: 'Layer 04',
    desc: 'Your always-on business intelligence assistant. OpenClaw proactively delivers daily summaries, alerts, and insights through Slack, Telegram, WhatsApp, or SMS.',
    icon: '⬡',
    accent: '#C9A84C',
    rgb: '201,168,76',
  },
  {
    id: 'automation',
    label: 'Automation Layer',
    tag: 'Layer 05',
    desc: 'Workflow automation, lead routing, follow-up sequences, and reporting pipelines. The intelligence that connects every part of your system and keeps it moving.',
    icon: '◉',
    accent: '#A078F0',
    rgb: '160,120,240',
  },
];

export default function SystemStackSection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="system" ref={ref} style={{
      background: '#090C16', padding: '140px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 96 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 24,
          }}>
            The System
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(38px, 5vw, 68px)',
            fontWeight: 800, lineHeight: 1.02,
            letterSpacing: '-0.025em', color: '#F0EEE8',
            marginBottom: 24,
          }}>
            What Distinction OS<br />Actually Is
          </h2>
          <p className="reveal" style={{
            fontSize: 18, color: 'rgba(240,238,232,0.48)',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.75,
          }}>
            Five integrated layers. One installed operating system. Built around your business from the ground up.
          </p>
        </div>

        {/* Layers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {LAYERS.map((layer, i) => (
            <LayerRow key={layer.id} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerRow({ layer }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '88px 220px 1fr',
        gap: 40, alignItems: 'center',
        padding: '32px 40px',
        borderRadius: 14,
        border: `1px solid ${hovered ? `rgba(${layer.rgb},0.2)` : 'rgba(255,255,255,0.04)'}`,
        background: hovered ? `rgba(${layer.rgb},0.05)` : 'rgba(255,255,255,0.018)',
        cursor: 'default',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        boxShadow: hovered ? `0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(${layer.rgb},0.08)` : 'none',
        backdropFilter: hovered ? 'blur(8px)' : 'none',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: `rgba(${layer.rgb},0.1)`,
        border: `1px solid rgba(${layer.rgb},0.25)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, color: layer.accent,
        boxShadow: hovered ? `0 0 20px rgba(${layer.rgb},0.2)` : 'none',
        transition: 'box-shadow 0.35s ease',
        flexShrink: 0,
      }}>
        {layer.icon}
      </div>

      {/* Label */}
      <div>
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
          color: `rgba(${layer.rgb},0.5)`, textTransform: 'uppercase',
          marginBottom: 8,
        }}>{layer.tag}</div>
        <div style={{
          fontSize: 20, fontWeight: 800, color: '#F0EEE8',
          letterSpacing: '-0.015em',
        }}>{layer.label}</div>
      </div>

      {/* Desc */}
      <p style={{
        fontSize: 15, lineHeight: 1.75,
        color: hovered ? 'rgba(240,238,232,0.65)' : 'rgba(240,238,232,0.45)',
        margin: 0, transition: 'color 0.35s',
      }}>
        {layer.desc}
      </p>
    </div>
  );
}