import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export default function FintraCaseStudy() {
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
            className="font-['Fraunces'] text-sm md:text-base font-light text-[var(--text-primary)] tracking-tight hover:opacity-70 focus:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--sage)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded-md px-2 py-1 transition-all duration-200"
            aria-label="Back to portfolio home"
          >
            ← Kanishka Saxena
          </Link>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 overflow-hidden"
          aria-labelledby="project-title"
        >
          {/* Ambient Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full blur-[120px] opacity-60 animate-float-slow"
              style={{
                background: 'radial-gradient(circle, rgba(74, 124, 111, 0.25) 0%, transparent 70%)',
                top: '-10%',
                left: '20%',
              }}
            ></div>
            <div
              className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full blur-[100px] opacity-40 animate-float-slow-reverse"
              style={{
                background: 'radial-gradient(circle, rgba(200, 89, 58, 0.15) 0%, transparent 70%)',
                bottom: '20%',
                right: '15%',
              }}
            ></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-fade-in-up-delay-1">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.13em] text-[var(--sage)] font-medium">
                Case Study
              </span>
            </div>

            <h1
              id="project-title"
              className="font-['Fraunces'] text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-[var(--text-primary)] mb-6 md:mb-8 opacity-0 animate-fade-in-up-delay-2"
            >
              Fintra
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.85)] max-w-4xl mb-10 md:mb-12 opacity-0 animate-fade-in-up-delay-3">
              Designing for financial confidence, not just financial literacy.
            </p>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-3xl mb-12 md:mb-16 opacity-0 animate-fade-in-up-delay-4">
              A behavioral finance experience helping young adults navigate stressful money decisions through reflection, emotional support, and behavior-driven design systems.
            </p>

            {/* Project Details Grid */}
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 opacity-0 animate-fade-in-up-delay-5" role="list">
              <div>
                <dt className="block text-[10px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.5)] mb-2 font-medium">
                  Role
                </dt>
                <dd className="text-xs md:text-sm text-[rgba(242,239,232,0.9)] leading-relaxed">
                  Behavioral UX Research<br />
                  Product Strategy<br />
                  UX Design<br />
                  Interaction Design
                </dd>
              </div>
              <div>
                <dt className="block text-[10px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.5)] mb-2 font-medium">
                  Timeline
                </dt>
                <dd className="text-xs md:text-sm text-[rgba(242,239,232,0.9)]">
                  8 Weeks
                </dd>
              </div>
              <div>
                <dt className="block text-[10px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.5)] mb-2 font-medium">
                  Team
                </dt>
                <dd className="text-xs md:text-sm text-[rgba(242,239,232,0.9)]">
                  2 Designers
                </dd>
              </div>
              <div>
                <dt className="block text-[10px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.5)] mb-2 font-medium">
                  Contribution
                </dt>
                <dd className="text-xs md:text-sm text-[rgba(242,239,232,0.9)] leading-relaxed">
                  Led behavioral research synthesis and product direction
                </dd>
              </div>
            </dl>

          </div>
        </section>

        {/* Opening Story Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32 border-t border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto">
            <blockquote className="font-['Fraunces'] text-2xl md:text-3xl lg:text-4xl font-light leading-[1.5] tracking-tight text-[rgba(242,239,232,0.95)] italic mb-12 md:mb-16 border-l-2 border-[var(--plum)] pl-8 md:pl-12">
              "A user returns from a group trip.<br /><br />
              Her SIP is paused.<br />
              She avoids checking her bank balance.<br />
              Small expenses were never tracked.<br /><br />
              She knows what she should do —<br />
              but still delays action."
            </blockquote>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                This project began by exploring a behavioral contradiction:
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)] font-normal">
                Why do financially aware young adults still struggle to make confident financial decisions?
              </p>
              <p>
                Through research, we discovered that the issue wasn't lack of information — it was emotional overwhelm during real decision-making moments.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Problem
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Financial decisions are emotional<br />before they are logical.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
                <p>Most financial platforms optimize:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc marker:text-[var(--sage)]">transactions,</li>
                  <li className="list-disc marker:text-[var(--sage)]">budgeting,</li>
                  <li className="list-disc marker:text-[var(--sage)]">and tracking.</li>
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
                <p>But young adults often experience:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc marker:text-[var(--clay)]">anxiety,</li>
                  <li className="list-disc marker:text-[var(--clay)]">avoidance behavior,</li>
                  <li className="list-disc marker:text-[var(--clay)]">decision fatigue,</li>
                  <li className="list-disc marker:text-[var(--clay)]">and fear of making irreversible mistakes.</li>
                </ul>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.12)] to-[rgba(74,124,111,0.04)] border-2 border-[rgba(74,124,111,0.25)] mb-12 md:mb-16">
              <p className="text-lg md:text-xl font-light leading-relaxed text-[rgba(242,239,232,0.95)]">
                Even financially aware users struggled to take action during stressful moments. <span className="text-[var(--sage)] font-normal">The gap was not educational. It was behavioral.</span>
              </p>
            </div>

            {/* Problem Visual */}
            <div className="rounded-3xl border-2 border-[rgba(200,89,58,0.2)] bg-gradient-to-br from-[rgba(200,89,58,0.05)] to-transparent p-8 md:p-12 overflow-hidden hover:border-[rgba(200,89,58,0.3)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.15)] transition-all duration-500">
              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-[rgba(200,89,58,0.05)] flex items-center justify-center">
                <img
                  src="/src/imports/ChatGPT_Image_May_13__2026__04_30_11_PM.png"
                  alt="Visual representation of emotional financial stress and decision-making challenges faced by young adults"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center text-[rgba(242,239,232,0.5)] mt-6 tracking-wide">Emotional financial context: The anxiety and uncertainty young adults face during money decisions</p>
            </div>
          </div>
        </section>

        {/* Secondary Research Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Secondary Research
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Understanding Financial Behavior<br />Beyond Budgeting
            </h2>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-4xl mb-12 md:mb-16">
              To understand how young adults interact with financial systems, the research explored behavioral finance studies, fintech ecosystems, emotional spending patterns, and financial decision-making behavior. The findings revealed that financial stress is often behavioral and emotional rather than informational.
            </p>

            {/* Literature Review Card */}
            <a
              href="https://drive.google.com/file/d/1_REeRxgo_TCvHlsnXLVi-rtyOW75-1ZV/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-12 md:mb-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.1)] via-[rgba(74,124,111,0.05)] to-transparent border-2 border-[rgba(74,124,111,0.25)] hover:border-[rgba(74,124,111,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(74,124,111,0.2)] group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.95)] mb-4">
                    Literature Review
                  </h3>
                  <p className="text-base md:text-lg text-[rgba(242,239,232,0.7)] leading-relaxed mb-6">
                    20+ academic and behavioral finance studies were analyzed to understand how confidence, emotional bias, financial anxiety, and digital ecosystems shape money behavior among young adults.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-[var(--sage)] font-medium group-hover:gap-3 transition-all duration-200">
                    <span>View Full Literature Review</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(74,124,111,0.15)] border border-[rgba(74,124,111,0.3)] group-hover:bg-[rgba(74,124,111,0.2)] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--sage)]">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Research Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                {
                  title: 'Financial stress is emotional before it is logical.',
                  description: 'Many users understood budgeting concepts but still struggled to act confidently during stressful financial situations. Behavioral biases and fear often overpowered knowledge.',
                  color: 'sage'
                },
                {
                  title: 'Most finance apps optimize efficiency, not reassurance.',
                  description: 'Existing fintech products focused heavily on analytics, transactions, and tracking while ignoring emotional overwhelm, avoidance behavior, and decision anxiety.',
                  color: 'clay'
                },
                {
                  title: 'Gamification improves engagement but not long-term confidence.',
                  description: 'Reward systems and streaks increased short-term activity but rarely helped users build reflective financial habits or sustained confidence.',
                  color: 'plum'
                },
                {
                  title: 'Punishment-driven systems increase disengagement.',
                  description: 'Fear-based notifications and guilt-oriented spending alerts often caused users to avoid financial platforms instead of improving behavior.',
                  color: 'mint'
                },
                {
                  title: 'Financial literacy fails during real decision moments.',
                  description: 'Users struggled most after trips, emergencies, EMI decisions, unexpected expenses, and salary-cycle pressure. Behavioral breakdowns happened during recovery and uncertainty, not while learning concepts.',
                  color: 'sage'
                },
                {
                  title: 'Confidence influences action more than awareness.',
                  description: 'Research based on TAM and TPB behavioral models revealed that perceived confidence and emotional safety influenced financial action more strongly than information availability alone.',
                  color: 'clay'
                },
              ].map((insight, index) => (
                <article
                  key={index}
                  className={`p-8 md:p-10 rounded-3xl bg-[var(--surface-1)] border-2 transition-all duration-300 hover:transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)] ${
                    insight.color === 'sage' ? 'border-[rgba(74,124,111,0.25)] hover:border-[rgba(74,124,111,0.4)] hover:shadow-[0_20px_60px_rgba(74,124,111,0.15)] focus-within:ring-[var(--sage)]' :
                    insight.color === 'clay' ? 'border-[rgba(200,89,58,0.25)] hover:border-[rgba(200,89,58,0.4)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.12)] focus-within:ring-[var(--clay)]' :
                    insight.color === 'plum' ? 'border-[rgba(122,92,122,0.25)] hover:border-[rgba(122,92,122,0.4)] hover:shadow-[0_20px_60px_rgba(122,92,122,0.12)] focus-within:ring-[var(--plum)]' :
                    'border-[rgba(61,140,122,0.25)] hover:border-[rgba(61,140,122,0.4)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)] focus-within:ring-[var(--mint)]'
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-4 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.65)] leading-relaxed">
                    {insight.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Visual Placeholder */}
            <div className="rounded-3xl border-2 border-dashed border-[rgba(74,124,111,0.2)] bg-gradient-to-br from-[rgba(74,124,111,0.03)] to-transparent p-16 md:p-20 flex items-center justify-center">
              <p className="text-sm text-[rgba(242,239,232,0.4)] tracking-wide">[ Secondary Research Visual Placeholder ]</p>
            </div>
          </div>
        </section>

        {/* Digging Into Root Causes Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Root Cause Analysis
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-6 md:mb-8">
              Digging Into Root Causes
            </h2>

            <p className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.7)] mb-16 md:mb-20 max-w-4xl">
              The research revealed that financial confusion was not caused by lack of access alone — but by systems designed without behavioral support.
            </p>

            {/* 5 Why Analysis */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.9)] mb-10 md:mb-12">
                5 Why Analysis
              </h3>

              <div className="relative">
                {/* Connecting line for desktop */}
                <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[rgba(74,124,111,0.3)] via-[rgba(74,124,111,0.5)] to-[rgba(74,124,111,0.3)]" aria-hidden="true"></div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-4 relative">
                  {[
                    {
                      num: '01',
                      question: 'Why do young adults struggle to make confident financial decisions?',
                      answer: 'Financial choices feel emotionally risky, stressful, and irreversible.',
                    },
                    {
                      num: '02',
                      question: 'Why do decisions feel stressful?',
                      answer: 'Users do not understand consequences clearly during moments of decision-making.',
                    },
                    {
                      num: '03',
                      question: 'Why is understanding missing during decision moments?',
                      answer: 'Financial systems present options without context, behavioral guidance, or emotional reassurance.',
                    },
                    {
                      num: '04',
                      question: 'Why do financial systems lack behavioral support?',
                      answer: 'Most products optimize transaction speed and execution rather than confidence-building.',
                    },
                    {
                      num: '05',
                      question: 'Why is confidence not prioritized?',
                      answer: 'Financial ecosystems are designed for rational users while ignoring emotional behavior, fear, and cognitive overload.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg)] border-2 border-[rgba(74,124,111,0.2)] hover:border-[rgba(74,124,111,0.35)] transition-all duration-300 h-full">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(74,124,111,0.15)] border border-[rgba(74,124,111,0.3)] mb-6">
                          <span className="text-sm text-[var(--sage)] font-medium">{item.num}</span>
                        </div>
                        <h4 className="text-sm md:text-base font-light text-[rgba(242,239,232,0.95)] mb-4 leading-snug">
                          {item.question}
                        </h4>
                        <p className="text-sm text-[rgba(242,239,232,0.65)] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>

                      {/* Arrow connector for desktop */}
                      {index < 4 && (
                        <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--sage)]">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Root Cause Card */}
              <div className="mt-10 md:mt-12 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.15)] via-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.35)] shadow-[0_20px_60px_rgba(74,124,111,0.2)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[var(--sage)]" aria-hidden="true"></div>
                  <span className="text-xs uppercase tracking-wide text-[var(--sage)] font-medium">Root Cause</span>
                </div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-[rgba(242,239,232,0.95)]">
                  Financial confusion persists because financial systems are designed around execution and access — not human behavior, emotional reassurance, or decision confidence.
                </p>
              </div>
            </div>

            {/* 5W + 1H Framework */}
            <div>
              <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.9)] mb-10 md:mb-12">
                Defining the Behavioral Design Opportunity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { label: 'What', question: 'What is the problem?', answer: 'Young adults struggle to make timely and confident financial decisions despite access to tools and information.', color: 'sage' },
                  { label: 'Why', question: 'Why does it happen?', answer: 'Financial systems fail to support users emotionally during real decision-making moments.', color: 'clay' },
                  { label: 'Who', question: 'Who experiences this?', answer: 'First-time earners, students, and early-career professionals navigating financial independence.', color: 'plum' },
                  { label: 'When', question: 'When does it happen?', answer: 'During high-pressure financial situations such as first salaries, EMIs, unexpected expenses, investments, and monthly budgeting cycles.', color: 'mint' },
                  { label: 'Where', question: 'Where does it happen?', answer: 'Across UPI apps, banking platforms, investment apps, and real-world spending environments.', color: 'sage' },
                  { label: 'How', question: 'How might we approach it?', answer: 'By designing behavioral support systems that reduce anxiety, increase confidence, and guide users through financial action progressively.', color: 'clay' },
                ].map((item, index) => (
                  <article
                    key={index}
                    className={`p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                      item.color === 'sage' ? 'bg-[rgba(74,124,111,0.05)] border-[rgba(74,124,111,0.2)] hover:border-[rgba(74,124,111,0.35)] hover:shadow-[0_20px_40px_rgba(74,124,111,0.15)]' :
                      item.color === 'clay' ? 'bg-[rgba(200,89,58,0.05)] border-[rgba(200,89,58,0.2)] hover:border-[rgba(200,89,58,0.35)] hover:shadow-[0_20px_40px_rgba(200,89,58,0.12)]' :
                      item.color === 'plum' ? 'bg-[rgba(122,92,122,0.05)] border-[rgba(122,92,122,0.2)] hover:border-[rgba(122,92,122,0.35)] hover:shadow-[0_20px_40px_rgba(122,92,122,0.12)]' :
                      'bg-[rgba(61,140,122,0.05)] border-[rgba(61,140,122,0.2)] hover:border-[rgba(61,140,122,0.35)] hover:shadow-[0_20px_40px_rgba(61,140,122,0.12)]'
                    }`}
                  >
                    <div className={`text-xs uppercase tracking-wide mb-4 font-medium ${
                      item.color === 'sage' ? 'text-[var(--sage)]' :
                      item.color === 'clay' ? 'text-[var(--clay)]' :
                      item.color === 'plum' ? 'text-[var(--plum)]' :
                      'text-[var(--mint)]'
                    }`}>
                      {item.label}
                    </div>
                    <h4 className="text-base md:text-lg font-light text-[rgba(242,239,232,0.95)] mb-4">
                      {item.question}
                    </h4>
                    <p className="text-sm text-[rgba(242,239,232,0.7)] leading-relaxed">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Benchmarking Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Competitive Analysis
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-6 md:mb-8">
              Understanding What Already Exists<br />in the Market
            </h2>

            <p className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.7)] mb-12 md:mb-16 max-w-4xl">
              To identify gaps in behavioral financial support, we analyzed existing fintech products across budgeting, gamification, tracking, and financial guidance ecosystems.
            </p>

            {/* Competitive Benchmarking Table */}
            <div className="overflow-x-auto mb-12 md:mb-16">
              <div className="inline-block min-w-full align-middle">
                <div className="rounded-3xl border-2 border-[rgba(122,92,122,0.2)] bg-gradient-to-br from-[rgba(122,92,122,0.05)] to-transparent overflow-hidden">
                  <table className="min-w-full divide-y divide-[rgba(242,239,232,0.1)]">
                    <thead>
                      <tr className="bg-[rgba(122,92,122,0.08)]">
                        <th scope="col" className="sticky left-0 z-10 bg-[rgba(122,92,122,0.08)] px-6 py-4 text-left text-xs font-medium text-[var(--plum)] uppercase tracking-wide">
                          Platform
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Budget Tracking
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Gamification
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Behavioral Nudges
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Emotional Support
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Reflection Systems
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Decision Guidance
                        </th>
                        <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-[rgba(242,239,232,0.7)] uppercase tracking-wide">
                          Recovery Support
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(242,239,232,0.1)]">
                      {[
                        { name: 'Axio', features: [true, false, false, false, false, false, false] },
                        { name: 'Fortune City', features: [true, true, false, false, false, false, false] },
                        { name: 'Money Lover', features: [true, false, false, false, false, false, false] },
                        { name: 'Zogo', features: [false, true, true, false, false, false, false] },
                        { name: 'Splitwise', features: [true, false, false, false, false, false, false] },
                        { name: 'YNAB', features: [true, false, true, false, false, true, false] },
                      ].map((platform, index) => (
                        <tr
                          key={index}
                          className="transition-colors duration-200 hover:bg-[rgba(242,239,232,0.02)]"
                        >
                          <td className="sticky left-0 z-10 px-6 py-4 whitespace-nowrap text-sm font-light bg-[var(--bg)] text-[rgba(242,239,232,0.9)]">
                            {platform.name}
                          </td>
                          {platform.features.map((hasFeature, fIndex) => (
                            <td key={fIndex} className="px-6 py-4 whitespace-nowrap text-center">
                              {hasFeature ? (
                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(74,124,111,0.2)] border border-[rgba(74,124,111,0.3)]">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sage)]" />
                                  </svg>
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-5 h-5">
                                  <span className="text-[rgba(242,239,232,0.2)]">—</span>
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Market Insight Block */}
            <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.15)] via-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.35)] shadow-[0_20px_60px_rgba(74,124,111,0.15)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[var(--sage)]" aria-hidden="true"></div>
                <span className="text-xs uppercase tracking-wide text-[var(--sage)] font-medium">Market Insight</span>
              </div>
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.85)]">
                <p>
                  The market revealed a clear pattern: most financial products optimized tracking, analytics, and execution — but very few supported users emotionally during moments of financial uncertainty.
                </p>
                <p>
                  Products helped users manage money, but rarely helped users build confidence while making decisions.
                </p>
                <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal">
                  This insight became the foundation for exploring behavioral financial guidance systems.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Primary Research Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--sage)] font-medium">
                Primary Research
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Understanding financial behavior<br />through user research.
            </h2>

            {/* Research Methods */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
              {[
                { label: 'Survey', value: '50 participants', color: 'sage' },
                { label: 'Interviews', value: 'Semi-structured', color: 'clay' },
                { label: 'Inquiry', value: 'Contextual', color: 'plum' },
                { label: 'Analysis', value: 'Competitive', color: 'mint' },
              ].map((method, index) => (
                <article
                  key={index}
                  className={`p-6 md:p-8 rounded-2xl bg-[var(--surface-1)] border-2 transition-all duration-300 ${
                    method.color === 'sage' ? 'border-[rgba(74,124,111,0.25)]' :
                    method.color === 'clay' ? 'border-[rgba(200,89,58,0.25)]' :
                    method.color === 'plum' ? 'border-[rgba(122,92,122,0.25)]' :
                    'border-[rgba(61,140,122,0.25)]'
                  }`}
                >
                  <dt className={`text-[10px] uppercase tracking-[0.12em] mb-2 font-medium ${
                    method.color === 'sage' ? 'text-[var(--sage)]' :
                    method.color === 'clay' ? 'text-[var(--clay)]' :
                    method.color === 'plum' ? 'text-[var(--plum)]' :
                    'text-[var(--mint)]'
                  }`}>
                    {method.label}
                  </dt>
                  <dd className="text-sm md:text-base text-[rgba(242,239,232,0.9)] font-light">
                    {method.value}
                  </dd>
                </article>
              ))}
            </div>

            {/* Key Findings */}
            <div>
              <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.9)] mb-8 md:mb-10">
                Key Behavioral Findings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { stat: '47%', insight: 'relied on friends or family for financial advice', color: 'sage' },
                  { stat: '68%', insight: 'avoided checking finances after overspending', color: 'clay' },
                  { stat: '72%', insight: 'felt anxious despite understanding budgeting basics', color: 'plum' },
                  { stat: '61%', insight: 'associated finance apps with stress', color: 'mint' },
                ].map((finding, index) => (
                  <article
                    key={index}
                    className={`p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                      finding.color === 'sage' ? 'bg-[rgba(74,124,111,0.06)] border-[rgba(74,124,111,0.2)] hover:shadow-[0_20px_60px_rgba(74,124,111,0.15)]' :
                      finding.color === 'clay' ? 'bg-[rgba(200,89,58,0.06)] border-[rgba(200,89,58,0.2)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.12)]' :
                      finding.color === 'plum' ? 'bg-[rgba(122,92,122,0.06)] border-[rgba(122,92,122,0.2)] hover:shadow-[0_20px_60px_rgba(122,92,122,0.12)]' :
                      'bg-[rgba(61,140,122,0.06)] border-[rgba(61,140,122,0.2)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)]'
                    }`}
                  >
                    <div className={`font-['Fraunces'] text-4xl md:text-5xl font-light mb-4 ${
                      finding.color === 'sage' ? 'text-[#7DC4B4]' :
                      finding.color === 'clay' ? 'text-[#E8A87C]' :
                      finding.color === 'plum' ? 'text-[#B497B4]' :
                      'text-[#7DC4B4]'
                    }`}>
                      {finding.stat}
                    </div>
                    <p className="text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                      {finding.insight}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Inquiry Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Contextual Inquiry
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Observing Real Financial Decisions
            </h2>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-4xl mb-12 md:mb-16">
              We observed users in real financial decision-making contexts to understand how emotional factors influenced their choices beyond what they reported in surveys.
            </p>

            <div className="space-y-8 md:space-y-10">
              {/* Scenario 1 */}
              <article className="p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.2)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(74,124,111,0.2)] flex items-center justify-center border border-[rgba(74,124,111,0.3)]">
                    <span className="text-sm text-[var(--sage)] font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.95)] mb-4">
                      The Shopping Decision
                    </h3>
                    <p className="text-base md:text-lg text-[rgba(242,239,232,0.7)] leading-relaxed mb-6">
                      A participant entered a store intending to buy a gift under ₹200 but left without purchasing anything.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-[var(--sage)] mb-2 font-medium">Observation</h4>
                        <p className="text-sm md:text-base text-[rgba(242,239,232,0.65)] leading-relaxed">
                          The decision wasn't about affordability alone. It involved emotional justification, budget anxiety, perceived value, and needs vs wants conflict.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[rgba(74,124,111,0.08)] border border-[rgba(74,124,111,0.15)]">
                        <h4 className="text-sm uppercase tracking-wide text-[var(--sage)] mb-2 font-medium">Key Insight</h4>
                        <p className="text-base text-[rgba(242,239,232,0.85)]">
                          Financial decisions are emotionally negotiated — not purely logical.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Scenario 2 */}
              <article className="p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent border-2 border-[rgba(200,89,58,0.2)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(200,89,58,0.2)] flex items-center justify-center border border-[rgba(200,89,58,0.3)]">
                    <span className="text-sm text-[var(--clay)] font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.95)] mb-4">
                      Post-Trip Expense Recovery
                    </h3>
                    <p className="text-base md:text-lg text-[rgba(242,239,232,0.7)] leading-relaxed mb-6">
                      Users returning from a group trip consistently showed avoidance patterns: paused SIPs, forgot expenses, avoided checking balances, and relied on Splitwise without closure.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-[var(--clay)] mb-2 font-medium">Critical Discovery</h4>
                        <p className="text-sm md:text-base text-[rgba(242,239,232,0.65)] leading-relaxed">
                          Financial literacy breaks during emotionally overloaded recovery moments. This became a major turning point for the project direction.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[rgba(200,89,58,0.08)] border border-[rgba(200,89,58,0.15)]">
                        <h4 className="text-sm uppercase tracking-wide text-[var(--clay)] mb-2 font-medium">Design Implication</h4>
                        <p className="text-base text-[rgba(242,239,232,0.85)]">
                          Users need behavioral support during recovery moments, not just during planning phases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Persona Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Primary Persona
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Designing for emotionally aware<br />first-time earners.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Persona Profile */}
              <div className="lg:col-span-1">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.12)] to-transparent border-2 border-[rgba(122,92,122,0.25)]">
                  <div className="relative aspect-square rounded-2xl bg-[rgba(122,92,122,0.15)] mb-6 overflow-hidden border-2 border-[rgba(122,92,122,0.3)] group hover:border-[rgba(122,92,122,0.4)] hover:shadow-[0_20px_40px_rgba(122,92,122,0.2)] transition-all duration-300">
                    <img
                      src="/src/imports/image-2.png"
                      alt="Aisha - Primary persona, a 22-year-old engineering student and early career professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-['Fraunces'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-2">
                    Aisha
                  </h3>
                  <p className="text-sm text-[rgba(242,239,232,0.6)] mb-4">
                    22 · Engineering Student + Early Career Professional
                  </p>
                  <p className="text-sm text-[var(--plum)] font-medium">
                    Financially aware but emotionally uncertain.
                  </p>
                </div>
              </div>

              {/* Persona Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="p-8 rounded-3xl bg-[var(--bg)] border border-[var(--border-color)]">
                  <h4 className="text-xs uppercase tracking-wide text-[var(--sage)] mb-4 font-medium">Background</h4>
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.8)]">
                    Aisha recently started earning and is proactive about saving and investing. Despite understanding financial basics, she frequently experiences anxiety while making financial decisions and often delays action out of fear of making mistakes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border-color)]">
                    <h4 className="text-xs uppercase tracking-wide text-[var(--sage)] mb-4 font-medium">Goals</h4>
                    <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Become financially independent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Build savings confidently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Learn practical money management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Feel more in control of spending decisions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border-color)]">
                    <h4 className="text-xs uppercase tracking-wide text-[var(--clay)] mb-4 font-medium">Pain Points</h4>
                    <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Avoids checking finances after overspending</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Feels overwhelmed by complex financial tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Worries about making irreversible mistakes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--clay)] mt-1">•</span>
                        <span>Struggles to maintain rigid budgeting habits</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Quote */}
            <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.12)] to-transparent border-2 border-[rgba(122,92,122,0.25)]">
              <blockquote className="font-['Fraunces'] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.95)] italic">
                "I don't need another app telling me I spent too much. I need help figuring out what to do next."
              </blockquote>
              <cite className="block mt-6 text-sm text-[var(--plum)] not-italic font-medium">— Aisha, Research Participant</cite>
            </div>
          </div>
        </section>

        {/* Empathy Mapping Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Empathy Mapping
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Understanding emotional<br />decision-making patterns.
            </h2>

            {/* 2x2 Empathy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--sage)]" aria-hidden="true">💭</span>
                  <span>Thinks</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li className="italic">"What if I make the wrong financial decision?"</li>
                  <li className="italic">"I should be managing money better."</li>
                  <li className="italic">"I understand finance, but I still feel confused."</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(200,89,58,0.08)] to-transparent border-2 border-[rgba(200,89,58,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--clay)]" aria-hidden="true">❤️</span>
                  <span>Feels</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li>Anxious after spending</li>
                  <li>Guilty about inconsistency</li>
                  <li>Overwhelmed by financial planning</li>
                  <li>Relieved when guidance feels simple</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent border-2 border-[rgba(122,92,122,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--plum)]" aria-hidden="true">💬</span>
                  <span>Says</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li className="italic">"I avoid checking my account when stressed."</li>
                  <li className="italic">"Most finance apps feel intimidating."</li>
                  <li className="italic">"I need clarity more than information."</li>
                </ul>
              </article>

              <article className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent border-2 border-[rgba(61,140,122,0.2)]">
                <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-6 flex items-center gap-3">
                  <span className="text-[var(--mint)]" aria-hidden="true">⚡</span>
                  <span>Does</span>
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-[rgba(242,239,232,0.75)] leading-relaxed">
                  <li>Delays financial actions</li>
                  <li>Tracks spending inconsistently</li>
                  <li>Relies on peer advice</li>
                  <li>Revisits finances only during urgent situations</li>
                </ul>
              </article>
            </div>

            {/* Empathy Map Visual */}
            <div className="mt-12 md:mt-16 rounded-3xl border-2 border-[rgba(61,140,122,0.25)] bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent p-8 md:p-12 overflow-hidden hover:border-[rgba(61,140,122,0.35)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.15)] transition-all duration-500">
              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-[rgba(61,140,122,0.05)] flex items-center justify-center">
                <img
                  src="/src/imports/image-3.png"
                  alt="Empathy map showing Aisha's thoughts, feelings, actions, and motivations during financial decisions"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-center text-[rgba(242,239,232,0.5)] mt-6 tracking-wide">Comprehensive empathy mapping revealing emotional patterns and behavioral triggers</p>
            </div>
          </div>
        </section>

        {/* Transition to Solution */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
              <div className="h-px w-12 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-xs uppercase tracking-wide text-[var(--sage)] font-medium">Insights to Solution</span>
              <div className="h-px w-12 bg-[var(--sage)]" aria-hidden="true"></div>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-10 md:mb-12">
              Designing behavioral support<br />around financial decisions.
            </h2>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                The research revealed that users didn't fail because they lacked financial information.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)]">
                They struggled during emotionally vulnerable decision-making moments:
              </p>
              <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-[var(--sage)]">
                <li>after overspending,</li>
                <li>during uncertainty,</li>
                <li>and while trying to regain financial control.</li>
              </ul>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal pt-6">
                This became the foundation for Fintra's behavioral finance system.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--sage)] font-medium">
                Solution
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Building emotional support<br />into the decision-making flow.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-16 md:mb-20">
              <p>
                Rather than creating another budgeting tool, we designed Fintra as a behavioral support system — one that recognizes financial stress and provides emotional reassurance at critical decision points.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)] font-normal">
                The core design principle: <span className="text-[var(--sage)]">Reduce cognitive load during stressful moments, and build confidence through reflection rather than restriction.</span>
              </p>
            </div>

            {/* Behavioral System Flow */}
            <div className="mb-16 md:mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.1)] to-transparent border-2 border-[rgba(74,124,111,0.25)]">
              <h3 className="text-xl md:text-2xl font-light text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
                Behavioral Support System Flow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                {[
                  { step: '01', title: 'Decision Pop-Up', desc: 'Pause before spending' },
                  { step: '02', title: 'Reflex Training', desc: 'Identify reactive behavior' },
                  { step: '03', title: 'Pattern Recognition', desc: 'Detect emotional trends' },
                  { step: '04', title: 'Contextual Guidance', desc: 'Support during stress' },
                  { step: '05', title: 'Weekly Reflection', desc: 'Review and improve' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="p-6 rounded-2xl bg-[rgba(74,124,111,0.08)] border border-[rgba(74,124,111,0.2)]">
                      <div className="text-xs text-[var(--sage)] font-medium mb-3">{item.step}</div>
                      <div className="text-sm md:text-base text-[rgba(242,239,232,0.9)] font-light mb-2">
                        {item.title}
                      </div>
                      <div className="text-xs text-[rgba(242,239,232,0.6)]">
                        {item.desc}
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[var(--sage)]" aria-hidden="true">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Core Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Decision Interception',
                  description: 'Short reflective prompts before purchases to classify spending as Need, Want, or Impulse.',
                  goal: 'Reduce impulsive spending',
                  color: 'sage',
                  icon: '🛑',
                },
                {
                  title: 'Behavioral Pattern Recognition',
                  description: 'Detects emotional spending patterns and identifies triggers across time and context.',
                  goal: 'Increase self-awareness',
                  color: 'clay',
                  icon: '📊',
                },
                {
                  title: 'Gamified Financial Learning',
                  description: 'Story-based training experiences that make financial concepts feel accessible and engaging.',
                  goal: 'Reduce intimidation around money',
                  color: 'plum',
                  icon: '🎮',
                },
                {
                  title: 'Weekly Reflection Reviews',
                  description: 'Users reflect on patterns instead of only seeing numbers, building confidence gradually.',
                  goal: 'Build long-term confidence',
                  color: 'mint',
                  icon: '📝',
                },
                {
                  title: 'Personalized Guidance',
                  description: 'Context-aware financial suggestions that appear during high-stress decision moments.',
                  goal: 'Support action during uncertainty',
                  color: 'sage',
                  icon: '💡',
                },
                {
                  title: 'Recovery Support',
                  description: 'Specialized tools for post-overspending recovery, helping users regain financial control without guilt.',
                  goal: 'Transform avoidance into action',
                  color: 'clay',
                  icon: '🔄',
                },
              ].map((feature, index) => (
                <article
                  key={index}
                  className={`p-8 md:p-10 rounded-3xl bg-[var(--surface-1)] border-2 transition-all duration-300 hover:transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)] ${
                    feature.color === 'sage' ? 'border-[rgba(74,124,111,0.25)] hover:border-[rgba(74,124,111,0.4)] hover:shadow-[0_20px_60px_rgba(74,124,111,0.15)] focus-within:ring-[var(--sage)]' :
                    feature.color === 'clay' ? 'border-[rgba(200,89,58,0.25)] hover:border-[rgba(200,89,58,0.4)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.12)] focus-within:ring-[var(--clay)]' :
                    feature.color === 'plum' ? 'border-[rgba(122,92,122,0.25)] hover:border-[rgba(122,92,122,0.4)] hover:shadow-[0_20px_60px_rgba(122,92,122,0.12)] focus-within:ring-[var(--plum)]' :
                    'border-[rgba(61,140,122,0.25)] hover:border-[rgba(61,140,122,0.4)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)] focus-within:ring-[var(--mint)]'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl flex-shrink-0" role="img" aria-hidden="true">{feature.icon}</span>
                    <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.65)] leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="pt-4 border-t border-[rgba(242,239,232,0.1)]">
                    <div className={`text-xs uppercase tracking-wide mb-1 font-medium ${
                      feature.color === 'sage' ? 'text-[var(--sage)]' :
                      feature.color === 'clay' ? 'text-[var(--clay)]' :
                      feature.color === 'plum' ? 'text-[var(--plum)]' :
                      'text-[var(--mint)]'
                    }`}>
                      Behavioral Goal
                    </div>
                    <div className="text-sm text-[rgba(242,239,232,0.75)]">
                      {feature.goal}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Impact & Outcomes
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              From Passive Tracking to<br />Active Financial Confidence
            </h2>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
              <p>
                Fintra reframed financial literacy as behavioral capability, emotional confidence, and decision support.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)]">
                Instead of asking users to become financial experts, the system helped users pause, reflect, learn, and act with more confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { metric: 'Reduced', value: 'Financial Anxiety', desc: 'Through emotional check-ins and supportive guidance' },
                { metric: 'Improved', value: 'Budgeting Consistency', desc: 'Via behavioral pattern recognition' },
                { metric: 'Increased', value: 'Decision Confidence', desc: 'With contextual intervention systems' },
                { metric: 'Better', value: 'Habit Formation', desc: 'Through gamification and reflection' },
                { metric: 'Reduced', value: 'Avoidance Behavior', desc: 'By normalizing financial stress' },
                { metric: 'Enhanced', value: 'Recovery Support', desc: 'Post-overspending guidance tools' },
              ].map((outcome, index) => (
                <article
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent border border-[rgba(61,140,122,0.2)] hover:border-[rgba(61,140,122,0.3)] transition-all duration-300"
                >
                  <div className="text-xs uppercase tracking-wide text-[var(--mint)] mb-2 font-medium">
                    {outcome.metric}
                  </div>
                  <div className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-3">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-[rgba(242,239,232,0.6)]">
                    {outcome.desc}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Design Evolution Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Design Process
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Evolving the Behavioral Experience
            </h2>

            <p className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.7)] mb-12 md:mb-16 max-w-4xl">
              The product evolved through iterative concept exploration, wireframing, and usability testing focused on reducing cognitive overload and improving behavioral clarity.
            </p>

            {/* Early Concept Exploration */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-5 md:mb-6">
                Exploring Behavioral Intervention Concepts
              </h3>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
                <p>
                  Early exploration focused on interrupting impulsive financial behavior, reducing emotional spending, and creating reflective decision moments.
                </p>
                <p>
                  Multiple intervention concepts were explored: category spending limits, app timer locks, AI-guided nudges, notification-based reminders, and decision-interception flows before payments.
                </p>
                <p className="text-lg text-[rgba(242,239,232,0.85)]">
                  The goal was not to restrict users — but to introduce friction intentionally during emotionally reactive spending moments.
                </p>
              </div>

              {/* Sketch Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="group relative rounded-3xl border-2 border-dashed border-[rgba(200,89,58,0.25)] bg-gradient-to-br from-[rgba(200,89,58,0.05)] via-[rgba(200,89,58,0.02)] to-transparent p-12 md:p-16 overflow-hidden hover:border-[rgba(200,89,58,0.35)] transition-all duration-300">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[rgba(200,89,58,0.15)] border border-[rgba(200,89,58,0.3)]">
                    <span className="text-xs text-[var(--clay)]">Early Exploration</span>
                  </div>
                  <div className="aspect-[3/4] flex items-center justify-center">
                    <img
                      src="/src/imports/image-1.png"
                      alt="Early task flow sketches showing behavioral intervention concepts"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-center text-[rgba(242,239,232,0.5)] mt-6 tracking-wide">[ Early Task Flow Sketches ]</p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {[
                    '[ Behavioral Intervention Concepts ]',
                    '[ AI Guidance Exploration ]',
                    '[ Smart Friction Concepts ]',
                  ].map((label, index) => (
                    <div
                      key={index}
                      className="relative rounded-2xl border-2 border-dashed border-[rgba(200,89,58,0.2)] bg-gradient-to-br from-[rgba(200,89,58,0.03)] to-transparent p-10 md:p-12 hover:border-[rgba(200,89,58,0.3)] transition-all duration-300"
                    >
                      <div className="aspect-[16/9] flex items-center justify-center">
                        <p className="text-sm text-[rgba(242,239,232,0.4)] tracking-wide">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* First Wireframe Flow */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-5 md:mb-6">
                Translating Behavioral Ideas into Product Flows
              </h3>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
                <p>
                  The first wireframe flow focused on helping users identify spending behavior, creating small financial commitments, and transforming passive tracking into action-oriented financial reflection.
                </p>
                <p>
                  The flow introduced weekly insights, spending summaries, behavioral suggestions, category limits, app timer locks, and contextual AI guidance.
                </p>
                <p className="text-lg text-[rgba(242,239,232,0.95)] font-normal border-l-4 border-[var(--clay)] pl-8 py-2">
                  The product direction shifted from "tracking expenses" to "guiding behavior during decision-making moments."
                </p>
              </div>

              {/* Wireframe Placeholders */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  'Initial home dashboard',
                  'Commitment flow',
                  'Category limit setup',
                  'AI guidance flow',
                  'App timer flow',
                  'Decision-interception flow',
                ].map((label, index) => (
                  <div
                    key={index}
                    className="relative group rounded-2xl border-2 border-dashed border-[rgba(74,124,111,0.2)] bg-gradient-to-br from-[rgba(74,124,111,0.04)] to-transparent p-8 md:p-10 hover:border-[rgba(74,124,111,0.35)] hover:shadow-[0_20px_40px_rgba(74,124,111,0.1)] transition-all duration-300"
                  >
                    <div className="aspect-[9/16] flex items-center justify-center mb-4 rounded-xl bg-[rgba(74,124,111,0.05)] border border-[rgba(74,124,111,0.15)]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[rgba(74,124,111,0.3)]">
                        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M9 6h6M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-xs text-center text-[rgba(242,239,232,0.5)] leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Usability Testing */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-5 md:mb-6">
                Testing the Behavioral Experience
              </h3>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
                <p>
                  To validate whether the behavioral intervention system felt understandable and usable, the first wireframe prototype was tested with 3 users using the Think Aloud Method.
                </p>
                <p>
                  The sessions focused on comprehension, cognitive load, navigation clarity, behavioral understanding, and emotional response to intervention systems.
                </p>
                <p className="text-lg text-[rgba(242,239,232,0.85)]">
                  The testing revealed that users understood the potential of the system — but struggled with terminology, hierarchy, and interaction clarity.
                </p>
              </div>

              {/* Testing Observations Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  {
                    observation: 'Users misunderstood terms like "commitment", "limit", and "lock"',
                    issue: 'Behavioral terminology increased cognitive load',
                    response: 'UX writing was simplified using clearer and more action-oriented language',
                  },
                  {
                    observation: 'Users struggled to understand the decision pop-up and timer system',
                    issue: 'Behavioral intervention lacked affordance clarity',
                    response: 'Decision prompts were redesigned with clearer visual hierarchy and contextual explanations',
                  },
                  {
                    observation: 'Some users confused rewards with savings features',
                    issue: 'Feature hierarchy and system purpose felt unclear',
                    response: 'Navigation structure and information grouping were simplified',
                  },
                  {
                    observation: 'Users found transaction sections visually cluttered',
                    issue: 'High cognitive load reduced readability',
                    response: 'Spacing, typography hierarchy, and interaction prioritization were refined',
                  },
                  {
                    observation: 'Users did not recognize the chatbot trigger',
                    issue: 'AI guidance entry point lacked visibility',
                    response: 'The chatbot interaction was redesigned with stronger affordance and explicit behavioral guidance cues',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent border-2 border-[rgba(122,92,122,0.2)] hover:border-[rgba(122,92,122,0.35)] transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-xs uppercase tracking-wide text-[var(--plum)] mb-3 font-medium">Observation</h4>
                      <p className="text-sm text-[rgba(242,239,232,0.75)] mb-6 leading-relaxed">{item.observation}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wide text-[var(--clay)] mb-3 font-medium">Issue</h4>
                      <p className="text-sm text-[rgba(242,239,232,0.75)] mb-6 leading-relaxed">{item.issue}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wide text-[var(--sage)] mb-3 font-medium">Design Response</h4>
                      <p className="text-sm text-[rgba(242,239,232,0.75)] leading-relaxed">{item.response}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testing Quote */}
              <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.12)] to-transparent border-2 border-[rgba(122,92,122,0.25)] mb-12 md:mb-16">
                <blockquote className="font-['Fraunces'] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.95)] italic">
                  "The system felt useful once I understood it — but initially it felt overwhelming."
                </blockquote>
                <cite className="block mt-6 text-sm text-[var(--plum)] not-italic font-medium">— Usability Testing Participant</cite>
              </div>

              {/* Testing Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  '[ Think Aloud Testing Sessions ]',
                  '[ Usability Observation Notes ]',
                  '[ Early Prototype Screens ]',
                  '[ Improved Screen Iterations ]',
                ].map((label, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl border-2 border-dashed border-[rgba(122,92,122,0.2)] bg-gradient-to-br from-[rgba(122,92,122,0.04)] to-transparent p-12 md:p-16 hover:border-[rgba(122,92,122,0.3)] transition-all duration-300"
                  >
                    <div className="aspect-[16/10] flex items-center justify-center">
                      <p className="text-sm text-[rgba(242,239,232,0.4)] tracking-wide">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Improved Design Iteration */}
            <div className="mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-5 md:mb-6">
                Refining the Product Through Feedback
              </h3>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
                <p>
                  The revised interface focused on reducing ambiguity, simplifying decision-making, improving behavioral clarity, and making interventions feel supportive instead of restrictive.
                </p>
                <p>
                  Key improvements included clearer financial summaries, simplified action plans, improved feedback visibility, more intuitive category-limit setup, better chatbot discoverability, and emotionally softer intervention language.
                </p>
                <p className="text-lg text-[rgba(242,239,232,0.95)] font-normal border-l-4 border-[var(--sage)] pl-8 py-2">
                  The redesign shifted the experience from "behavior correction" to "behavior support."
                </p>
              </div>

              {/* Before/After Comparison */}
              <div className="rounded-3xl border-2 border-[rgba(74,124,111,0.25)] bg-gradient-to-br from-[rgba(74,124,111,0.05)] to-transparent p-8 md:p-12 mb-12 md:mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1 rounded-full bg-[rgba(200,89,58,0.15)] border border-[rgba(200,89,58,0.3)]">
                        <span className="text-xs text-[var(--clay)] font-medium">Before</span>
                      </div>
                      <span className="text-sm text-[rgba(242,239,232,0.5)]">Early Wireframes</span>
                    </div>
                    <div className="aspect-[9/16] rounded-2xl border-2 border-dashed border-[rgba(200,89,58,0.2)] bg-[rgba(200,89,58,0.03)] flex items-center justify-center">
                      <p className="text-sm text-[rgba(242,239,232,0.4)]">[ Early Wireframe Screens ]</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1 rounded-full bg-[rgba(74,124,111,0.15)] border border-[rgba(74,124,111,0.3)]">
                        <span className="text-xs text-[var(--sage)] font-medium">After</span>
                      </div>
                      <span className="text-sm text-[rgba(242,239,232,0.5)]">Improved Interface</span>
                    </div>
                    <div className="aspect-[9/16] rounded-2xl border-2 border-dashed border-[rgba(74,124,111,0.2)] bg-[rgba(74,124,111,0.03)] flex items-center justify-center">
                      <p className="text-sm text-[rgba(242,239,232,0.4)]">[ Improved Refined Interface ]</p>
                    </div>

                    {/* Annotations */}
                    <div className="mt-6 space-y-2 text-xs text-[rgba(242,239,232,0.6)]">
                      {[
                        '✓ Simplified UX writing',
                        '✓ Reduced clutter',
                        '✓ Improved hierarchy',
                        '✓ Stronger affordance',
                        '✓ Clearer feedback',
                        '✓ Reduced cognitive load',
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-[var(--sage)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Behavioral Guidance Flow */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-5 md:mb-6">
                Final Behavioral Guidance Flow
              </h3>

              <p className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.7)] mb-10 md:mb-12 max-w-4xl">
                The final system transformed passive financial tracking into an active behavioral feedback loop.
              </p>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
                <p>
                  The final flow introduced reflective weekly summaries, behavioral pattern recognition, personalized corrective suggestions, commitment-based interventions, and gradual financial habit reinforcement.
                </p>
                <p className="text-lg text-[rgba(242,239,232,0.95)] font-normal">
                  Instead of reacting only after overspending, the system proactively guided users toward awareness, reflection, and behavior change.
                </p>
              </div>

              {/* Flow Diagram */}
              <div className="rounded-3xl border-2 border-[rgba(74,124,111,0.25)] bg-gradient-to-br from-[rgba(74,124,111,0.08)] via-[rgba(74,124,111,0.04)] to-transparent p-8 md:p-12 overflow-hidden">
                <div className="aspect-[16/9] flex items-center justify-center rounded-2xl bg-[rgba(74,124,111,0.05)] border border-[rgba(74,124,111,0.15)]">
                  <img
                    src="/src/imports/image.png"
                    alt="Final behavioral guidance flow diagram showing the system's feedback loop"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-center text-[rgba(242,239,232,0.5)] mt-6 tracking-wide">Behavioral Feedback Loop: Weekly Review → Pattern Analysis → Commitment → Guidance → Reflection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Final Screens
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              High-Fidelity Interface Design
            </h2>

            <p className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.7)] mb-16 md:mb-20 max-w-4xl">
              The final visual design system emphasizes calm, reassurance, and emotional support through premium fintech aesthetics and behavioral clarity.
            </p>

            {/* Main showcase image */}
            <div className="group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent border-2 border-[rgba(61,140,122,0.2)] p-8 md:p-12 lg:p-16 mb-12 md:mb-16 hover:border-[rgba(61,140,122,0.35)] transition-all duration-500">
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[rgba(61,140,122,0.15)] border border-[rgba(61,140,122,0.3)] backdrop-blur-sm">
                <span className="text-xs text-[var(--mint)] font-medium">Primary Screens</span>
              </div>
              <div className="aspect-[16/10] bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/src/imports/Screenshot_2026-05-10_221041.png"
                  alt="Fintra app interface showing behavioral finance features and decision support screens"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-[rgba(242,239,232,0.6)] leading-relaxed">
                  Core user flows: Dashboard, Behavioral Insights, Decision Support, Weekly Reflection
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                { label: 'Onboarding Flow', desc: 'Emotional assessment & setup' },
                { label: 'Decision Interception', desc: 'Need vs Want classification' },
                { label: 'Pattern Dashboard', desc: 'Behavioral insights & trends' },
                { label: 'Weekly Reflection', desc: 'Progress review & confidence scoring' },
                { label: 'AI Guidance', desc: 'Contextual support system' },
                { label: 'Recovery Support', desc: 'Post-overspending tools' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border-2 border-dashed border-[rgba(61,140,122,0.2)] bg-gradient-to-br from-[rgba(61,140,122,0.04)] to-transparent p-8 md:p-10 hover:border-[rgba(61,140,122,0.35)] hover:shadow-[0_20px_40px_rgba(61,140,122,0.12)] transition-all duration-300"
                >
                  <div className="aspect-[9/16] mb-6 rounded-xl bg-[rgba(61,140,122,0.05)] border border-[rgba(61,140,122,0.15)] flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 text-[rgba(61,140,122,0.25)]">
                        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="18" r="1" fill="currentColor" />
                        <rect x="8" y="6" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <p className="text-xs text-[rgba(242,239,232,0.4)]">[ {item.label} Screen ]</p>
                    </div>
                  </div>
                  <h4 className="text-sm font-light text-[rgba(242,239,232,0.95)] mb-2">{item.label}</h4>
                  <p className="text-xs text-[rgba(242,239,232,0.6)]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Mockup Showcase */}
            <div className="rounded-3xl border-2 border-[rgba(74,124,111,0.2)] bg-gradient-to-br from-[rgba(74,124,111,0.05)] to-transparent p-12 md:p-16 lg:p-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="relative group"
                  >
                    <div className="aspect-[9/19.5] rounded-3xl border-2 border-dashed border-[rgba(74,124,111,0.2)] bg-gradient-to-b from-[rgba(74,124,111,0.03)] to-transparent flex items-center justify-center hover:border-[rgba(74,124,111,0.35)] transition-all duration-300">
                      <div className="text-center px-4">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[rgba(74,124,111,0.1)] border border-[rgba(74,124,111,0.2)] flex items-center justify-center">
                          <span className="text-lg text-[rgba(74,124,111,0.4)]">0{item}</span>
                        </div>
                        <p className="text-xs text-[rgba(242,239,232,0.4)]">Screen {item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-center text-[rgba(242,239,232,0.5)] mt-8 tracking-wide">[ Insert Final UI Mockups ]</p>
            </div>
          </div>
        </section>

        {/* Brand Identity & Prototype Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--clay)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--clay)] font-medium">
                Design System & Prototype
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Crafting the visual language<br />and interaction experience.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Brand Identity Card */}
              <article className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.12)] to-[rgba(74,124,111,0.04)] border-2 border-[rgba(74,124,111,0.25)] hover:border-[rgba(74,124,111,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(74,124,111,0.15)] group">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl" role="img" aria-label="Design icon">🎨</span>
                  <h3 className="font-['Fraunces'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)]">
                    Brand Identity & Visual Design
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.75)]">
                    Developed a calm, reassuring visual system that emphasizes emotional support over financial intimidation.
                  </p>

                  {/* Color Palette */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--sage)] mb-4 font-medium">Color Palette</h4>
                    <div className="flex gap-3 flex-wrap">
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#4A7C6F] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Primary</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#F2EFE8] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Background</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#C8593A] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Accent</p>
                      </div>
                      <div className="flex-1 min-w-[60px]">
                        <div className="aspect-square rounded-xl bg-[#7A5C7A] border border-[rgba(255,255,255,0.1)] mb-2"></div>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Support</p>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--sage)] mb-4 font-medium">Typography</h4>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[rgba(74,124,111,0.08)] border border-[rgba(74,124,111,0.15)]">
                        <p className="font-['Fraunces'] text-xl font-light text-[rgba(242,239,232,0.9)] mb-1">Fraunces</p>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Display & Headings</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[rgba(74,124,111,0.08)] border border-[rgba(74,124,111,0.15)]">
                        <p className="text-base font-light text-[rgba(242,239,232,0.9)] mb-1">DM Sans</p>
                        <p className="text-xs text-[rgba(242,239,232,0.6)]">Body & Interface</p>
                      </div>
                    </div>
                  </div>

                  {/* Design Principles */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--sage)] mb-4 font-medium">Design Principles</h4>
                    <ul className="space-y-2 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Calm over complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Emotional over transactional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Supportive over restrictive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--sage)] mt-1">•</span>
                        <span>Reflective over reactive</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Interactive Prototype Card */}
              <article className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.12)] to-[rgba(122,92,122,0.04)] border-2 border-[rgba(122,92,122,0.25)] hover:border-[rgba(122,92,122,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(122,92,122,0.15)] group">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl" role="img" aria-label="Prototype icon">⚡</span>
                  <h3 className="font-['Fraunces'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)]">
                    Interactive Prototype
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg font-light leading-relaxed text-[rgba(242,239,232,0.75)]">
                    High-fidelity prototype demonstrating the complete behavioral support flow and micro-interactions.
                  </p>

                  {/* Prototype Preview */}
                  <div className="aspect-[9/16] rounded-2xl bg-[rgba(122,92,122,0.1)] border border-[rgba(122,92,122,0.25)] overflow-hidden group-hover:border-[rgba(122,92,122,0.4)] transition-all duration-300">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/src/imports/image-3.png"
                    >
                      <source src="/src/imports/screen_recording_-_fintra_flow_.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[var(--plum)] mb-4 font-medium">Key Features</h4>
                    <ul className="space-y-3 text-sm text-[rgba(242,239,232,0.75)]">
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(122,92,122,0.08)] border border-[rgba(122,92,122,0.15)]">
                        <span className="text-[var(--plum)] flex-shrink-0">01</span>
                        <span>Onboarding with emotional assessment</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(122,92,122,0.08)] border border-[rgba(122,92,122,0.15)]">
                        <span className="text-[var(--plum)] flex-shrink-0">02</span>
                        <span>Decision pause & reflection prompts</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(122,92,122,0.08)] border border-[rgba(122,92,122,0.15)]">
                        <span className="text-[var(--plum)] flex-shrink-0">03</span>
                        <span>Behavioral pattern tracking dashboard</span>
                      </li>
                      <li className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(122,92,122,0.08)] border border-[rgba(122,92,122,0.15)]">
                        <span className="text-[var(--plum)] flex-shrink-0">04</span>
                        <span>Weekly reflection & confidence scoring</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/src/imports/screen_recording_-_fintra_flow_.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full bg-[rgba(122,92,122,0.2)] border-2 border-[rgba(122,92,122,0.3)] text-[rgba(242,239,232,0.9)] font-medium hover:bg-[rgba(122,92,122,0.25)] hover:border-[rgba(122,92,122,0.4)] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>View Interactive Prototype</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Reflections Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Key Learnings
              </span>
            </div>

            <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-8 md:mb-10">
              Designing for behavior,<br />not just features.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                This project fundamentally changed my understanding of fintech design.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)] font-normal">
                I learned that financial behavior is deeply emotional, and users do not fail because they lack information.
              </p>
              <p>
                They fail because systems are designed for rational behavior while real humans operate under stress, fear, uncertainty, and emotional overload.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 md:my-16">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.2)]">
                  <div className="text-sm uppercase tracking-wide text-[var(--sage)] mb-3 font-medium">Insight 01</div>
                  <p className="text-base text-[rgba(242,239,232,0.85)] leading-relaxed">
                    Financial literacy fails not because people lack information — but because financial systems ignore human behavior.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent border-2 border-[rgba(122,92,122,0.2)]">
                  <div className="text-sm uppercase tracking-wide text-[var(--plum)] mb-3 font-medium">Insight 02</div>
                  <p className="text-base text-[rgba(242,239,232,0.85)] leading-relaxed">
                    Product design can shape behavior, reduce anxiety, and support better decisions through empathy and systems thinking.
                  </p>
                </div>
              </div>

              <p>
                Designing Fintra taught me how behavioral interventions, when implemented with emotional awareness, can create meaningful impact at decision-making moments that matter most.
              </p>

              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal border-l-4 border-[var(--plum)] pl-8 py-2">
                The real challenge in fintech isn't building smarter algorithms — it's designing systems that understand when users need support, not judgment.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 border-t border-[var(--border-color)]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm md:text-base text-[rgba(242,239,232,0.6)] mb-8 md:mb-10">
              Thanks for reading
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 text-sm md:text-base bg-[var(--text-primary)] text-[var(--bg)] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:bg-[#e8e4dc] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--sage)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] transition-all duration-200"
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
