import { useEffect, useRef } from 'react';

const TIERS = [
  {
    name: 'Foundation',
    tag: 'Tier 01',
    price: 'Starting from',
    priceVal: '$2,500',
    billing: '/ setup + monthly retainer',
    tagline: 'A strong digital foundation for growing businesses.',
    features: [
      'Premium website design & deployment',
      'AI chatbot installation',
      'Core KPI portal',
      'One primary integration',
      'OpenClaw daily brief (SMS)',
      'Onboarding & configuration',
    ],
    cta: 'Inquire About Foundation',
    featured: false,
    note: 'Final scope determined after discovery',
  },
  {
    name: 'Distinction OS',
    tag: 'Flagship',
    price: 'Custom Implementation',
    priceVal: 'By Scope',
    billing: '/ setup + premium retainer',
    tagline: 'The full operating system, installed around your business.',
    features: [
      'Everything in Foundation',
      'Full Distinction OS installation',
      'Multi-integration architecture',
      'Advanced KPI portal configuration',
      'OpenClaw on all preferred channels',
      'Custom automation layer',
      'Executive reporting & analytics',
      'Priority implementation support',
      'Post-install optimization cycle',
    ],
    cta: 'Apply for Distinction OS',
    featured: true,
    note: 'Pricing determined after system assessment',
  },
  {
    name: 'Growth',
    tag: 'Tier 02',
    price: 'Starting from',
    priceVal: '$5,000',
    billing: '/ setup + monthly retainer',
    tagline: 'Deeper automation and intelligence for established operations.',
    features: [
      'Everything in Foundation',
      'Multi-system integration',
      'Advanced portal KPIs',
      'OpenClaw multi-channel delivery',
      'Automation sequences',
      'Lead routing & follow-up logic',
      'Implementation strategy session',
    ],
    cta: 'Inquire About Growth',
    featured: false,
    note: 'Final scope determined after discovery',
  },
];

export default function PricingSection() {
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
    <section id="pricing" ref={ref} style={{
      background: '#090C16', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 300,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            Investment
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#F0EEE8',
            marginBottom: 20,
          }}>
            Premium Infrastructure.<br />Transparent Structure.
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.5)',
            maxWidth: 540, margin: '0 auto', lineHeight: 1.7,
          }}>
            Distinction Creative works with a limited number of clients at any given time. Implementation scope and final pricing are determined after discovery. Every engagement begins with an honest assessment.
          </p>
        </div>

        {/* Tiers — featured in center */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.12fr 1fr',
          gap: 16, alignItems: 'start',
        }}>
          {TIERS.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Note */}
        <div className="reveal" style={{
          marginTop: 40, textAlign: 'center',
          fontSize: 14, color: 'rgba(240,238,232,0.35)',
          lineHeight: 1.6,
        }}>
          All engagements begin with a strategy session. Final implementation scope is defined after a thorough discovery of your current stack, workflows, and business goals.
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier }) {
  return (
    <div className="reveal" style={{
      borderRadius: 16,
      border: tier.featured ? '1px solid rgba(201,168,76,0.35)' : '1px solid rgba(255,255,255,0.07)',
      background: tier.featured
        ? 'linear-gradient(180deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)'
        : 'rgba(255,255,255,0.02)',
      padding: tier.featured ? '44px 36px' : '36px 28px',
      position: 'relative',
      boxShadow: tier.featured ? '0 0 80px rgba(201,168,76,0.08), 0 0 160px rgba(201,168,76,0.03)' : 'none',
      transition: 'transform 0.3s ease',
    }}
      onMouseEnter={e => { if (!tier.featured) e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { if (!tier.featured) e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {tier.featured && (
        <div style={{
          position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
          color: '#06080F', fontSize: 10, fontWeight: 800,
          padding: '4px 16px', borderRadius: '0 0 8px 8px',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Flagship System
        </div>
      )}

      <div style={{
        fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: tier.featured ? '#C9A84C' : 'rgba(240,238,232,0.35)',
        marginBottom: 12,
      }}>{tier.tag}</div>

      <div style={{
        fontSize: tier.featured ? 26 : 22, fontWeight: 800,
        color: '#F0EEE8', marginBottom: 8,
        fontFamily: 'Inter', letterSpacing: '-0.02em',
      }}>{tier.name}</div>

      <p style={{
        fontSize: 13, color: 'rgba(240,238,232,0.5)',
        lineHeight: 1.5, marginBottom: 24,
      }}>{tier.tagline}</p>

      <div style={{ marginBottom: 28 }}>
        <span style={{
          fontSize: 12, color: 'rgba(240,238,232,0.4)',
          display: 'block', marginBottom: 4,
        }}>{tier.price}</span>
        <span style={{
          fontSize: tier.featured ? 32 : 26, fontWeight: 800,
          color: tier.featured ? '#C9A84C' : '#F0EEE8',
          fontFamily: 'Inter', letterSpacing: '-0.03em',
        }}>{tier.priceVal}</span>
        <span style={{ fontSize: 13, color: 'rgba(240,238,232,0.35)', marginLeft: 6 }}>
          {tier.billing}
        </span>
      </div>

      {/* Features */}
      <div style={{ marginBottom: 28 }}>
        {tier.features.map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10,
          }}>
            <span style={{
              color: tier.featured ? '#C9A84C' : 'rgba(201,168,76,0.5)',
              fontSize: 11, marginTop: 3, flexShrink: 0,
            }}>◈</span>
            <span style={{
              fontSize: 13, color: 'rgba(240,238,232,0.65)', lineHeight: 1.5,
            }}>{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a href="#cta" style={{
        display: 'block', width: '100%',
        padding: '13px 20px',
        background: tier.featured
          ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
          : 'rgba(255,255,255,0.05)',
        border: tier.featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        color: tier.featured ? '#06080F' : 'rgba(240,238,232,0.8)',
        fontWeight: 700, fontSize: 13,
        textAlign: 'center', textDecoration: 'none',
        letterSpacing: '0.02em', fontFamily: 'Inter',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {tier.cta}
      </a>

      <div style={{
        marginTop: 12, fontSize: 11, color: 'rgba(240,238,232,0.28)',
        textAlign: 'center', lineHeight: 1.4,
      }}>
        {tier.note}
      </div>
    </div>
  );
}