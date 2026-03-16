import { useState } from 'react';
import useReveal from '../../hooks/useReveal';

const FAQS = [
  {
    q: 'What exactly is Distinction OS?',
    a: 'Distinction OS is the flagship AI infrastructure system installed by Distinction Creative. It combines a premium website, AI chatbot, KPI portal, lead capture systems, workflow automations, and a merchant communication layer, all configured around your specific business.',
  },
  {
    q: 'Do you work with my existing tools and software?',
    a: 'Yes. Our process begins with a thorough discovery phase where we assess your current stack. We integrate with what works and strategically enhance or replace what limits you. Nothing is forced. Everything is purpose-built for your environment.',
  },
  {
    q: 'What is the communication layer and what does OpenClaw have to do with it?',
    a: 'The communication layer is a configured part of Distinction OS that delivers business intelligence, lead alerts, summaries, and KPI updates directly to you through channels like Slack, Telegram, WhatsApp, or SMS. OpenClaw is one of the secure frameworks we may utilize when implementing this layer. It acts as a configured contact interface between you and your system.',
  },
  {
    q: 'How long does an implementation take?',
    a: 'Timelines vary based on system scope, integration complexity, and your current infrastructure. After our strategy session and discovery phase, we define the full implementation plan and timeline together before any work begins.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Final pricing is scoped after discovery. The variables that affect cost include integration complexity, number of connected systems, portal configuration depth, automation requirements, and whether a communication layer is included. Every engagement begins with an honest assessment.',
  },
  {
    q: 'Do I need to be technical to use Distinction OS?',
    a: 'Not at all. Distinction Creative handles the full installation, configuration, and ongoing optimisation. You receive a clean portal interface and direct-to-owner updates through your preferred channel. No technical knowledge required.',
  },
];

export default function FAQSection() {
  const ref = useReveal();
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            Common Questions
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(34px, 4vw, 52px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: '#F0EEE8',
          }}>
            Everything You Need<br />to Know.
          </h2>
        </div>

        <div className="reveal">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < FAQS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '24px 0',
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  gap: 24,
                }}
              >
                <span style={{
                  fontSize: 17, fontWeight: 600,
                  color: open === i ? '#C9A84C' : '#F0EEE8',
                  lineHeight: 1.4, transition: 'color 0.2s', fontFamily: 'Inter',
                }}>
                  {faq.q}
                </span>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                  border: `1px solid ${open === i ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: open === i ? '#C9A84C' : 'rgba(240,238,232,0.4)',
                  fontSize: 16, transition: 'all 0.25s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}>
                <p style={{
                  fontSize: 15, lineHeight: 1.8,
                  color: 'rgba(240,238,232,0.58)',
                  paddingBottom: 24, margin: 0,
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}