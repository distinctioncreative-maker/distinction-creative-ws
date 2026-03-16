import { useEffect, useRef } from 'react';

const LAYERS = [
  {
    id: 'website',
    label: 'Premium Website',
    tag: 'Layer 01',
    desc: 'A high-performance, conversion-optimized front end designed to reflect your brand at the highest level. Built to attract, qualify, and convert.',
    icon: '◈',
    accent: '#C9A84C',
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    tag: 'Layer 02',
    desc: 'An intelligent AI agent embedded in your website. It answers questions, qualifies leads, books appointments, and routes high-intent visitors — 24/7.',
    icon: '◎',
    accent: '#638CFE',
  },
  {
    id: 'portal',
    label: 'KPI Portal',
    tag: 'Layer 03',
    desc: 'Your business control center. A clean portal giving you full visibility into leads, conversations, appointments, chatbot performance, and operational KPIs.',
    icon: '▣',
    accent: '#5CC8B0',
  },
  {
    id: 'openclaw',
    label: 'OpenClaw Assistant',
    tag: 'Layer 04',
    desc: 'Your always-on business intelligence assistant. OpenClaw proactively delivers daily summaries, alerts, and insights through Slack, Telegram, WhatsApp, or SMS.',
    icon: '⬡',
    accent: '#C9A84C',
  },
  {
    id: 'automation',
    label: 'Automation Layer',
    tag: 'Layer 05',
    desc: 'Workflow automation, lead routing, follow-up sequences, and reporting pipelines. The intelligence that connects every part of your system and keeps it moving.',
    icon: '◉',
    accent: '#A078F0',
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
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="system" ref={ref} style={{
      background: '#090C16', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            The System
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(34px, 4vw, 56px)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '-0.02em', color: '#F0EEE8',
            marginBottom: 20,
          }}>
            What Distinction OS Actually Is
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.5)',
            maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
          }}>
            Five integrated layers. One installed operating system. Built around your business from the ground up.
          </p>
        </div>

        {/* Layers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {LAYERS.map((layer, i) => (
            <LayerRow key={layer.id} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerRow({ layer, index }) {
  const ref = useRef(null);

  return (
    <div ref={ref}
      className="reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 2fr',
        gap: 32, alignItems: 'center',
        padding: '28px 32px',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.045)',
        background: 'rgba(255,255,255,0.02)',
        cursor: 'default',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `rgba(${layer.accent === '#C9A84C' ? '201,168,76' : layer.accent === '#638CFE' ? '99,140,254' : layer.accent === '#5CC8B0' ? '92,200,176' : layer.accent === '#A078F0' ? '160,120,240' : '201,168,76'}, 0.05)`;
        e.currentTarget.style.borderColor = `${layer.accent}30`;
        e.currentTarget.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.045)';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `${layer.accent}14`,
        border: `1px solid ${layer.accent}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, color: layer.accent,
      }}>
        {layer.icon}
      </div>

      {/* Label */}
      <div>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          color: 'rgba(240,238,232,0.3)', textTransform: 'uppercase',
          marginBottom: 6,
        }}>{layer.tag}</div>
        <div style={{
          fontSize: 18, fontWeight: 700, color: '#F0EEE8',
          letterSpacing: '-0.01em',
        }}>{layer.label}</div>
      </div>

      {/* Desc */}
      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(240,238,232,0.5)', margin: 0 }}>
        {layer.desc}
      </p>
    </div>
  );
}