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
    <div className="workflow-arrow-main hidden lg:block" style={{ margin: '0 -15px', marginTop: '30px', flexShrink: 0, zIndex: 1 }}>
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path d="M5 15 Q 20 5, 35 15" stroke={C.brand} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28 15 L 35 15 L 33 8" stroke={C.brand} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ── Mobile Downward Arrow 
function MobileStepArrow() {
  return (
    <div className="flex-shrink-0 text-[#9f7cfc] z-0 flex items-center justify-center h-8" style={{ opacity: 0.8, margin: '24px 0' }}>
      <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
        <path d="M12 2 L12 32 M7 25 L12 33 L17 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Background ambient glows clipped to viewport */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 800, background: 'radial-gradient(ellipse, rgba(140, 93, 255, 0.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: -200, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 600, background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.05) 0%, transparent 60%)' }} />
      </div>

      {/* ── N A V B A R ── */}
      <nav className="w-full flex justify-between items-center relative z-10 shrink-0" style={{ maxWidth: 1400, margin: '0 auto', padding: '30px 50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Fallback box if logo not found, user uses /assets/logo.png */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-brand shrink-0">
            <img src="/assets/logo.png" alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: C.white, letterSpacing: '-0.02em' }}>Subve AI</span>
        </div>

        {/* Desktop Navbar Item */}
        <div className="handwritten hidden sm:block shrink-0" style={{ position: 'relative', fontSize: '1.4rem', color: '#c4b5fd', transform: 'rotate(-4deg)' }}>
          Coming Soon
          <div style={{ position: 'absolute', bottom: 2, left: 0, width: '100%', height: 1, background: '#c4b5fd', borderRadius: 2 }} />
        </div>

      </nav>

      {/* ── H E R O ── */}
      <main className="flex-1 w-full mx-auto flex flex-col relative z-10 shrink-0" style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 110, maxWidth: 1400 }}>

        <div className="fade-up-1 shrink-0 w-full px-5 text-center relative" style={{ marginBottom: 35 }}>
          <h1 className="handwritten relative inline-block mx-auto text-[3.2rem] leading-[1.05] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]" style={{ color: '#e2d5fa' }}>
            Automate the way<br />you find leads.
          </h1>
          <p style={{ marginTop: 10, fontSize: '1.05rem', color: C.textSub, fontWeight: 500, letterSpacing: '0.02em' }}>
            Give us a company URL. Let AI do the rest.
          </p>
        </div>

        {/* ── D E S K T O P   W O R K F L O W ── */}
        <div className="fade-up-2 workflow-grid hidden lg:flex shrink-0 w-full relative" style={{ alignItems: 'flex-start', justifyContent: 'space-between', maxWidth: 1300, padding: '0 40px', marginBottom: 65 }}>
          {steps.map((s, i) => (
            <Fragment key={s.num}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 145, position: 'relative' }}>
                <div className="step-card">
                  <s.icon strokeWidth={1.5} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: C.brand, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, flexShrink: 0, marginTop: 4 }}>
                    <div style={{ margin: 'auto' }}>{s.num}</div>
                  </div>
                  <h3 className="handwritten" style={{ fontSize: '1.35rem', color: C.white, lineHeight: 1.1 }}>
                    {s.title.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}
                  </h3>
                </div>
                <p style={{ fontSize: '0.72rem', color: C.textSub, lineHeight: 1.5, paddingLeft: 24, paddingRight: 0 }}>
                  {s.desc.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}
                </p>
              </div>
              {i < steps.length - 1 && <StepArrow />}
            </Fragment>
          ))}
        </div>
        <div className="flex lg:hidden flex-col items-center w-full max-w-[360px] mx-auto px-5 mb-16 fade-up-2 shrink-0">
          {steps.map((s, i) => (
            <Fragment key={s.num}>
              <div className="relative flex items-center rounded-[22px] w-full bg-[rgba(20,18,40,0.6)] border border-[#302657] shadow-[0_10px_30px_rgba(0,0,0,0.3)]" style={{ padding: '24px 20px' }}>

                {/* Number Overlapped Badge */}
                <div className="absolute -top-[10px] -left-[10px] w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-10" style={{ background: '#8c5dff', boxShadow: '0 4px 10px rgba(140, 93, 255, 0.4)' }}>
                  {s.num}
                </div>

                {/* Icon Block */}
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-[14px] bg-[rgba(35,32,65,0.7)] border border-[#403570] mr-5 relative overflow-hidden">
                  <div className="absolute w-8 h-8 rounded-full bg-[#8c5dff] opacity-20 blur-xl"></div>
                  <s.icon strokeWidth={1.5} className="w-[28px] h-[28px] text-[#90bcff] relative z-10 drop-shadow-md" style={{ color: i % 2 === 0 ? '#8ca9ff' : '#c992ff' }} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 pr-1">
                  <h3 className="text-white font-semibold text-[1.05rem] leading-tight mb-[3px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {s.title.replace('\n', ' ')}
                  </h3>
                  <p className="text-[0.75rem] text-[#94a3b8] leading-[1.3]">
                    {s.desc.replace('\n', ' ')}
                  </p>
                </div>
              </div>

              {/* Separator Arrow */}
              {i < steps.length - 1 && <MobileStepArrow />}
            </Fragment>
          ))}


        </div>

        {/* ── W A I T L I S T ── */}
        <div className="fade-up-3 flex flex-col items-center w-full px-5 shrink-0" style={{ maxWidth: 800 }}>
          {done ? (
            <div className="py-4 px-8 bg-green-900/40 border border-green-500/50 rounded-xl text-green-400 font-semibold text-sm">
              You're on the list! We'll be in touch.
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', gap: 12, width: '100%', maxWidth: 540, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 20 }}>
              <div style={{ position: 'relative', flex: '1 1 280px' }}>
                <Mail size={18} color={C.textSub} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email" required placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', height: '50px', padding: '0 16px 0 44px', background: C.glass, border: `1px solid ${C.border}`, borderRadius: 12, color: C.white, fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.currentTarget.style.borderColor = C.brandHover}
                  onBlur={e => e.currentTarget.style.borderColor = C.border}
                />
              </div>
              <button type="submit" style={{ padding: '0 28px', height: 50, background: C.brand, color: C.white, fontSize: '0.95rem', fontWeight: 600, border: 'none', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s', flexShrink: 0 }}
                onMouseEnter={e => e.currentTarget.style.background = C.brandHover}
                onMouseLeave={e => e.currentTarget.style.background = C.brand}
              >
                Join the Waitlist <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </main>

      {/* ── F O O T E R   T E X T (Desktop Only) ── */}
      <div className="hidden sm:flex absolute bottom-10 left-12 right-12 justify-between items-end pointer-events-none">
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
