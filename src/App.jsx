import { useState, Fragment } from 'react';
import { ArrowRight, Mail, LayoutTemplate, FileSearch, Users, Send, MessageSquare, CalendarDays } from 'lucide-react';

const C = {
  bg: '#0a0914',
  brand: '#8c5dff',
  brandHover: '#9f7cfc',
  textSub: '#94a3b8',
  white: '#ffffff',
  glass: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.08)',
};

// ── SVG Curved Arrow for steps (pointing right)
function StepArrow() {
  return (
    <div className="workflow-arrow-main" style={{ margin: '0 -15px', marginTop: '35px', flexShrink: 0, zIndex: 1 }}>
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path d="M5 15 Q 20 5, 35 15" stroke={C.brand} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28 15 L 35 15 L 33 8" stroke={C.brand} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ── SVG Main Swoosh Arrow (Top Right of Hero)
function HeroArrow() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: 'absolute', top: -10, right: -80 }}>
      <path d="M10 70 Q 40 60, 70 20" stroke="#c4b5fd" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M55 20 L 70 20 L 65 35" stroke="#c4b5fd" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── SVG Bottom Cycle Arrow (Sweeping back)
function CycleArrow() {
  return (
    <div className="cycle-arrow-container" style={{ position: 'absolute', bottom: -110, left: '6%', right: '2%', height: 160, pointerEvents: 'none', zIndex: -1 }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 160" fill="none">
        {/* Sweep goes from far right to the far left pointing UP */}
        <path d="M 980 10 C 1050 160, 800 150, 500 150 C 200 150, 10 140, 30 10" stroke={C.brand} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M 45 18 L 30 10 L 22 24" stroke={C.brand} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function App() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = e => { e.preventDefault(); if (email.trim()) setDone(true); };

  const steps = [
    { num: 1, icon: LayoutTemplate, title: 'Enter\nCompany URL', desc: 'Start with any\ncompany website.' },
    { num: 2, icon: FileSearch, title: 'AI Analyses', desc: 'We understand\ntheir business, industry\nand ideal customer\nprofiles.' },
    { num: 3, icon: Users, title: 'Finds Leads', desc: 'We search and\nidentify the right\ndecision-makers\nfor you.' },
    { num: 4, icon: Send, title: 'Automates\nOutreach', desc: 'Personalized\nmessages, sent\nautomatically.' },
    { num: 5, icon: MessageSquare, title: 'Follows Up', desc: 'AI handles\nfollow-ups so\nconversations keep\ngoing.' },
    { num: 6, icon: CalendarDays, title: 'Gets You\nMeetings', desc: 'Turn conversations\ninto real opportunities.' },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Background ambient glows */}
      <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 800, background: 'radial-gradient(ellipse, rgba(140, 93, 255, 0.08) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -200, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 600, background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* ── N A V B A R ── */}
      <nav style={{ padding: '30px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/logo.png" alt="SubveAI" style={{ width: 32, height: 32 }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: C.white, letterSpacing: '-0.02em' }}>SubveAI</span>
        </div>
        <div className="handwritten" style={{ position: 'relative', fontSize: '1.4rem', color: '#c4b5fd', transform: 'rotate(-4deg)' }}>
          Coming Soon
          <div style={{ position: 'absolute', bottom: 2, left: 0, width: '100%', height: 1, background: '#c4b5fd', borderRadius: 2 }} />
        </div>
      </nav>

      {/* ── H E R O ── */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10, paddingTop: 40, paddingBottom: 60 }}>

        <div className="fade-up-1" style={{ position: 'relative', textAlign: 'center', marginBottom: 80 }}>
          <h1 className="handwritten" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.1, color: C.white, position: 'relative', display: 'inline-block' }}>
            Smarter leads<br />are on the way.
            <HeroArrow />
          </h1>
          <p style={{ marginTop: 20, fontSize: '1.05rem', color: C.textSub, fontWeight: 500, letterSpacing: '0.02em' }}>
            Give us a company URL. Let AI do the rest.
          </p>
        </div>

        {/* ── W O R K F L O W ── */}
        <div className="fade-up-2 workflow-grid" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', maxWidth: 1300, padding: '0 40px', position: 'relative', marginBottom: 120 }}>
          {steps.map((s, i) => (
            <Fragment key={s.num}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 145, position: 'relative' }}>
                <div className="step-card">
                  <s.icon strokeWidth={1.5} />
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: C.brand, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, flexShrink: 0, marginTop: 4 }}>
                    {s.num}
                  </div>
                  <h3 className="handwritten" style={{ fontSize: '1.45rem', color: C.white, lineHeight: 1.1 }}>
                    {s.title.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}
                  </h3>
                </div>

                <p style={{ fontSize: '0.72rem', color: C.textSub, lineHeight: 1.6, paddingLeft: 28, paddingRight: 4 }}>
                  {s.desc.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}
                </p>

                {i === 0 && (
                  <div className="handwritten fade-up-4 cycle-arrow-container" style={{ position: 'absolute', bottom: -100, left: -20, color: '#c4b5fd', fontSize: '1.25rem', transform: 'rotate(-6deg)', textAlign: 'center', opacity: 0.9 }}>
                    And the cycle<br />continues...
                  </div>
                )}
              </div>
              {i < steps.length - 1 && <StepArrow />}
            </Fragment>
          ))}
          <CycleArrow />
        </div>

        {/* ── W A I T L I S T ── */}
        <div className="fade-up-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 20px' }}>
          {done ? (
            <div style={{ padding: '16px 32px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 12, color: '#4ade80', fontWeight: 600 }}>
              You're on the list! We'll be in touch.
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', gap: 12, width: '100%', maxWidth: 540, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ position: 'relative', flex: '1 1 280px' }}>
                <Mail size={18} color={C.textSub} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email" required placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '16px 16px 16px 44px', background: C.glass, border: `1px solid ${C.border}`, borderRadius: 12, color: C.white, fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.currentTarget.style.borderColor = C.brandHover}
                  onBlur={e => e.currentTarget.style.borderColor = C.border}
                />
              </div>
              <button type="submit" style={{ padding: '0 28px', height: 50, background: C.brand, color: C.white, fontSize: '0.9rem', fontWeight: 600, border: 'none', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = C.brandHover}
                onMouseLeave={e => e.currentTarget.style.background = C.brand}
              >
                Join the Waitlist <ArrowRight size={16} />
              </button>
            </form>
          )}

          <div style={{ marginTop: 24, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textSub }}>
            Be among the first to experience SubveAI
          </div>
        </div>

      </main>

      {/* ── F O O T E R   T E X T ── */}
      <div style={{ position: 'absolute', bottom: 40, left: 50, right: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pointerEvents: 'none' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: C.textSub, lineHeight: 1.8 }}>
          LESS MANUAL WORK.<br />MORE OPPORTUNITIES.
        </div>
        <div className="handwritten hide-sm" style={{ position: 'relative', fontSize: '1.4rem', color: '#c4b5fd', transform: 'rotate(-5deg)', textAlign: 'right' }}>
          <span style={{ fontSize: '1.1rem' }}>Built for</span><br />
          growth-minded teams.
          <svg width="120" height="10" viewBox="0 0 120 10" style={{ position: 'absolute', bottom: -5, right: 0 }}>
            <path d="M0 5 Q 60 10 120 2" stroke="#c4b5fd" fill="none" strokeWidth="1.5" />
            <path d="M20 9 Q 70 12 110 5" stroke="#c4b5fd" fill="none" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      </div>

    </div>
  );
}
