import { useEffect, useRef } from 'react';
import OpenClawChatSimulator from './OpenClawChatSimulator';

const CAPABILITIES = [
  { label: 'Multi-channel gateway', body: 'One agent, accessible across WhatsApp, Telegram, Discord, iMessage, Slack, and more — simultaneously.' },
  { label: 'Conversational AI', body: 'Send a message, get an intelligent response. Ask about leads, KPIs, reports, or trigger actions directly from your phone.' },
  { label: 'Proactive intelligence', body: 'OpenClaw doesn\'t wait to be asked — it delivers daily briefs, lead alerts, and performance summaries on schedule.' },
  { label: 'Agent-native architecture', body: 'Built for multi-agent routing with session memory, tool use, and workspace isolation per sender.' },
];

const CHANNELS = [
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Telegram', color: '#2CA5E0' },
  { name: 'Discord', color: '#5865F2' },
  { name: 'iMessage', color: '#34B7F1' },
  { name: 'Slack', color: '#E01E5A' },
  { name: 'SMS', color: '#C9A84C' },
  { name: 'Mattermost', color: '#0072C6' },
];

export default function OpenClawSection() {
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
    <section id="communication" ref={ref} style={{
      background: '#06080F', padding: '120px 56px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-80px',
        width: 480, height: 480,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="reveal" style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: 16,
            }}>
              OpenClaw — AI Agent Gateway
            </div>

            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 50px)',
              fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.022em', color: '#F0EEE8',
              marginBottom: 20,
            }}>
              Your Business AI,<br />
              <span style={{
                background: 'linear-gradient(135deg, #B8902A, #E8C97A, #C9A84C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                In Your Pocket.
              </span>
            </h2>

            <p className="reveal" style={{
              fontSize: 15, lineHeight: 1.82,
              color: 'rgba(240,238,232,0.52)', marginBottom: 20,
            }}>
              OpenClaw is an AI agent gateway — a self-hosted bridge between your favorite messaging apps and an always-available business intelligence assistant. Send a message, get an intelligent agent response, from anywhere.
            </p>

            <p className="reveal" style={{
              fontSize: 15, lineHeight: 1.82,
              color: 'rgba(240,238,232,0.52)', marginBottom: 36,
            }}>
              Configured as part of your Distinction OS installation, OpenClaw connects every layer of your system — so you can query leads, trigger follow-ups, and receive proactive summaries directly through WhatsApp, Telegram, Discord, or any channel you prefer.
            </p>

            {/* Capabilities */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.018)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 10,
                  transition: 'border-color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#F0EEE8', marginBottom: 5, letterSpacing: '-0.005em' }}>{cap.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.45)', lineHeight: 1.6 }}>{cap.body}</div>
                </div>
              ))}
            </div>

            {/* Channel pills */}
            <div className="reveal">
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.25)',
                marginBottom: 12,
              }}>
                Available on
              </div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {CHANNELS.map(ch => (
                  <div key={ch.name} style={{
                    padding: '5px 12px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 6,
                    fontSize: 11, fontWeight: 600,
                    color: 'rgba(240,238,232,0.45)',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease', cursor: 'default',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${ch.color}40`;
                      e.currentTarget.style.color = 'rgba(240,238,232,0.85)';
                      e.currentTarget.style.background = `${ch.color}10`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.color = 'rgba(240,238,232,0.45)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: ch.color, display: 'block', flexShrink: 0 }} />
                    {ch.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live chat simulator */}
          <div className="reveal">
            <OpenClawChatSimulator />
          </div>

        </div>
      </div>
    </section>
  );
}