import { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, BrainCircuit, Users, UserCheck, Sparkles } from 'lucide-react';

// ─────────────────────────────────────────  S T Y L E   H E L P E R S

const C = {
  bg: '#030303',
  card: '#0a0a0a',
  border: 'rgba(255,255,255,0.06)',
  border2: 'rgba(255,255,255,0.1)',
  muted: '#64748b',
  sub: '#94a3b8',
  brand: '#6c31fb',
  brand2: '#8f57fc',
  brand3: '#b49afc',
  glow: 'rgba(108,49,251,0.25)',
};

// ─────────────────────────────────────────  N A V B A R

function Navbar() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(3,3,3,0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div className="container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/logo.png" alt="SubveAI" style={{ width: 30, height: 30, objectFit: 'contain' }} />
          <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>SubveAI</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span className="hide-sm" style={{ fontSize: '0.8rem', color: C.muted, fontWeight: 500 }}>Coming Soon</span>
          <button onClick={() => go('waitlist')} style={{
            padding: '8px 20px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600, color: '#fff',
            background: 'rgba(108,49,251,0.15)', border: `1px solid rgba(108,49,251,0.35)`,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,49,251,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(108,49,251,0.15)'; }}
          >Join Waitlist</button>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────  H E R O

function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 60, textAlign: 'center', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 800, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(108,49,251,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', filter: 'blur(40px)',
      }} />

      <div className="container" style={{ position: 'relative', maxWidth: 780 }}>
        {/* Badge */}
        <div className="fade-up-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 16px', borderRadius: 999,
          background: 'rgba(108,49,251,0.1)', border: '1px solid rgba(108,49,251,0.2)',
          marginBottom: 28,
        }}>
          <Sparkles size={11} color={C.brand2} />
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.brand2 }}>Coming Soon</span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 800,
          lineHeight: 1.1, letterSpacing: '-0.035em', marginBottom: 20, color: '#fff',
        }}>
          Turn company URLs into<br />
          <span style={{
            background: `linear-gradient(135deg, ${C.brand3}, ${C.brand})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>qualified leads.</span>
        </h1>

        {/* Sub */}
        <p className="fade-up-3" style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: C.sub,
          maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.75, fontWeight: 400,
        }}>
          Discover the right companies and decision-makers faster with AI-powered lead discovery.
        </p>

        {/* CTA */}
        <div className="fade-up-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <button onClick={() => go('waitlist')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 999,
            background: '#fff', color: '#000', fontSize: '0.95rem', fontWeight: 700,
            border: 'none', cursor: 'pointer', transition: 'all 0.25s',
            boxShadow: '0 0 0 0 rgba(255,255,255,0)',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 36px rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 0 rgba(255,255,255,0)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Join the Waitlist <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <span style={{ fontSize: '0.75rem', color: C.muted }}>Be among the first to access SubveAI.</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  W O R K F L O W   V I S U A L

const steps = [
  { icon: Globe, num: '01', title: 'Company URL', desc: 'Enter any company website', highlight: false },
  { icon: BrainCircuit, num: '02', title: 'AI Research', desc: 'Analyzes company, market & products', highlight: true },
  { icon: Users, num: '03', title: 'Decision Makers', desc: 'Identifies relevant people & contacts', highlight: false },
  { icon: UserCheck, num: '04', title: 'Qualified Leads', desc: 'Prospects ready for outreach', highlight: false },
];

function FlowConnector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 48, position: 'relative' }}>
      <div style={{
        width: 1, height: '100%',
        background: `linear-gradient(to bottom, ${C.brand}66, ${C.brand}22)`,
      }} />
      {/* animated dot */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        width: 5, height: 5, borderRadius: '50%', marginLeft: -2.5,
        background: C.brand2, boxShadow: `0 0 6px ${C.brand}`,
        animation: 'flow-dot 2s ease-in-out infinite',
      }} />
    </div>
  );
}

function WorkflowVisual() {
  return (
    <section className="fade-up-5" style={{ padding: '20px 0 0' }}>
      <div className="container" style={{ maxWidth: 640 }}>
        {/* Card */}
        <div style={{
          background: C.card, borderRadius: 24,
          border: `1px solid ${C.border}`,
          padding: 'clamp(28px, 5vw, 48px)',
          position: 'relative', overflow: 'hidden',
          boxShadow: `0 0 80px ${C.glow}, 0 24px 60px rgba(0,0,0,0.5)`,
        }}>
          {/* Glow spots */}
          <div style={{ position: 'absolute', top: -80, right: -60, width: 200, height: 200, background: `${C.brand}18`, borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -40, width: 160, height: 160, background: 'rgba(59,130,246,0.06)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

          {/* Label */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', animation: 'pulse-soft 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>How it works</span>
            </div>
            <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.015em' }}>
              From Company URL → Qualified Leads
            </h3>
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isHL = s.highlight;
              return (
                <div key={s.num} style={{ display: 'contents' }}>
                  {/* Step row */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 380,
                    padding: '14px 18px', borderRadius: 16,
                    background: isHL ? `${C.brand}0d` : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isHL ? `${C.brand}44` : C.border}`,
                    boxShadow: isHL ? `0 0 24px ${C.brand}18` : 'none',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = isHL ? `${C.brand}18` : 'rgba(255,255,255,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = isHL ? `${C.brand}0d` : 'rgba(255,255,255,0.02)'; }}
                  >
                    {/* Number + icon */}
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: isHL ? `${C.brand}1a` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isHL ? `${C.brand}55` : 'rgba(255,255,255,0.08)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color={isHL ? C.brand2 : '#9ca3af'} strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: '0.58rem', fontWeight: 700, color: isHL ? C.brand3 : C.muted, letterSpacing: '0.08em' }}>{s.num}</span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isHL ? '#fff' : '#e2e8f0' }}>{s.title}</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: C.muted, lineHeight: 1.5 }}>{s.desc}</span>
                    </div>
                  </div>

                  {/* Connector */}
                  {i < steps.length - 1 && <FlowConnector />}
                </div>
              );
            })}
          </div>

          {/* Tagline */}
          <div style={{ textAlign: 'center', marginTop: 28, paddingTop: 20, borderTop: `1px solid ${C.border}` }}>
            <span style={{ fontSize: '0.75rem', color: C.muted, letterSpacing: '0.03em', fontWeight: 500 }}>
              AI researches. &nbsp;Identifies. &nbsp;Qualifies.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  V A L U E

function ValueStatement() {
  return (
    <section style={{ padding: 'clamp(72px, 12vw, 120px) 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 660 }}>
        <h2 style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800,
          lineHeight: 1.2, letterSpacing: '-0.025em', marginBottom: 16,
          background: 'linear-gradient(135deg, #fff 30%, #64748b 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Find the right prospects.<br />Start better conversations.
        </h2>
        <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.8, fontWeight: 400 }}>
          SubveAI is being built to make B2B prospect discovery faster, simpler, and more intelligent.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  W A I T L I S T

function Waitlist() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = e => { e.preventDefault(); if (email.trim()) { setDone(true); setEmail(''); } };

  return (
    <section id="waitlist" style={{ borderTop: `1px solid ${C.border}`, padding: 'clamp(64px, 10vw, 100px) 0' }}>
      <div className="container" style={{ maxWidth: 480, textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
          Be first to try SubveAI.
        </h2>
        <p style={{ color: C.muted, fontSize: '0.9rem', marginBottom: 32, lineHeight: 1.7 }}>
          Join the waitlist and get early access when we go live.
        </p>

        {done ? (
          <div style={{
            background: C.card, borderRadius: 20, padding: '36px 24px',
            border: `1px solid rgba(34,197,94,0.2)`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            animation: 'fadeUp 0.5s ease-out forwards',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <CheckCircle2 size={22} color="#22c55e" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>You're on the list!</h3>
            <p style={{ fontSize: '0.8rem', color: C.muted }}>We'll notify you when your access is ready.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input
              type="email" required placeholder="Enter your email" value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1, minWidth: 200, padding: '14px 18px',
                background: C.card, border: `1px solid ${C.border2}`, borderRadius: 14,
                color: '#fff', fontSize: '0.85rem', fontFamily: 'inherit',
                outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = `${C.brand}88`; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.brand}20`; }}
              onBlur={e => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.boxShadow = 'none'; }}
            />
            <button type="submit" style={{
              padding: '14px 28px', borderRadius: 14,
              background: C.brand, color: '#fff', fontSize: '0.85rem', fontWeight: 700,
              border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
              boxShadow: `0 0 20px ${C.glow}`,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.brand2; e.currentTarget.style.boxShadow = `0 0 32px ${C.glow}`; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.brand; e.currentTarget.style.boxShadow = `0 0 20px ${C.glow}`; }}
            >Join Waitlist</button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  F O O T E R

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: '48px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <img src="/assets/logo.png" alt="SubveAI" style={{ width: 24, height: 24, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>SubveAI</span>
        </div>
        <p style={{ fontSize: '0.78rem', color: C.muted }}>AI-powered lead discovery.</p>
        <p style={{ fontSize: '0.68rem', color: '#374151', marginTop: 16 }}>© 2026 SubveAI. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────  A P P

export default function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <WorkflowVisual />
          <ValueStatement />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
