import { useState, useEffect, useRef } from 'react';
import { Bot, User, SendHorizonal } from 'lucide-react';

const CONVERSATION = [
  { role: 'ai', text: 'Good morning. 14 leads captured overnight — 6 qualified. Pipeline up 18% week-over-week. 3 appointments scheduled for today.' },
  { role: 'user', text: 'Any high-intent leads I should know about?' },
  { role: 'ai', text: 'Yes — one enterprise inquiry came in at 11:43 PM via chatbot. Budget confirmed, timeline is Q2. I\'ve flagged it as high priority. Want me to draft a follow-up?' },
  { role: 'user', text: 'Yes, send it.' },
  { role: 'ai', text: 'Done. Follow-up sent. I\'ll notify you when they respond. Anything else?' },
  { role: 'user', text: 'What\'s my conversion rate this month?' },
  { role: 'ai', text: 'Current close rate is 6.4% — up 2.1 points from last month. Chatbot qualified 312 leads, 47 converted to appointments. You\'re tracking above your 30-day average.' },
];

export default function OpenClawChatSimulator() {
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(false);
  const [idx, setIdx] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (idx >= CONVERSATION.length) {
      // restart loop after pause
      const t = setTimeout(() => { setShown([]); setIdx(0); }, 4000);
      return () => clearTimeout(t);
    }
    const msg = CONVERSATION[idx];
    const delay = msg.role === 'user' ? 1200 : 600;
    const typingDuration = msg.role === 'ai' ? 1400 : 0;

    const t1 = setTimeout(() => {
      if (msg.role === 'ai') setTyping(true);
      else { setShown(p => [...p, msg]); setIdx(p => p + 1); }
    }, delay);

    const t2 = msg.role === 'ai' ? setTimeout(() => {
      setTyping(false);
      setShown(p => [...p, msg]);
      setIdx(p => p + 1);
    }, delay + typingDuration) : null;

    return () => { clearTimeout(t1); if (t2) clearTimeout(t2); };
  }, [idx]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [shown, typing]);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 18, overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
      display: 'flex', flexDirection: 'column',
      height: 480,
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(201,168,76,0.04)',
        display: 'flex', alignItems: 'center', gap: 12,
        flexShrink: 0,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 9,
          background: 'linear-gradient(135deg, #B8902A, #E8C97A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 900, color: '#06080F', letterSpacing: '0.01em',
          boxShadow: '0 4px 12px rgba(201,168,76,0.3)',
        }}>OC</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#F0EEE8', letterSpacing: '-0.01em' }}>OpenClaw</div>
          <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.38)', marginTop: 1 }}>
            <span style={{ color: '#5CC8B0', fontSize: 9 }}>● </span>
            Active · WhatsApp, Telegram, Discord
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
          {['#FF5F56','#FFBD2E','#27C93F'].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.6 }} />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '18px 16px',
        display: 'flex', flexDirection: 'column', gap: 12,
        scrollbarWidth: 'none',
      }}>
        {shown.map((msg, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-end', gap: 8,
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            animation: 'fadeUp 0.35s ease forwards',
          }}>
            {msg.role === 'ai' && (
              <div style={{
                width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Bot size={12} color="#C9A84C" />
              </div>
            )}
            <div style={{
              maxWidth: '78%',
              padding: '10px 14px',
              borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
              fontSize: 13, lineHeight: 1.65,
              background: msg.role === 'user'
                ? 'rgba(255,255,255,0.07)'
                : 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))',
              border: msg.role === 'user'
                ? '1px solid rgba(255,255,255,0.08)'
                : '1px solid rgba(201,168,76,0.18)',
              color: msg.role === 'user' ? 'rgba(240,238,232,0.75)' : '#F0EEE8',
            }}>
              {msg.text}
            </div>
            {msg.role === 'user' && (
              <div style={{
                width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <User size={12} color="rgba(240,238,232,0.6)" />
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, animation: 'fadeUp 0.3s ease forwards' }}>
            <div style={{
              width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Bot size={12} color="#C9A84C" />
            </div>
            <div style={{
              padding: '12px 16px', borderRadius: '14px 14px 14px 4px',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))',
              border: '1px solid rgba(201,168,76,0.18)',
              display: 'flex', gap: 4, alignItems: 'center',
            }}>
              {[0, 0.2, 0.4].map((d, i) => (
                <div key={i} style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: '#C9A84C', opacity: 0.7,
                  animation: `blinkDot 1.2s ease infinite ${d}s`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
        display: 'flex', alignItems: 'center', gap: 10,
        flexShrink: 0,
      }}>
        <div style={{
          flex: 1, padding: '9px 14px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 9, fontSize: 12,
          color: 'rgba(240,238,232,0.25)',
          userSelect: 'none',
        }}>
          Message OpenClaw...
        </div>
        <div style={{
          width: 34, height: 34, borderRadius: 9,
          background: 'linear-gradient(135deg, #B8902A, #C9A84C)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.5,
          flexShrink: 0,
        }}>
          <SendHorizonal size={14} color="#06080F" />
        </div>
      </div>
    </div>
  );
}