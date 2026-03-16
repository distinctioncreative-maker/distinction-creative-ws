import { useEffect, useRef, useState } from 'react';

const MESSAGES = [
  {
    time: '7:02 AM',
    label: 'Daily Brief',
    content: 'Good morning. 14 leads captured overnight — 6 qualified. 3 appointments booked for today. Revenue pipeline up 18% vs last week.',
    accent: '#C9A84C',
  },
  {
    time: '11:43 AM',
    label: 'Lead Alert',
    content: 'High-intent lead just submitted. Enterprise inquiry, budget confirmed. AI chatbot qualified. Awaiting routing or your reply.',
    accent: '#5CC8B0',
  },
  {
    time: '2:18 PM',
    label: 'KPI Update',
    content: 'Chatbot handled 47 conversations today. 12 qualified. Response avg: 8 seconds. Appointment conversion: 26% — above 30-day avg.',
    accent: '#638CFE',
  },
  {
    time: '5:55 PM',
    label: 'Action Required',
    content: '3 open follow-ups remain unresolved. Shall I trigger the automated follow-up sequences or flag for manual review?',
    accent: '#A078F0',
  },
];

const CHANNELS = [
  { name: 'Slack', color: '#4A154B' },
  { name: 'Telegram', color: '#2CA5E0' },
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Discord', color: '#5865F2' },
  { name: 'SMS', color: '#C9A84C' },
];

export default function OpenClawSection() {
  const ref = useRef(null);
  const [activeMsg, setActiveMsg] = useState(0);

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

  useEffect(() => {
    const t = setInterval(() => setActiveMsg(p => (p + 1) % MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="communication" ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-100px',
        width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left: Copy */}
          <div>
            <div className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
            }}>
              Merchant Communication Layer
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 50px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#F0EEE8',
              marginBottom: 24,
            }}>
              Your Business<br />Comes Directly to You.
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 20,
            }}>
              As part of Distinction OS, we configure a direct-to-owner communication layer — so you receive business intelligence, lead alerts, performance updates, and operational summaries through whichever channel you already use.
            </p>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 32,
            }}>
              We can implement this layer using tools like <span style={{ color: '#C9A84C', fontWeight: 600 }}>OpenClaw</span> — a configured contact interface that keeps you connected to the full system without requiring a separate login.
            </p>

            {/* What you receive */}
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.35)',
                marginBottom: 14,
              }}>
                What You Receive
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Daily business briefings & summaries',
                  'Real-time lead alerts & qualification updates',
                  'KPI shifts & performance notifications',
                  'Operational reminders & follow-up prompts',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#C9A84C', fontSize: 10 }}>◈</span>
                    <span style={{ fontSize: 14, color: 'rgba(240,238,232,0.6)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Channels */}
            <div className="reveal">
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.35)',
                marginBottom: 12,
              }}>
                Delivered through your preferred channel
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {CHANNELS.map(ch => (
                  <div key={ch.name} style={{
                    padding: '7px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8,
                    fontSize: 13, fontWeight: 600, color: 'rgba(240,238,232,0.65)',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${ch.color}50`;
                      e.currentTarget.style.background = `${ch.color}12`;
                      e.currentTarget.style.color = '#F0EEE8';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.color = 'rgba(240,238,232,0.65)';
                    }}
                  >
                    {ch.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Message feed mockup */}
          <div className="reveal">
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(201,168,76,0.04)',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: '#06080F', fontWeight: 900,
                  letterSpacing: '0.02em',
                }}>DS</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#F0EEE8' }}>Distinction OS</div>
                  <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)' }}>
                    <span style={{ color: '#5CC8B0' }}>●</span> Communication layer active
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '16px' }}>
                {MESSAGES.map((msg, i) => (
                  <div key={i}
                    onClick={() => setActiveMsg(i)}
                    style={{
                      marginBottom: 10,
                      padding: '14px 16px',
                      borderRadius: 10,
                      border: `1px solid ${activeMsg === i ? msg.accent + '40' : 'rgba(255,255,255,0.05)'}`,
                      background: activeMsg === i ? `${msg.accent}08` : 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
                        textTransform: 'uppercase', color: msg.accent,
                        padding: '2px 7px', borderRadius: 4,
                        background: `${msg.accent}18`,
                      }}>{msg.label}</span>
                      <span style={{ fontSize: 11, color: 'rgba(240,238,232,0.3)', marginLeft: 'auto' }}>
                        {msg.time}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 13, lineHeight: 1.6,
                      color: activeMsg === i ? 'rgba(240,238,232,0.85)' : 'rgba(240,238,232,0.45)',
                      margin: 0, transition: 'color 0.3s',
                    }}>
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div style={{
                padding: '12px 20px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                fontSize: 11, color: 'rgba(240,238,232,0.25)',
                textAlign: 'center', letterSpacing: '0.03em',
              }}>
                Configured as part of your Distinction OS installation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}