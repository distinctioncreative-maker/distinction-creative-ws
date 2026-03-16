export default function TrustStrip() {
  const items = [
    { val: '24/7', label: 'AI-Active Infrastructure' },
    { val: '< 10s', label: 'Avg Chatbot Response' },
    { val: '100%', label: 'Custom Implementation' },
    { val: '5 Layers', label: 'Fully Integrated System' },
    { val: 'Daily', label: 'Proactive Owner Briefings' },
    { val: 'Zero', label: 'Generic Installs' },
  ];

  return (
    <div style={{
      background: 'rgba(9,12,22,0.9)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      borderBottom: '1px solid rgba(201,168,76,0.08)',
      padding: '28px 48px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '0 24px',
            borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
          }}>
            <span style={{
              fontSize: 18, fontWeight: 900, color: '#C9A84C',
              fontFamily: 'Inter', letterSpacing: '-0.02em', whiteSpace: 'nowrap',
            }}>{item.val}</span>
            <span style={{
              fontSize: 11, color: 'rgba(240,238,232,0.38)', fontWeight: 600,
              maxWidth: 120, lineHeight: 1.3, whiteSpace: 'nowrap',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}