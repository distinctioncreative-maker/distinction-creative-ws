import { useState } from 'react';
import useReveal from '../../hooks/useReveal';

const TABS = [
  { id: 'leads', label: 'Lead Pipeline', color: '#5CC8B0', rgb: '92,200,176' },
  { id: 'kpis', label: 'KPI Dashboard', color: '#C9A84C', rgb: '201,168,76' },
  { id: 'chatbot', label: 'Chatbot Analytics', color: '#638CFE', rgb: '99,140,254' },
];

const LEAD_ROWS = [
  { name: 'Marcus Elliot', company: 'Elliot Advisory', status: 'Qualified', score: 92, time: '2m ago', color: '#5CC8B0' },
  { name: 'Sarah Mendez', company: 'Cascade Group', status: 'High Intent', score: 88, time: '14m ago', color: '#C9A84C' },
  { name: 'James Okafor', company: 'Novatek Corp', status: 'In Review', score: 74, time: '1h ago', color: '#638CFE' },
  { name: 'Priya Nair', company: 'Meridian Labs', status: 'Qualified', score: 91, time: '3h ago', color: '#5CC8B0' },
];

const KPI_CARDS = [
  { label: 'Monthly Revenue', value: '$184,200', delta: '+23%', color: '#C9A84C' },
  { label: 'Leads This Month', value: '312', delta: '+41%', color: '#5CC8B0' },
  { label: 'Avg Response Time', value: '8.2s', delta: '-97%', color: '#638CFE' },
  { label: 'Conversion Rate', value: '6.4%', delta: '+2.1%', color: '#A078F0' },
];

const CHATBOT_STATS = [
  { label: 'Conversations', value: '1,847', week: [40, 55, 48, 72, 65, 88, 95] },
  { label: 'Qualified Leads', value: '312', week: [12, 18, 14, 24, 21, 30, 38] },
  { label: 'Avg Quality Score', value: '84/100', week: [70, 74, 72, 80, 78, 82, 84] },
];

export default function PortalShowcaseSection() {
  const ref = useReveal();
  const [activeTab, setActiveTab] = useState('leads');

  return (
    <section id="portal" ref={ref} style={{
      background: '#090C16', padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(99,140,254,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 72 }}>
          <div>
            <div className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#638CFE', marginBottom: 20,
            }}>
              Comprehensive Command Center
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(34px, 4vw, 54px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.025em', color: '#F0EEE8',
              marginBottom: 20,
            }}>
              Complete Business<br />Visibility. One Portal.
            </h2>
            <p className="reveal" style={{
              fontSize: 16, lineHeight: 1.75,
              color: 'rgba(240,238,232,0.52)',
            }}>
              Distinction OS delivers a clean, executive-grade portal that unifies lead data, pipeline tracking, chatbot performance, revenue KPIs, and operational metrics. All in one place, updated in real time.
            </p>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: '◈', title: 'Dynamic lead tracking and qualification scores', color: '#5CC8B0' },
              { icon: '▣', title: 'Intelligent pipeline management and deal forecasting', color: '#C9A84C' },
              { icon: '◎', title: 'Chatbot performance and conversation analytics', color: '#638CFE' },
              { icon: '⬡', title: 'Real-time financial and operational metrics', color: '#A078F0' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
              }}>
                <span style={{ color: item.color, fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: 'rgba(240,238,232,0.65)', fontWeight: 500 }}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Portal Mockup */}
        <div className="reveal" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}>
          {/* Browser chrome */}
          <div style={{
            padding: '12px 20px',
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#FF5F56','#FFBD2E','#27C93F'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />
              ))}
            </div>
            <div style={{
              flex: 1, height: 24, borderRadius: 6,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', paddingLeft: 12,
              fontSize: 11, color: 'rgba(240,238,232,0.25)',
              maxWidth: 280, margin: '0 auto',
            }}>
              portal.distinction.os
            </div>
          </div>

          {/* Portal header */}
          <div style={{
            padding: '16px 28px',
            background: 'rgba(6,8,15,0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', align: 'center', gap: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#C9A84C', letterSpacing: '-0.01em', fontFamily: 'Playfair Display, serif' }}>Distinction OS</span>
              <span style={{ fontSize: 12, color: 'rgba(240,238,232,0.3)', marginTop: 2, marginLeft: 6 }}>KPI Portal</span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ fontSize: 11, color: '#5CC8B0', fontWeight: 600 }}>● Live</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={{
            display: 'flex', gap: 0,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '0 28px',
            background: 'rgba(255,255,255,0.01)',
          }}>
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600, fontFamily: 'Inter',
                color: activeTab === tab.id ? tab.color : 'rgba(240,238,232,0.38)',
                borderBottom: `2px solid ${activeTab === tab.id ? tab.color : 'transparent'}`,
                transition: 'all 0.2s', letterSpacing: '0.01em',
              }}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: '24px 28px', minHeight: 280 }}>
            {activeTab === 'leads' && (
              <div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Name', 'Company', 'Status', 'Score', 'Time'].map(h => (
                        <th key={h} style={{
                          textAlign: 'left', fontSize: 10, fontWeight: 700,
                          color: 'rgba(240,238,232,0.3)', letterSpacing: '0.08em',
                          textTransform: 'uppercase', paddingBottom: 12,
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {LEAD_ROWS.map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '14px 0 0', fontSize: 14, fontWeight: 600, color: '#F0EEE8' }}>{row.name}</td>
                        <td style={{ padding: '14px 0 0', fontSize: 13, color: 'rgba(240,238,232,0.45)' }}>{row.company}</td>
                        <td style={{ padding: '14px 0 0' }}>
                          <span style={{
                            fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                            background: `${row.color}18`, color: row.color, letterSpacing: '0.04em',
                          }}>{row.status}</span>
                        </td>
                        <td style={{ padding: '14px 0 0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 48, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: `${row.score}%`, background: row.color, borderRadius: 2 }} />
                            </div>
                            <span style={{ fontSize: 12, color: row.color, fontWeight: 700 }}>{row.score}</span>
                          </div>
                        </td>
                        <td style={{ padding: '14px 0 0', fontSize: 12, color: 'rgba(240,238,232,0.3)' }}>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'kpis' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {KPI_CARDS.map((card, i) => (
                  <div key={i} style={{
                    padding: '20px', borderRadius: 12,
                    background: `rgba(${card.color === '#C9A84C' ? '201,168,76' : card.color === '#5CC8B0' ? '92,200,176' : card.color === '#638CFE' ? '99,140,254' : '160,120,240'},0.06)`,
                    border: `1px solid rgba(${card.color === '#C9A84C' ? '201,168,76' : card.color === '#5CC8B0' ? '92,200,176' : card.color === '#638CFE' ? '99,140,254' : '160,120,240'},0.18)`,
                  }}>
                    <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{card.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: card.color, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>{card.value}</div>
                    <div style={{ fontSize: 12, color: '#5CC8B0', fontWeight: 700 }}>{card.delta} vs last month</div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'chatbot' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {CHATBOT_STATS.map((stat, i) => (
                  <div key={i} style={{
                    padding: '20px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div style={{ fontSize: 11, color: 'rgba(240,238,232,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{stat.label}</div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: '#638CFE', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 16 }}>{stat.value}</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 32 }}>
                      {stat.week.map((v, j) => {
                        const max = Math.max(...stat.week);
                        const pct = (v / max) * 100;
                        return (
                          <div key={j} style={{
                            flex: 1, borderRadius: 2,
                            background: j === stat.week.length - 1 ? '#638CFE' : 'rgba(99,140,254,0.3)',
                            height: `${pct}%`,
                            transition: 'height 0.6s ease',
                          }} />
                        );
                      })}
                    </div>
                    <div style={{ fontSize: 10, color: 'rgba(240,238,232,0.25)', marginTop: 6, letterSpacing: '0.04em' }}>7-day trend</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}