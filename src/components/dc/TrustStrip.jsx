export default function TrustStrip() {
  const items = [
    { val: '24/7', label: 'AI-Active Infrastructure' },
    { val: '< 10s', label: 'Average Chatbot Response Time' },
    { val: '100%', label: 'Custom Implementation' },
    { val: '5 Layers', label: 'Fully Integrated System' },
    { val: 'Daily', label: 'Proactive Owner Briefings' },
    { val: 'Zero', label: 'Generic Out-of-the-Box Installs' },
  ];

  return (
    <div style={{
      background: '#09080F',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      padding: '20px 32px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '0 20px',
            borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <span style={{
              fontSize: 16, fontWeight: 800, color: '#C9A84C',
              fontFamily: 'Inter', letterSpacing: '-0.01em', whiteSpace: 'nowrap',
            }}>{item.val}</span>
            <span style={{
              fontSize: 12, color: 'rgba(240,238,232,0.4)', fontWeight: 500,
              maxWidth: 120, lineHeight: 1.3, whiteSpace: 'nowrap',
            }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}