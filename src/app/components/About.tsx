export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-7 bg-[var(--text-muted-2)]"></div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted-2)]">
                About Me
              </span>
            </div>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-tight text-[var(--text-primary)] mb-6 md:mb-8">
              Designing with<br />
              <em className="italic text-[var(--sage)]">intention</em> &<br />
              <em className="italic text-[var(--sage)]">empathy</em>
            </h2>
            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
              <p>
                I'm a UX/UI designer currently pursuing my Master's in Design from Symbiosis Institute of Design, Pune. With over 2 years of experience in design and research, I specialize in creating emotionally intelligent digital experiences that prioritize human needs and behavioral patterns.
              </p>
              <p>
                My approach combines behavioral design thinking, systems thinking, and visual storytelling to craft solutions that not only look beautiful but also deeply resonate with users on an emotional level.
              </p>
              <p>
                When I'm not designing, you'll find me exploring the intersection of psychology and design, reading about design systems, or experimenting with new design tools and methodologies.
              </p>
            </div>
          </div>

          {/* Right Content - Skills & Tools */}
          <div className="space-y-10 md:space-y-12">
            {/* Skills */}
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-5 md:mb-6">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  'UX Research',
                  'UI Design',
                  'Behavioral Design',
                  'Design Systems',
                  'Prototyping',
                  'User Testing',
                  'Information Architecture',
                  'Visual Design',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-color)] text-xs md:text-sm text-[var(--text-primary)] text-center hover:border-[rgba(255,255,255,0.15)] transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-5 md:mb-6">
                Design Tools
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'After Effects', 'Principle', 'Miro', 'FigJam'].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full border border-[var(--border-color)] text-xs md:text-sm text-[var(--text-muted)] bg-[var(--surface-1)] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Experience */}
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-5 md:mb-6">
                Background
              </h3>
              <div className="space-y-5 md:space-y-6">
                <div className="border-l-2 border-[var(--sage)] pl-4 md:pl-5">
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                    Education
                  </div>
                  <div className="text-sm md:text-base text-[var(--text-primary)] font-light mb-1">
                    Master of Design (M.Des) in UX
                  </div>
                  <div className="text-xs md:text-sm text-[var(--text-muted)]">
                    Symbiosis Institute of Design, Pune
                  </div>
                </div>
                <div className="border-l-2 border-[var(--clay)] pl-4 md:pl-5">
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted-2)] mb-1">
                    Experience
                  </div>
                  <div className="text-sm md:text-base text-[var(--text-primary)] font-light mb-1">
                    2+ Years Experience
                  </div>
                  <div className="text-xs md:text-sm text-[var(--text-muted)]">
                    Visual Communication Designer & Illustrator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
