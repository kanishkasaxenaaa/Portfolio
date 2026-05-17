import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export default function SplitwiseCaseStudy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-[var(--bg)] focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 transition-all duration-350 ${
          scrolled
            ? 'bg-[rgba(10,10,9,0.95)] backdrop-blur-xl py-3 md:py-4 border-b border-[var(--border-color)]'
            : 'py-6 md:py-7'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-['Plus_Jakarta_Sans'] text-sm md:text-base font-light text-[var(--text-primary)] tracking-tight hover:opacity-70 focus:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--clay)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded-md px-2 py-1 transition-all duration-200"
            aria-label="Back to portfolio home"
          >
            ← Kanishka Saxena
          </Link>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-28 overflow-hidden"
          aria-labelledby="project-title"
        >
          {/* Ambient Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full blur-[120px] opacity-60 animate-float-slow"
              style={{
                background: 'radial-gradient(circle, rgba(200, 89, 58, 0.25) 0%, transparent 70%)',
                top: '-10%',
                right: '20%',
              }}
            ></div>
            <div
              className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full blur-[100px] opacity-40 animate-float-slow-reverse"
              style={{
                background: 'radial-gradient(circle, rgba(232, 160, 32, 0.15) 0%, transparent 70%)',
                bottom: '20%',
                left: '15%',
              }}
            ></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-fade-in-up-delay-1">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.13em] text-[var(--clay)] font-medium">
                02 · Product UX · System Redesign
              </span>
            </div>

            <h1
              id="project-title"
              className="font-['Plus_Jakarta_Sans'] text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-[var(--text-primary)] mb-8 md:mb-10 opacity-0 animate-fade-in-up-delay-2"
            >
              Splitwise Reimagined
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.85)] max-w-4xl mb-12 md:mb-16 opacity-0 animate-fade-in-up-delay-3">
              Shared expenses, without the friction.
            </p>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-3xl mb-16 md:mb-20 opacity-0 animate-fade-in-up-delay-4">
              How might we reduce confusion and distrust in collaborative expense management — making transparency feel natural instead of transactional?
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-16 md:mb-20 opacity-0 animate-fade-in-up-delay-5">
              {['UX Redesign', 'Dashboard UX', 'Fintech', 'Product Strategy', 'Information Architecture', 'Usability Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs border border-[rgba(200,89,58,0.3)] bg-[rgba(200,89,58,0.1)] text-[#E8A87C]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 border-t border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Overview
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Why expense sharing<br />started breaking down.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                As shared financial activity became more complex, users experienced:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc marker:text-[var(--clay)]">fragmented settlements,</li>
                <li className="list-disc marker:text-[var(--clay)]">confusing navigation,</li>
                <li className="list-disc marker:text-[var(--clay)]">poor financial visibility,</li>
                <li className="list-disc marker:text-[var(--clay)]">and friction during collaborative money management.</li>
              </ul>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)] font-normal border-l-2 border-[var(--clay)] pl-8">
                This redesign explored how expense-sharing could become clearer, faster, more collaborative, and emotionally frictionless.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase 1 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">Research Process Visualization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--marigold)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--marigold)] font-medium">
                Research
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Understanding collaborative<br />financial friction.
            </h2>

            {/* Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  insight: 'Users lost trust when essential actions were hidden behind paywalls.',
                  color: 'clay'
                },
                {
                  insight: 'Settlements felt incomplete because users had to leave the platform to pay.',
                  color: 'marigold'
                },
                {
                  insight: 'Active groups became difficult to track as usage increased.',
                  color: 'plum'
                },
                {
                  insight: 'Real-world expense sharing often involved temporary or non-app users.',
                  color: 'mint'
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className={`p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 hover:transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)] ${
                    item.color === 'clay' ? 'bg-[rgba(200,89,58,0.06)] border-[rgba(200,89,58,0.2)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.12)] focus-within:ring-[var(--clay)]' :
                    item.color === 'marigold' ? 'bg-[rgba(232,160,32,0.06)] border-[rgba(232,160,32,0.2)] hover:shadow-[0_20px_60px_rgba(232,160,32,0.12)] focus-within:ring-[var(--marigold)]' :
                    item.color === 'plum' ? 'bg-[rgba(122,92,122,0.06)] border-[rgba(122,92,122,0.2)] hover:shadow-[0_20px_60px_rgba(122,92,122,0.12)] focus-within:ring-[var(--plum)]' :
                    'bg-[rgba(61,140,122,0.06)] border-[rgba(61,140,122,0.2)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)] focus-within:ring-[var(--mint)]'
                  }`}
                >
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.85)]">
                    {item.insight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase 2 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(232,160,32,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">User Research Insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Landscape Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Competitive Analysis
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Where existing platforms<br />fall short.
            </h2>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: 'Splitwise (Original)',
                  strength: 'Established expense-tracking system',
                  gap: 'Disconnected payment flows and paywalled features create friction.',
                },
                {
                  name: 'Tricount',
                  strength: 'Simple group expense splitting',
                  gap: 'Limited collaboration features and poor multi-group management.',
                },
                {
                  name: 'Splid',
                  strength: 'Clean interface design',
                  gap: 'Lacks robust settlement systems and financial transparency.',
                },
                {
                  name: 'Venmo',
                  strength: 'Social payment integration',
                  gap: 'Not designed for structured expense splitting across groups.',
                },
                {
                  name: 'Google Pay',
                  strength: 'Seamless payment processing',
                  gap: 'No expense management or collaborative tracking features.',
                },
              ].map((competitor, index) => (
                <article
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-color)] hover:border-[rgba(200,89,58,0.3)] transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-4">
                    {competitor.name}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-[var(--clay)] mb-1 font-medium">Strength</dt>
                      <dd className="text-sm text-[rgba(242,239,232,0.7)]">{competitor.strength}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-[var(--marigold)] mb-1 font-medium">Gap Identified</dt>
                      <dd className="text-sm text-[rgba(242,239,232,0.7)]">{competitor.gap}</dd>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase 3 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">Competitive Analysis Framework</span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Persona Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Primary Persona
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Designing for<br />collaborative planners.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Persona Profile */}
              <div className="lg:col-span-1">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[rgba(61,140,122,0.12)] to-transparent border-2 border-[rgba(61,140,122,0.25)]">
                  <div className="aspect-square rounded-2xl bg-[rgba(61,140,122,0.15)] mb-6 flex items-center justify-center border border-[rgba(61,140,122,0.3)]">
                    <span className="text-4xl" role="img" aria-label="Persona avatar">👤</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-2">
                    Pragya
                  </h3>
                  <p className="text-sm text-[rgba(242,239,232,0.6)] mb-4">
                    24 · Young Working Professional
                  </p>
                  <p className="text-sm text-[var(--mint)] font-medium">
                    Organized but overwhelmed, collaborative, financially responsible
                  </p>
                </div>
              </div>

              {/* Persona Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="p-8 rounded-3xl bg-[var(--bg)] border border-[var(--border-color)]">
                  <h4 className="text-xs uppercase tracking-wide text-[var(--clay)] mb-4 font-medium">Goals</h4>
                  <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--clay)] mt-1">•</span>
                      <span>Manage group expenses faster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--clay)] mt-1">•</span>
                      <span>Avoid manual calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--clay)] mt-1">•</span>
                      <span>Settle payments seamlessly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--clay)] mt-1">•</span>
                      <span>Reduce confusion</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-[var(--bg)] border border-[var(--border-color)]">
                  <h4 className="text-xs uppercase tracking-wide text-[var(--marigold)] mb-4 font-medium">Pain Points</h4>
                  <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--marigold)] mt-1">•</span>
                      <span>Disconnected settlement flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--marigold)] mt-1">•</span>
                      <span>Poor visibility across groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--marigold)] mt-1">•</span>
                      <span>Repetitive expense tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--marigold)] mt-1">•</span>
                      <span>Unclear debt structures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Quote */}
            <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(61,140,122,0.12)] to-transparent border-2 border-[rgba(61,140,122,0.25)]">
              <blockquote className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.95)] italic">
                "Expense sharing should reduce stress, not create more of it."
              </blockquote>
              <cite className="block mt-6 text-sm text-[var(--mint)] not-italic font-medium">— Pragya, Research Participant</cite>
            </div>
          </div>
        </section>

        {/* Image Showcase 4 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">User Persona Journey</span>
              </div>
            </div>
          </div>
        </section>

        {/* Empathy Mapping Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Empathy Mapping
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Understanding collaborative<br />expense behaviors.
            </h2>

            {/* 2x2 Empathy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent border-2 border-[rgba(200,89,58,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--clay)]" aria-hidden="true">💭</span>
                  <span>Thinks</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li className="italic">"I need a better way to track shared expenses"</li>
                  <li className="italic">"Who still owes me money?"</li>
                  <li className="italic">"Why is settling up so complicated?"</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(232,160,32,0.08)] to-transparent border-2 border-[rgba(232,160,32,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--marigold)]" aria-hidden="true">❤️</span>
                  <span>Feels</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li>Frustrated by disconnected flows</li>
                  <li>Anxious about unresolved balances</li>
                  <li>Overwhelmed by managing multiple groups</li>
                  <li>Relieved when settlements are clear</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent border-2 border-[rgba(122,92,122,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--plum)]" aria-hidden="true">💬</span>
                  <span>Says</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li className="italic">"I just want to settle up quickly"</li>
                  <li className="italic">"The app should handle the math"</li>
                  <li className="italic">"Why do I need to use another app to pay?"</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent border-2 border-[rgba(61,140,122,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--mint)]" aria-hidden="true">⚡</span>
                  <span>Does</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li>Manually tracks who paid what</li>
                  <li>Switches between multiple apps</li>
                  <li>Delays settling up until later</li>
                  <li>Loses track of older expenses</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
              <div className="h-px w-12 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-xs uppercase tracking-wide text-[var(--clay)] font-medium">The Core Problem</span>
              <div className="h-px w-12 bg-[var(--clay)]" aria-hidden="true"></div>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-10 md:mb-12">
              Fragmented flows create<br />collaborative friction.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                Existing expense-sharing platforms forced users to navigate disconnected experiences: tracking expenses in one place, settling payments in another, and managing groups through fragmented interfaces.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal border-l-2 border-[var(--clay)] pl-8">
                The redesign needed to create a unified, transparent, and friction-free collaborative finance experience.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase 5 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">Problem Space Mapping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solution System Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Solution
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              A unified expense-sharing<br />experience.
            </h2>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-4xl mb-16 md:mb-20">
              The redesign focused on three core principles: <span className="text-[var(--clay)] font-normal">simplify workflows, increase transparency, and reduce friction</span> throughout the entire expense-sharing lifecycle.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Unified Dashboard',
                  description: 'All groups, expenses, and settlements in one clear, organized view with improved visual hierarchy.',
                  color: 'clay',
                },
                {
                  title: 'Integrated Payments',
                  description: 'Seamless in-app payment processing eliminates the need to switch between multiple platforms.',
                  color: 'marigold',
                },
                {
                  title: 'Smart Settlements',
                  description: 'Intelligent debt simplification automatically calculates the most efficient payment paths.',
                  color: 'mint',
                },
              ].map((feature, index) => (
                <article
                  key={index}
                  className={`p-8 md:p-10 rounded-3xl bg-[var(--surface-1)] border-2 transition-all duration-300 hover:transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)] ${
                    feature.color === 'clay' ? 'border-[rgba(200,89,58,0.25)] hover:border-[rgba(200,89,58,0.4)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.15)] focus-within:ring-[var(--clay)]' :
                    feature.color === 'marigold' ? 'border-[rgba(232,160,32,0.25)] hover:border-[rgba(232,160,32,0.4)] hover:shadow-[0_20px_60px_rgba(232,160,32,0.12)] focus-within:ring-[var(--marigold)]' :
                    'border-[rgba(61,140,122,0.25)] hover:border-[rgba(61,140,122,0.4)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)] focus-within:ring-[var(--mint)]'
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.65)] leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase 6 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(232,160,32,0.08)] to-transparent rounded-xl flex items-center justify-center">
                  <span className="text-xs text-[rgba(242,239,232,0.5)]">User Flow Diagram</span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent rounded-xl flex items-center justify-center">
                  <span className="text-xs text-[rgba(242,239,232,0.5)]">Wireframe Evolution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--marigold)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--marigold)] font-medium">
                Interface Design
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-16 md:mb-20">
              Redesigned Experience
            </h2>

            {/* Main showcase image */}
            <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[var(--bg)] border-2 border-[rgba(200,89,58,0.2)] p-8 md:p-12 lg:p-16 mb-8 md:mb-12">
              <div className="aspect-[16/10] bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <img
                  src="/src/imports/Screenshot_2026-05-10_215432.png"
                  alt="Splitwise redesigned interface showing unified dashboard and payment flows"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Secondary images grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-10"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(200,89,58,0.06)] to-transparent rounded-xl flex items-center justify-center border border-[rgba(200,89,58,0.15)]">
                    <span className="text-xs text-[rgba(242,239,232,0.5)]">Feature Detail {item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase 7 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">High-Fidelity Mockups</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity & Prototype Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Design System & Prototype
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Crafting the visual language<br />and interaction experience.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Brand Identity Card */}
              <article className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(200,89,58,0.12)] to-[rgba(200,89,58,0.04)] border-2 border-[rgba(200,89,58,0.25)] hover:border-[rgba(200,89,58,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(200,89,58,0.15)] group">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl" role="img" aria-label="Design icon">🎨</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)]">
                    Brand Identity & Visual Design
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.75)]">
                    Created a clean, trustworthy visual system emphasizing transparency and collaborative clarity in financial management.
                  </p>

                  {/* Color Palette */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--clay)] mb-4 font-medium">Color Palette</h4>
                    <div className="flex gap-3 flex-wrap">
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#C8593A] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Primary</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#E8A020] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Accent</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#3D8C7A] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Success</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#F2EFE8] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Background</p>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--clay)] mb-4 font-medium">Typography</h4>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[rgba(200,89,58,0.08)] border border-[rgba(200,89,58,0.15)]">
                        <p className="font-['Plus_Jakarta_Sans'] text-xl font-light text-[rgba(242,239,232,0.9)] mb-1">Plus Jakarta Sans</p>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Display & Headings</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[rgba(200,89,58,0.08)] border border-[rgba(200,89,58,0.15)]">
                        <p className="text-base font-light text-[rgba(242,239,232,0.9)] mb-1">DM Sans</p>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Body & Interface</p>
                      </div>
                    </div>
                  </div>

                  {/* Design Principles */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--clay)] mb-4 font-medium">Design Principles</h4>
                    <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Clarity over complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Collaborative over transactional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Unified over fragmented</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Transparent over hidden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Interactive Prototype Card */}
              <article className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(232,160,32,0.12)] to-[rgba(232,160,32,0.04)] border-2 border-[rgba(232,160,32,0.25)] hover:border-[rgba(232,160,32,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(232,160,32,0.15)] group">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl" role="img" aria-label="Prototype icon">⚡</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)]">
                    Interactive Prototype
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.75)]">
                    High-fidelity prototype demonstrating unified dashboard, integrated payments, and smart settlement flows.
                  </p>

                  {/* Prototype Preview */}
                  <div className="aspect-[9/16] rounded-2xl bg-[rgba(232,160,32,0.1)] border border-[rgba(232,160,32,0.25)] overflow-hidden flex items-center justify-center group-hover:border-[rgba(232,160,32,0.4)] transition-colors duration-300">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(232,160,32,0.2)] flex items-center justify-center border border-[rgba(232,160,32,0.3)]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--marigold)]">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <p className="text-sm text-[rgba(242,239,232,0.6)]">Interactive Demo</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--marigold)] mb-4 font-medium">Key Features</h4>
                    <ul className="space-y-3 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(232,160,32,0.08)] border border-[rgba(232,160,32,0.15)]">
                        <span className="text-[var(--marigold)] flex-shrink-0">01</span>
                        <span>Unified group expense dashboard</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(232,160,32,0.08)] border border-[rgba(232,160,32,0.15)]">
                        <span className="text-[var(--marigold)] flex-shrink-0">02</span>
                        <span>In-app payment integration</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(232,160,32,0.08)] border border-[rgba(232,160,32,0.15)]">
                        <span className="text-[var(--marigold)] flex-shrink-0">03</span>
                        <span>Smart debt simplification system</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(232,160,32,0.08)] border border-[rgba(232,160,32,0.15)]">
                        <span className="text-[var(--marigold)] flex-shrink-0">04</span>
                        <span>Real-time expense tracking & notifications</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-4 px-6 rounded-full bg-[rgba(232,160,32,0.2)] border-2 border-[rgba(232,160,32,0.3)] text-[rgba(242,239,232,0.9)] font-medium hover:bg-[rgba(232,160,32,0.25)] hover:border-[rgba(232,160,32,0.4)] transition-all duration-200 flex items-center justify-center gap-2">
                    <span>View Interactive Prototype</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Reflections Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Reflections
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Key learnings.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                This project reinforced that successful product redesigns come from understanding systematic friction points rather than just visual improvements. The most impactful changes weren't aesthetic — they were structural.
              </p>
              <p>
                By unifying fragmented workflows and improving information architecture, the redesign transformed expense-sharing from a transactional process into a collaborative experience.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal border-l-2 border-[var(--plum)] pl-8">
                Great UX reduces complexity without sacrificing functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36 border-t border-[var(--border-color)]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm md:text-base text-[rgba(242,239,232,0.6)] mb-8 md:mb-10">
              Thanks for reading
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 text-sm md:text-base bg-[var(--text-primary)] text-[var(--bg)] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:bg-[#e8e4dc] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--clay)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] transition-all duration-200"
              aria-label="Return to portfolio homepage"
            >
              ← Back to All Projects
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16" role="contentinfo">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-xs md:text-sm text-[rgba(242,239,232,0.6)] text-center md:text-left">
            © 2024 Kanishka Saxena. Designed with intention.
          </p>
          <nav aria-label="Social media links">
            <div className="flex gap-6 md:gap-8">
              <a
                href="https://www.linkedin.com/in/kanishka-saxena-designer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-[rgba(242,239,232,0.6)] hover:text-[var(--text-primary)] focus:text-[var(--text-primary)] focus:outline-none focus:underline transition-colors duration-200"
                aria-label="Visit Kanishka's LinkedIn profile"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:kanishka@example.com"
                className="text-xs md:text-sm text-[rgba(242,239,232,0.6)] hover:text-[var(--text-primary)] focus:text-[var(--text-primary)] focus:outline-none focus:underline transition-colors duration-200"
                aria-label="Send email to Kanishka"
              >
                Email ↗
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
