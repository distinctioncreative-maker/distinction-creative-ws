import { useState } from 'react';
import useReveal from '../../hooks/useReveal';

export default function FinalCTASection() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10, color: '#F0EEE8',
    fontSize: 15, fontFamily: 'Inter',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="cta" ref={ref} style={{
      background: '#06080F', padding: '120px 32px 160px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Large radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        {/* Top label */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 20 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 100,
            border: '1px solid rgba(201,168,76,0.2)',
            background: 'rgba(201,168,76,0.05)',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#C9A84C',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', display: 'block' }} />
            Schedule a Discovery Call
          </span>
        </div>

        <h2 className="reveal" style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.025em', color: '#F0EEE8',
          textAlign: 'center', marginBottom: 20,
        }}>
          Unlock Your<br />
          <span style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 55%, #C9A84C 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            AI Advantage.
          </span>
        </h2>

        <p className="reveal" style={{
          fontSize: 18, lineHeight: 1.7,
          color: 'rgba(240,238,232,0.5)',
          textAlign: 'center', maxWidth: 580, margin: '0 auto 60px',
        }}>
          Book a strategy session. We will assess your current environment, map the right system architecture, and show you exactly how Distinction OS would be installed into your business.
        </p>

        {/* Form */}
        <div className="reveal" style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, padding: '48px 52px',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, color: '#C9A84C',
                margin: '0 auto 20px',
              }}>✓</div>
              <h3 style={{
                fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 700,
                color: '#F0EEE8', marginBottom: 12,
              }}>Inquiry Received</h3>
              <p style={{ fontSize: 16, color: 'rgba(240,238,232,0.55)', lineHeight: 1.6 }}>
                A member of the Distinction Creative team will be in touch within 24 hours to schedule your strategy session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(240,238,232,0.45)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Your Name</label>
                  <input
                    required value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="First and Last Name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(240,238,232,0.45)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company</label>
                  <input
                    required value={form.company}
                    onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                    placeholder="Company Name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(240,238,232,0.45)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Business Email</label>
                <input
                  required type="email" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="you@company.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(240,238,232,0.45)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tell Us About Your Business</label>
                <textarea
                  required value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="What does your current stack look like? What are you trying to improve?"
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button type="submit" style={{
                width: '100%', padding: '16px 24px',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#06080F', fontWeight: 800, fontSize: 14,
                fontFamily: 'Inter', border: 'none', borderRadius: 10,
                cursor: 'pointer', letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Schedule My Discovery Call
              </button>
              <p style={{ fontSize: 12, color: 'rgba(240,238,232,0.3)', textAlign: 'center', marginTop: 14, lineHeight: 1.5 }}>
                We review every inquiry personally. A response arrives within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}