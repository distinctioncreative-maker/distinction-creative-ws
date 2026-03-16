import { useEffect, useRef, useState } from 'react';

const MESSAGES = [
  {
    time: '7:02 AM',
    type: 'brief',
    label: 'Daily Brief',
    content: 'Good morning. 14 leads captured overnight — 6 qualified. 3 appointments booked for today. Revenue pipeline up 18% vs last week. 2 items need your attention.',
    accent: '#C9A84C',
  },
  {
    time: '11:43 AM',
    type: 'alert',
    label: 'Lead Alert',
    content: 'High-intent lead just submitted. Sarah M. — enterprise inquiry, budget confirmed. Chatbot qualified. Awaiting your reply or auto-routing.',
    accent: '#5CC8B0',
  },
  {
    time: '2:18 PM',
    type: 'kpi',
    label: 'KPI Update',
    content: 'Today\'s chatbot handled 47 conversations. 12 qualified leads. Response time avg: 8 seconds. Appointment conversion rate: 26% — above 30-day avg.',
    accent: '#638CFE',
  },
  {
    time: '5:55 PM',
    type: 'nudge',
    label: 'Action Required',
    content: '3 open follow-ups from this week remain unresolved. Would you like me to schedule them or send automated follow-up sequences?',
    accent: '#A078F0',
  },
];

const CHANNELS = [
  { name: 'Slack', icon: '#', color: '#4A154B' },
  { name: 'Telegram', icon: '✈', color: '#2CA5E0' },
  { name: 'WhatsApp', icon: '◎', color: '#25D366' },
  { name: 'Discord', icon: '◈', color: '#5865F2' },
  { name: 'SMS', icon: '▣', color: '#C9A84C' },
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
    <section id="openclaw" ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
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
              OpenClaw
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 50px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#F0EEE8',
              marginBottom: 24,
            }}>
              Your Business<br />Comes To You.
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 28,
            }}>
              OpenClaw is the proactive intelligence layer inside Distinction OS. It doesn't wait for you to log in. Every morning, every lead alert, every metric shift — delivered directly to you through the channel you already use.
            </p>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.55)', marginBottom: 40,
            }}>
              This is not a notification system. It's a business communication layer that keeps the owner informed, prompts the right actions, and ensures nothing falls through the cracks.
            </p>

            {/* Channels */}
            <div className="reveal">
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(240,238,232,0.35)',
                marginBottom: 16,
              }}>
                Delivered through your channel
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {CHANNELS.map(ch => (
                  <div key={ch.name} style={{
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8,
                    fontSize: 13, fontWeight: 600, color: 'rgba(240,238,232,0.7)',
                    display: 'flex', alignItems: 'center', gap: 7,
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
                      e.currentTarget.style.color = 'rgba(240,238,232,0.7)';
                    }}
                  >
                    <span style={{ fontSize: 11, color: ch.color }}>{ch.icon}</span>
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
                  fontSize: 12, color: '#06080F', fontWeight: 800,
                }}>⬡</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#F0EEE8' }}>OpenClaw</div>
                  <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)' }}>● Active — watching your business</div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '20px' }}>
                {MESSAGES.map((msg, i) => (
                  <div key={i}
                    onClick={() => setActiveMsg(i)}
                    style={{
                      marginBottom: 12,
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}