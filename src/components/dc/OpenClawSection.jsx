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
  { name: 'Slack' },
  { name: 'Telegram' },
  { name: 'WhatsApp' },
  { name: 'Discord' },
  { name: 'SMS' },
];

const DELIVERABLES = [
  'Daily business briefings & summaries',
  'Real-time lead alerts & qualification updates',
  'KPI shifts & performance notifications',
  'Operational reminders & follow-up prompts',
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
    const t = setInterval(() => setActiveMsg(p => (p + 1) % MESSAGES.length), 3800);
    return () => clearInterval(t);
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left: Copy */}
          <div>
            <div className="reveal" style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: 20,
            }}>
              Merchant Communication Layer
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 700, lineHeight: 1.08,
              letterSpacing: '-0.022em', color: '#F0EEE8',
              marginBottom: 24,
            }}>
              Your Business<br />Comes to You.
            </h2>
            <p className="reveal" style={{
              fontSize: 15, lineHeight: 1.82,
              color: 'rgba(240,238,232,0.5)', marginBottom: 14,
            }}>
              As part of Distinction OS, we configure a direct-to-owner communication layer — so you receive business intelligence, lead alerts, and performance summaries through whichever channel you already use.
            </p>
            <p className="reveal" style={{
              fontSize: 15, lineHeight: 1.82,
              color: 'rgba(240,238,232,0.5)', marginBottom: 36,
            }}>
              When appropriate, we implement this using <span style={{ color: 'rgba(201,168,76,0.85)', fontWeight: 600 }}>OpenClaw</span> — a configured contact interface that keeps you connected to your system without logging into a separate platform.
            </p>

            {/* Deliverables */}
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.28)',
                marginBottom: 14,
              }}>
                What you receive
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {DELIVERABLES.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: 'rgba(201,168,76,0.6)', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 14, color: 'rgba(240,238,232,0.55)', letterSpacing: '0.005em' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Channels */}
            <div className="reveal">
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.28)',
                marginBottom: 12,
              }}>
                Delivered via your preferred channel
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {CHANNELS.map(ch => (
                  <div key={ch.name} style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 6,
                    fontSize: 12, fontWeight: 500,
                    color: 'rgba(240,238,232,0.5)',
                    letterSpacing: '0.04em',
                    transition: 'all 0.25s ease', cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                      e.currentTarget.style.color = 'rgba(240,238,232,0.85)';
                      e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.color = 'rgba(240,238,232,0.5)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    {ch.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Message feed */}
          <div className="reveal">
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.065)',
              borderRadius: 14, overflow: 'hidden',
            }}>
              {/* Panel header */}
              <div style={{
                padding: '14px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(201,168,76,0.03)',
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7,
                  background: 'linear-gradient(135deg, #B8902A, #E8C97A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: '#06080F', fontWeight: 900,
                  letterSpacing: '0.01em', flexShrink: 0,
                }}>DS</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#F0EEE8', letterSpacing: '-0.005em' }}>Distinction OS</div>
                  <div style={{ fontSize: 10, color: 'rgba(240,238,232,0.38)', marginTop: 1, letterSpacing: '0.02em' }}>
                    <span style={{ color: '#5CC8B0', marginRight: 4 }}>●</span>
                    Communication layer active
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '14px' }}>
                {MESSAGES.map((msg, i) => (
                  <div key={i}
                    onClick={() => setActiveMsg(i)}
                    style={{
                      marginBottom: 8,
                      padding: '13px 15px',
                      borderRadius: 9,
                      border: `1px solid ${activeMsg === i ? msg.accent + '35' : 'rgba(255,255,255,0.04)'}`,
                      background: activeMsg === i ? `${msg.accent}07` : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: msg.accent,
                        padding: '2px 7px', borderRadius: 3,
                        background: `${msg.accent}16`,
                      }}>{msg.label}</span>
                      <span style={{ fontSize: 10, color: 'rgba(240,238,232,0.25)', marginLeft: 'auto', letterSpacing: '0.02em' }}>
                        {msg.time}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 12, lineHeight: 1.65,
                      color: activeMsg === i ? 'rgba(240,238,232,0.8)' : 'rgba(240,238,232,0.38)',
                      margin: 0, transition: 'color 0.3s',
                    }}>
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                padding: '10px 18px',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                fontSize: 10, color: 'rgba(240,238,232,0.2)',
                textAlign: 'center', letterSpacing: '0.04em',
              }}>
                Configured within your Distinction OS installation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}