export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 */}
        <div
          className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full blur-[100px] opacity-100 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(74, 124, 111, 0.2) 0%, transparent 70%)',
            top: '-80px',
            left: '35%',
          }}
        ></div>
        {/* Orb 2 */}
        <div
          className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full blur-[100px] opacity-100 animate-float-slow-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(200, 89, 58, 0.1) 0%, transparent 70%)',
            bottom: '80px',
            left: '6%',
          }}
        ></div>
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up">
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-up-delay-1">
            <div className="h-px w-7 bg-[var(--text-muted-2)]"></div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.13em] text-[var(--text-muted-2)]">
              UX/UI Designer · M.Des, Symbiosis Institute of Design
            </span>
          </div>

          <h1 className="font-['Fraunces'] text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-[var(--text-primary)] opacity-0 animate-fade-in-up-delay-2">
            Designing<br />
            for how<br />
            people <em className="italic text-[var(--sage)]">feel.</em>
          </h1>

          <p className="text-base md:text-lg font-light leading-[1.78] text-[rgba(242,239,232,0.56)] max-w-md opacity-0 animate-fade-in-up-delay-3">
            Emotionally intelligent digital experiences through behavioral thinking, systems design, and visual storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-10 opacity-0 animate-fade-in-up-delay-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                Available for
              </label>
              <span className="text-xs md:text-sm font-light text-[rgba(242,239,232,0.72)]">
                Internship · Full-time · Freelance
              </span>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                Education
              </label>
              <span className="text-xs md:text-sm font-light text-[rgba(242,239,232,0.72)]">
                M.Des UX · SID Pune
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-in-up-delay-5">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 text-sm md:text-base bg-[var(--text-primary)] text-[var(--bg)] px-6 md:px-7 py-3 rounded-full font-medium hover:bg-[#e8e4dc] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Work ↓
            </a>
            <a
              href="https://www.linkedin.com/in/kanishka-saxena-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm md:text-base border border-[rgba(242,239,232,0.22)] text-[var(--text-primary)] px-6 md:px-7 py-3 rounded-full hover:border-[rgba(242,239,232,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Say Hi →
            </a>
          </div>
        </div>

        {/* Right Content - Photo Card */}
        <div className="relative flex justify-center lg:justify-end items-center opacity-0 animate-fade-in-up-delay-3">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Floating Chips */}
            <div className="absolute -top-4 -right-6 md:-top-6 md:-right-8 z-10 bg-[rgba(17,17,16,0.88)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-xl p-3 md:p-4 animate-float-medium">
              <div className="text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                Experience
              </div>
              <div className="font-['Fraunces'] text-lg md:text-xl font-light text-[var(--text-primary)]">
                2+ yrs
              </div>
              <div className="text-[10px] text-[var(--text-muted-2)] mt-0.5">
                Design & Research
              </div>
            </div>

            <div className="absolute bottom-20 -left-6 md:bottom-24 md:-left-8 z-10 bg-[rgba(17,17,16,0.88)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-xl p-3 md:p-4 animate-float-medium-reverse">
              <div className="text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                Education
              </div>
              <div className="font-['Fraunces'] text-lg md:text-xl font-light text-[var(--text-primary)]">
                M.Des
              </div>
              <div className="text-[10px] text-[var(--text-muted-2)] mt-0.5">
                UX Design · SID
              </div>
            </div>

            {/* Photo Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_48px_96px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] bg-[var(--surface-1)]">
              <div className="aspect-[3/4] relative">
                <img
                  src="/src/imports/IMG20251002173716.jpg"
                  alt="Kanishka Saxena"
                  className="w-full h-full object-cover object-top brightness-[0.96] contrast-[1.02] saturate-[0.9]"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,9,0.9) 0%, rgba(10,10,9,0.4) 50%, transparent 100%)',
                  }}
                ></div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20 flex justify-between items-end gap-4">
                <div>
                  <div className="font-['Fraunces'] text-lg md:text-xl font-light text-[var(--text-primary)] tracking-tight mb-0.5">
                    Kanishka Saxena
                  </div>
                  <div className="text-[11px] text-[rgba(242,239,232,0.5)] font-light">
                    UX/UI Designer
                  </div>
                </div>
                <div className="bg-[var(--sage-alpha)] border border-[rgba(74,124,111,0.3)] rounded-full px-3 py-1.5 text-[11px] text-[#7DC4B4] whitespace-nowrap flex-shrink-0">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
