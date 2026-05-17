import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export default function DysmenorrheaCaseStudy() {
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
            className="font-['Plus_Jakarta_Sans'] text-sm md:text-base font-light text-[var(--text-primary)] tracking-tight hover:opacity-70 focus:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded-md px-2 py-1 transition-all duration-200"
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
                background: 'radial-gradient(circle, rgba(122, 92, 122, 0.25) 0%, transparent 70%)',
                top: '-10%',
                left: '20%',
              }}
            ></div>
            <div
              className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full blur-[100px] opacity-40 animate-float-slow-reverse"
              style={{
                background: 'radial-gradient(circle, rgba(74, 124, 111, 0.15) 0%, transparent 70%)',
                bottom: '20%',
                right: '15%',
              }}
            ></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-fade-in-up-delay-1">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.13em] text-[var(--plum)] font-medium">
                03 · Inclusive Systems Design · Accessibility UX
              </span>
            </div>

            <h1
              id="project-title"
              className="font-['Plus_Jakarta_Sans'] text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-[var(--text-primary)] mb-8 md:mb-10 opacity-0 animate-fade-in-up-delay-2"
            >
              Designing for<br />Invisible Pain
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.85)] max-w-4xl mb-12 md:mb-16 opacity-0 animate-fade-in-up-delay-3">
              A real-time support system for dysmenorrhea.
            </p>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-3xl mb-16 md:mb-20 opacity-0 animate-fade-in-up-delay-4">
              How might we design emotionally supportive and accessible systems for pain that is real — yet constantly ignored in public life?
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-16 md:mb-20 opacity-0 animate-fade-in-up-delay-5">
              {['Inclusive Design', 'Accessibility', 'Emotional UX', 'Systems Thinking', 'Phygital Experience'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs border border-[rgba(122,92,122,0.3)] bg-[rgba(122,92,122,0.1)] text-[#B497B4]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 border-t border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Problem Statement
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Pain was treated as a personal problem<br />instead of a systems failure.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                Dysmenorrhea affects millions globally and often disrupts:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc marker:text-[var(--plum)]">mobility,</li>
                <li className="list-disc marker:text-[var(--plum)]">concentration,</li>
                <li className="list-disc marker:text-[var(--plum)]">emotional regulation,</li>
                <li className="list-disc marker:text-[var(--plum)]">and everyday functioning.</li>
              </ul>
              <p>
                Yet public environments rarely provide structured support for people experiencing severe menstrual pain. Users are expected to continue functioning, remain productive, and silently manage pain in workplaces, colleges, transit systems, and public environments.
              </p>
              <p>
                For users with disabilities, the experience becomes even more exclusionary due to inaccessible infrastructure, sensory overload, mobility barriers, lack of privacy, and dependence during distress situations.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.9)] font-normal border-l-2 border-[var(--plum)] pl-8">
                Existing solutions largely focus on period tracking, medication reminders, or symptom logging, while ignoring real-time recovery, accessibility, emotional reassurance, and public support systems.
              </p>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal pt-4">
                This revealed a larger systems-design challenge: <span className="text-[var(--plum)]">How might we create real-time support systems for invisible pain in public life?</span>
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase 1 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">Emotional Context & Public Environments</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Discovery Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--sage)] font-medium">
                Secondary Research
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Understanding the lived<br />experience of pain.
            </h2>

            {/* Research Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  insight: 'Pain is normalized even when it disrupts daily life.',
                  description: 'Many users viewed severe menstrual pain as something they were expected to tolerate instead of seek support for.',
                  color: 'plum'
                },
                {
                  insight: 'Most existing tools track periods but do not support pain management.',
                  description: 'Current solutions focus heavily on cycle tracking while ignoring emotional, physical, and accessibility needs during active pain episodes.',
                  color: 'sage'
                },
                {
                  insight: 'Stigma forces users into silence.',
                  description: 'Users often avoided disclosing pain in workplaces, colleges, and public spaces due to fear of judgment or dismissal.',
                  color: 'mint'
                },
                {
                  insight: 'Disability compounds menstrual exclusion.',
                  description: 'Users with mobility and sensory disabilities experienced additional barriers involving accessibility, navigation, privacy, and physical exhaustion.',
                  color: 'clay'
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className={`p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    item.color === 'plum' ? 'bg-[rgba(122,92,122,0.06)] border-[rgba(122,92,122,0.2)] hover:shadow-[0_20px_60px_rgba(122,92,122,0.12)]' :
                    item.color === 'sage' ? 'bg-[rgba(74,124,111,0.06)] border-[rgba(74,124,111,0.2)] hover:shadow-[0_20px_60px_rgba(74,124,111,0.12)]' :
                    item.color === 'mint' ? 'bg-[rgba(61,140,122,0.06)] border-[rgba(61,140,122,0.2)] hover:shadow-[0_20px_60px_rgba(61,140,122,0.12)]' :
                    'bg-[rgba(200,89,58,0.06)] border-[rgba(200,89,58,0.2)] hover:shadow-[0_20px_60px_rgba(200,89,58,0.12)]'
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-light text-[rgba(242,239,232,0.95)] mb-4 leading-snug">
                    {item.insight}
                  </h3>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.7)] leading-relaxed">
                    {item.description}
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
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">Research Synthesis & Literature Review</span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Research Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Primary Research
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Listening to real experiences.
            </h2>

            {/* Survey Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                { metric: '78', label: 'Global participants', color: 'plum' },
                { metric: '5.8/10', label: 'Average pain score', color: 'clay' },
                { metric: '79%', label: 'No institutional support', color: 'sage' },
                { metric: '54%', label: 'Simply "push through"', color: 'mint' },
                { metric: '#1', label: 'Privacy most requested', color: 'plum' },
              ].map((stat, index) => (
                <article
                  key={index}
                  className={`p-6 md:p-8 rounded-2xl border-2 text-center ${
                    stat.color === 'plum' ? 'bg-[rgba(122,92,122,0.06)] border-[rgba(122,92,122,0.2)]' :
                    stat.color === 'clay' ? 'bg-[rgba(200,89,58,0.06)] border-[rgba(200,89,58,0.2)]' :
                    stat.color === 'sage' ? 'bg-[rgba(74,124,111,0.06)] border-[rgba(74,124,111,0.2)]' :
                    'bg-[rgba(61,140,122,0.06)] border-[rgba(61,140,122,0.2)]'
                  }`}
                >
                  <div className={`font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-light mb-3 ${
                    stat.color === 'plum' ? 'text-[#B497B4]' :
                    stat.color === 'clay' ? 'text-[#E8A87C]' :
                    stat.color === 'sage' ? 'text-[#7DC4B4]' :
                    'text-[#7DC4B4]'
                  }`}>
                    {stat.metric}
                  </div>
                  <p className="text-xs md:text-sm text-[rgba(242,239,232,0.7)]">{stat.label}</p>
                </article>
              ))}
            </div>

            {/* Interview Insights */}
            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-12 md:mb-16">
              <p>
                Across interviews, one pattern remained consistent: <span className="text-[rgba(242,239,232,0.9)]">people hid their pain even when it severely affected them.</span>
              </p>
              <p>Users described:</p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc marker:text-[var(--plum)]">silently leaving spaces,</li>
                <li className="list-disc marker:text-[var(--plum)]">avoiding conversations,</li>
                <li className="list-disc marker:text-[var(--plum)]">struggling through work or classes,</li>
                <li className="list-disc marker:text-[var(--plum)]">and adapting individually because systems offered no support.</li>
              </ul>
              <p>
                Users with disabilities described additional challenges involving inaccessible washrooms, fatigue, sensory overwhelm, and dependence during severe pain episodes.
              </p>
            </div>

            {/* User Quote */}
            <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.12)] to-transparent border-2 border-[rgba(122,92,122,0.25)]">
              <blockquote className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[rgba(242,239,232,0.95)] italic">
                "I couldn't ask for help because I was afraid people would think I was being dramatic. So I just left."
              </blockquote>
              <cite className="block mt-6 text-sm text-[var(--plum)] not-italic font-medium">— Research Participant</cite>
            </div>
          </div>
        </section>

        {/* Image Showcase 3 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,242,0.5)]">Survey Data & Pain Severity Insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Defining the Opportunity Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Defining the Opportunity
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              The gap wasn't awareness.<br />It was support.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                The research revealed that people did not need another period tracker.
              </p>
              <p>They needed:</p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc marker:text-[var(--mint)]">real-time support,</li>
                <li className="list-disc marker:text-[var(--mint)]">accessible recovery spaces,</li>
                <li className="list-disc marker:text-[var(--mint)]">emotional reassurance,</li>
                <li className="list-disc marker:text-[var(--mint)]">privacy,</li>
                <li className="list-disc marker:text-[var(--mint)]">and systems designed for distress situations.</li>
              </ul>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal border-l-2 border-[var(--mint)] pl-8 pt-4">
                This transformed the project from a tracking tool into a <span className="text-[var(--mint)]">phygital support ecosystem.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                Designing a Real-Time Support Ecosystem
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              A phygital support ecosystem<br />for invisible pain.
            </h2>

            <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] max-w-4xl mb-16 md:mb-20">
              The proposed ecosystem combines <span className="text-[var(--plum)] font-normal">physical recovery infrastructure</span>, accessible public support systems, and real-time digital guidance. The system supports users before, during, and after severe pain episodes through emotionally aware and accessibility-sensitive interventions.
            </p>

            {/* Component 1: Recovery Pods */}
            <article className="mb-16 md:mb-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent border-2 border-[rgba(122,92,122,0.25)]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-6">
                Accessible Recovery Pods
              </h3>
              <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-8">
                Private support pods placed in campuses, workplaces, transit hubs, and public environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Reclining seating',
                  'Heat therapy',
                  'Dim lighting control',
                  'Sensory-safe environments',
                  'Medication access',
                  'Emergency support button',
                  'Wheelchair accessibility',
                  'Caregiver-sensitive layouts'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--plum)]" aria-hidden="true"></div>
                    <span className="text-sm md:text-base text-[rgba(242,239,232,0.8)]">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm md:text-base font-medium text-[var(--plum)] italic">
                Behavioral Goal: Allow users to recover safely without leaving public environments entirely.
              </p>
            </article>

            {/* Component 2: Digital App */}
            <article className="mb-16 md:mb-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent border-2 border-[rgba(74,124,111,0.25)]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-6">
                Emotionally Aware Support App
              </h3>
              <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-8">
                A lightweight support application designed for low-effort interaction during pain episodes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Nearby pod locator',
                  'Accessible navigation',
                  'Emergency assistance',
                  'Pain-state guidance',
                  'Medication reminders',
                  'Caregiver access',
                  'Emotional reassurance prompts',
                  'Personalized support preferences'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" aria-hidden="true"></div>
                    <span className="text-sm md:text-base text-[rgba(242,239,232,0.8)]">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm md:text-base font-medium text-[var(--sage)] italic">
                Behavioral Goal: Reduce cognitive overload during distress situations.
              </p>
            </article>

            {/* Component 3: Accessibility-First */}
            <article className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[rgba(61,140,122,0.08)] to-transparent border-2 border-[rgba(61,140,122,0.25)]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-light text-[rgba(242,239,232,0.95)] mb-6">
                Designing Beyond Average Users
              </h3>
              <p className="text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-8">
                The system was intentionally designed for users with mobility disabilities, sensory sensitivities, communication barriers, fatigue conditions, and temporary movement limitations during pain episodes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Low-light modes',
                  'Voice interaction',
                  'Simplified navigation',
                  'Wheelchair circulation',
                  'Sensory-safe layouts',
                  'Caregiver workflows',
                  'Low-energy interaction patterns',
                  'Privacy-first design'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--mint)]" aria-hidden="true"></div>
                    <span className="text-sm md:text-base text-[rgba(242,239,232,0.8)]">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Image Showcase 4 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <span className="text-sm text-[rgba(242,239,232,0.5)]">System Architecture & Service Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--sage)] font-medium">
                Interface Design
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-16 md:mb-20">
              Phygital Experience Design
            </h2>

            {/* Main showcase image */}
            <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[var(--surface-1)] border-2 border-[rgba(122,92,122,0.2)] p-8 md:p-12 lg:p-16 mb-8 md:mb-12">
              <div className="aspect-[16/10] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-2xl flex items-center justify-center">
                <img
                  src="/src/imports/Screenshot_2026-05-10_220859.png"
                  alt="Dysmenorrhea support system showing app interface and pod design"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Secondary images grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] p-6 md:p-10"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(122,92,122,0.06)] to-transparent rounded-xl flex items-center justify-center border border-[rgba(122,92,122,0.15)]">
                    <span className="text-xs text-[rgba(242,239,232,0.5)]">Feature Detail {item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase 5 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 bg-[var(--surface-1)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent rounded-xl flex items-center justify-center">
                  <span className="text-xs text-[rgba(242,239,232,0.5)]">Pod Interior Design</span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[var(--bg)] border border-[var(--border-color)] p-6 md:p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(122,92,122,0.08)] to-transparent rounded-xl flex items-center justify-center">
                  <span className="text-xs text-[rgba(242,239,232,0.5)]">App User Journey</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--plum)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--plum)] font-medium">
                User Journey
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-16 md:mb-20">
              From silent distress<br />to supported recovery.
            </h2>

            {/* Journey Steps */}
            <div className="space-y-8 md:space-y-10">
              {[
                {
                  step: '01',
                  title: 'Pain begins in public',
                  description: 'User experiences severe menstrual pain while at work, campus, or transit hub.',
                  color: 'clay'
                },
                {
                  step: '02',
                  title: 'User experiences overwhelm',
                  description: 'Physical pain compounds with anxiety about seeking help or leaving the space.',
                  color: 'plum'
                },
                {
                  step: '03',
                  title: 'App recommends nearest support pod',
                  description: 'Digital companion detects location and pain severity, suggesting the closest available recovery pod.',
                  color: 'sage'
                },
                {
                  step: '04',
                  title: 'User navigates using accessible guidance',
                  description: 'Low-effort navigation with voice prompts and visual cues guides user to the pod.',
                  color: 'mint'
                },
                {
                  step: '05',
                  title: 'Recovery support begins',
                  description: 'User accesses private space with heat therapy, dim lighting, and comfortable seating.',
                  color: 'plum'
                },
                {
                  step: '06',
                  title: 'Emotional reassurance provided',
                  description: 'App offers gentle check-ins, medication reminders, and caregiver notification options.',
                  color: 'sage'
                },
                {
                  step: '07',
                  title: 'User returns with reduced stress',
                  description: 'After recovery time, user re-enters public space with dignity and reduced pain.',
                  color: 'mint'
                }
              ].map((item, index) => (
                <article
                  key={index}
                  className={`relative pl-20 md:pl-24 pb-8 md:pb-10 ${
                    index !== 6 ? 'border-l-2 border-[rgba(242,239,232,0.1)] ml-5 md:ml-6' : 'ml-5 md:ml-6'
                  }`}
                >
                  <div className={`absolute left-[-1.25rem] md:left-[-1.5rem] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-medium ${
                    item.color === 'plum' ? 'bg-[rgba(122,92,122,0.2)] text-[#B497B4]' :
                    item.color === 'sage' ? 'bg-[rgba(74,124,111,0.2)] text-[#7DC4B4]' :
                    item.color === 'mint' ? 'bg-[rgba(61,140,122,0.2)] text-[#7DC4B4]' :
                    'bg-[rgba(200,89,58,0.2)] text-[#E8A87C]'
                  }`}>
                    {item.step}
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-light text-[rgba(242,239,232,0.95)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.7)] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Design Value Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40 bg-[var(--surface-1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--sage)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--sage)] font-medium">
                Impact & Design Value
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Designing for dignity<br />instead of endurance.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)] mb-16 md:mb-20">
              <p>
                This project reframed menstrual pain not as an individual burden, but as a systems-design challenge.
              </p>
              <p>
                The proposed ecosystem aimed to reduce emotional isolation, improve accessibility, normalize recovery, create safer public experiences, and support invisible pain with dignity.
              </p>
            </div>

            {/* Expected Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                'Reduced stress during pain episodes',
                'Increased accessibility support',
                'Faster recovery response',
                'Better emotional reassurance',
                'Reduced stigma around visible recovery',
                'Normalized public support for invisible pain'
              ].map((impact, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(74,124,111,0.08)] to-transparent border border-[rgba(74,124,111,0.2)]"
                >
                  <div className="w-6 h-6 rounded-full bg-[rgba(74,124,111,0.3)] flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--sage)]"></div>
                  </div>
                  <p className="text-sm md:text-base text-[rgba(242,239,232,0.85)]">{impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflections Section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px w-7 bg-[var(--mint)]" aria-hidden="true"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--mint)] font-medium">
                Key Learnings
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[rgba(242,239,232,0.95)] mb-12 md:mb-16">
              Reflections on designing<br />for invisible pain.
            </h2>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg font-light leading-[1.8] text-[rgba(242,239,232,0.7)]">
              <p>
                This project changed how I think about accessibility and care.
              </p>
              <p>
                I learned that inclusive design is not only about usability. <span className="text-[rgba(242,239,232,0.95)] font-normal">It is about designing systems that acknowledge human vulnerability without forcing people to justify it.</span>
              </p>
              <p>
                Designing for invisible pain meant designing for:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc marker:text-[var(--mint)]">dignity,</li>
                <li className="list-disc marker:text-[var(--mint)]">emotional safety,</li>
                <li className="list-disc marker:text-[var(--mint)]">accessibility,</li>
                <li className="list-disc marker:text-[var(--mint)]">and support during moments people are usually forced to hide.</li>
              </ul>
              <p className="text-lg md:text-xl text-[rgba(242,239,232,0.95)] font-normal border-l-2 border-[var(--mint)] pl-8 pt-4">
                Invisible pain deserves visible support. Design can make that support real.
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
              className="inline-flex items-center justify-center gap-2 text-sm md:text-base bg-[var(--text-primary)] text-[var(--bg)] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:bg-[#e8e4dc] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] transition-all duration-200"
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
