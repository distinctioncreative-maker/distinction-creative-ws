import useReveal from '../../hooks/useReveal';

const RESULTS = [
  {
    metric: '+340%',
    area: 'Lead Response Speed',
    company: 'Regional Services Group',
    industry: 'Professional Services',
    description: 'Installed Distinction OS with AI chatbot and automated lead routing. Response time dropped from 6 hours to under 10 seconds. Qualified lead volume increased 3x within 90 days.',
    accent: '#5CC8B0',
    rgb: '92,200,176',
    tags: ['AI Chatbot', 'Lead Routing', 'KPI Portal'],
  },
  {
    metric: '+28%',
    area: 'Conversion Rate',
    company: 'Aether Capital Partners',
    industry: 'Financial Advisory',
    description: 'Distinction OS integrated with existing CRM, overlaid a qualification chatbot, and delivered daily pipeline briefings through the communication layer. Close rate improved 28% in the first quarter.',
    accent: '#C9A84C',
    rgb: '201,168,76',
    tags: ['CRM Integration', 'Automation', 'Communication Layer'],
  },
  {
    metric: '100%',
    area: 'Operational Visibility',
    company: 'Zenith Property Group',
    industry: 'Real Estate',
    description: 'Replaced fragmented tools with a unified Distinction OS installation. Full pipeline, chatbot performance, and booking data centralised in one portal. The team eliminated 20+ hours per week of manual reporting.',
    accent: '#638CFE',
    rgb: '99,140,254',
    tags: ['Portal', 'Workflow Automation', 'Reporting'],
  },
];

export default function CaseStudiesSection() {
  const ref = useReveal();

  return (
    <section id="results" ref={ref} style={{
      background: '#06080F', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '40%', right: '-100px',
        width: 600, height: 600,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="reveal" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20,
          }}>
            Results
          </div>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: '#F0EEE8',
            marginBottom: 20,
          }}>
            Distinction OS in<br />
            <span style={{
              background: 'linear-gradient(135deg, #B8902A 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              the Real World.
            </span>
          </h2>
          <p className="reveal" style={{
            fontSize: 17, color: 'rgba(240,238,232,0.48)',
            maxWidth: 500, margin: '0 auto', lineHeight: 1.75,
          }}>
            Real outcomes across industries. Businesses that moved faster, converted better, and gained complete control of their operations.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {RESULTS.map((r, i) => (
            <div key={i} className="reveal" style={{
              display: 'grid', gridTemplateColumns: '180px 1fr',
              gap: 0, alignItems: 'stretch',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${r.rgb},0.25)`;
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              {/* Left metric */}
              <div style={{
                padding: '36px 32px',
                background: `rgba(${r.rgb},0.05)`,
                borderRight: `1px solid rgba(${r.rgb},0.15)`,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'flex-start',
              }}>
                <div style={{
                  fontFamily: 'Inter', fontWeight: 900, fontSize: 42,
                  color: r.accent, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
                }}>{r.metric}</div>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: 'rgba(240,238,232,0.5)',
                  textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.4,
                }}>{r.area}</div>
              </div>

              {/* Right content */}
              <div style={{ padding: '32px 36px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#F0EEE8', marginBottom: 4, letterSpacing: '-0.01em' }}>{r.company}</div>
                    <div style={{ fontSize: 12, color: 'rgba(240,238,232,0.35)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>{r.industry}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {r.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 20,
                        background: `rgba(${r.rgb},0.1)`, color: r.accent,
                        letterSpacing: '0.04em', border: `1px solid rgba(${r.rgb},0.2)`,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(240,238,232,0.55)', margin: 0 }}>
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}