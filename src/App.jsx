import { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Target, BarChart3 } from 'lucide-react';

// ── Colors
const C = {
  bg: '#060611',
  card: 'rgba(14,14,36,0.6)',
  cardSolid: '#0e0e24',
  border: 'rgba(255,255,255,0.07)',
  border2: 'rgba(255,255,255,0.12)',
  muted: '#6b7280',
  sub: '#94a3b8',
  text: '#c8cdd8',
  brand: '#6c31fb',
  brand2: '#8b5cf6',
  brand3: '#c4b5fd',
  white: '#ffffff',
};

// ── X (Twitter) icon component
function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─────────────────────────────────────────  N A V B A R
function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(6,6,17,0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/logo.png" alt="SubveAI" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: C.white, letterSpacing: '-0.02em' }}>SubveAI</span>
        </div>
        <span className="hide-sm" style={{ fontSize: '0.82rem', color: C.sub, fontWeight: 400 }}>Smarter Outreach. Bigger Opportunities.</span>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────  H E R O
function Hero() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = e => { e.preventDefault(); if (email.trim()) { setDone(true); setEmail(''); } };

  return (
    <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
      {/* ── Aurora Background ── */}
      <div style={{
        position: 'absolute', top: -100, right: -200, width: 900, height: 700,
        background: 'radial-gradient(ellipse at 60% 30%, rgba(108,49,251,0.18) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 80, right: 100, width: 500, height: 400,
        background: 'radial-gradient(ellipse, rgba(108,49,251,0.12) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      {/* Subtle wave line */}
      <div style={{
        position: 'absolute', top: 200, left: 0, right: 0, height: 300,
        background: 'linear-gradient(135deg, transparent 30%, rgba(108,49,251,0.06) 50%, transparent 70%)',
        transform: 'skewY(-3deg)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative', display: 'flex', gap: 60, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* ── Left Column ── */}
        <div style={{ flex: '1 1 480px', minWidth: 320, paddingTop: 20 }}>
          {/* Badge */}
          <div className="fade-up-1" style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 4,
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: C.brand2, marginBottom: 28,
          }}>
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="fade-up-2" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900,
            lineHeight: 1.08, letterSpacing: '-0.035em', color: C.white, marginBottom: 24,
          }}>
            Turn company URLs<br />into{' '}
            <span style={{
              background: `linear-gradient(135deg, ${C.brand2}, ${C.brand3})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>real opportunities.</span>
          </h1>

          {/* Sub */}
          <p className="fade-up-3" style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: C.sub,
            maxWidth: 480, lineHeight: 1.75, marginBottom: 48,
          }}>
            SubveAI helps you discover the right companies and decision-makers from any website — powered by AI.
          </p>

          {/* Feature Cards */}
          <div className="fade-up-4" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { icon: Zap, title: 'Find the right leads', desc: 'From any company URL.' },
              { icon: Target, title: 'Focus on what matters', desc: 'Get decision-makers, not noise.' },
              { icon: BarChart3, title: 'Grow faster', desc: 'More conversations. More opportunities.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: '1 1 160px', minWidth: 150 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(108,49,251,0.1)', border: '1px solid rgba(108,49,251,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={C.brand2} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: C.white, marginBottom: 2 }}>{title}</div>
                  <div style={{ fontSize: '0.72rem', color: C.muted, lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column — Waitlist Card ── */}
        <div className="fade-up-3" style={{ flex: '0 1 420px', minWidth: 300 }}>
          <div style={{
            background: 'rgba(12,12,30,0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            borderRadius: 24, padding: 'clamp(28px, 4vw, 40px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(108,49,251,0.08)',
          }}>
            {/* Label */}
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
              Be the first to know
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: C.white, letterSpacing: '-0.02em', marginBottom: 12 }}>
              Join the Waitlist
            </h2>
            <p style={{ fontSize: '0.85rem', color: C.sub, lineHeight: 1.7, marginBottom: 28 }}>
              Get early access to SubveAI and be part of our launch journey.
            </p>

            {done ? (
              <div style={{
                background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: '28px 20px',
                border: '1px solid rgba(34,197,94,0.2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                animation: 'fadeUp 0.4s ease-out forwards',
              }}>
                <CheckCircle2 size={28} color="#22c55e" />
                <span style={{ fontWeight: 700, color: C.white }}>You're on the list!</span>
                <span style={{ fontSize: '0.78rem', color: C.muted }}>We'll notify you when we launch.</span>
              </div>
            ) : (
              <>
                <form onSubmit={submit} style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                  <input
                    type="email" required placeholder="Enter your email address" value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      flex: '1 1 180px', padding: '14px 16px',
                      background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border2}`, borderRadius: 12,
                      color: C.white, fontSize: '0.84rem', fontFamily: 'inherit', outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = `${C.brand}99`; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.brand}22`; }}
                    onBlur={e => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <button type="submit" style={{
                    padding: '14px 24px', borderRadius: 12,
                    background: C.brand, color: C.white, fontSize: '0.84rem', fontWeight: 700,
                    border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: 6,
                    boxShadow: '0 0 24px rgba(108,49,251,0.3)',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.brand2; e.currentTarget.style.boxShadow = '0 0 36px rgba(108,49,251,0.45)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.brand; e.currentTarget.style.boxShadow = '0 0 24px rgba(108,49,251,0.3)'; }}
                  >Notify Me <ArrowRight size={14} strokeWidth={2.5} /></button>
                </form>

                {/* Trust signals */}
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {['Early access', 'Product updates', 'No spam, ever'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={14} color="#22c55e" />
                      <span style={{ fontSize: '0.72rem', color: C.sub }}>{t}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  T E A M S   S E C T I O N
function TeamsSection() {
  const tags = ['Sales Teams', 'Recruiters', 'Founders', 'Growth Marketers', 'Partnership Teams'];
  return (
    <section className="fade-up-5" style={{ padding: '60px 0 80px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
        <div>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>
            Built for teams who want to do more
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tags.map(t => (
              <span key={t} style={{
                padding: '8px 20px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 500,
                background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border2}`, color: C.sub,
                transition: 'all 0.2s', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.brand}55`; e.currentTarget.style.color = C.white; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.color = C.sub; }}
              >{t}</span>
            ))}
          </div>
        </div>

        {/* Handwritten text */}
        <div className="hide-sm" style={{ textAlign: 'right', position: 'relative', marginTop: 10 }}>
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: C.brand3, lineHeight: 1.3, fontWeight: 500,
            transform: 'rotate(-4deg)', display: 'inline-block', paddingRight: 20
          }}>
            Smarter leads<br />are on the way.
          </div>
          {/* Curved arrow pointing UP and RIGHT */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: 'absolute', top: -20, right: -40 }}>
            <path d="M10 50 C 25 45, 45 35, 50 10" stroke={C.brand3} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M38 16 L 50 10 L 52 22" stroke={C.brand3} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────  F O O T E R
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: '32px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/assets/logo.png" alt="SubveAI" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: C.white }}>SubveAI</span>
          </div>
          <span style={{ fontSize: '0.72rem', color: C.muted }}>© 2026 SubveAI. All rights reserved.</span>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="hide-sm" style={{ fontSize: '0.78rem', color: C.sub, marginRight: 8 }}>Follow our journey</span>
          {[
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, href: '#' },
            { icon: <XIcon size={16} />, href: '#' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>, href: '#' },
          ].map((s, i) => (
            <a key={i} href={s.href} aria-label="Social link" style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.sub, transition: 'all 0.2s', textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.brand}55`; e.currentTarget.style.color = C.white; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.sub; }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────  A P P
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, position: 'relative' }}>
      {/* Grid bg — fades out */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <TeamsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
