export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <div className="h-px w-12 bg-[var(--text-muted-2)]"></div>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted-2)]">
            Let's Connect
          </span>
          <div className="h-px w-12 bg-[var(--text-muted-2)]"></div>
        </div>

        <h2 className="font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-light tracking-tight leading-tight text-[var(--text-primary)] mb-6 md:mb-8">
          Ready to create<br />
          something <em className="italic text-[var(--sage)]">meaningful?</em>
        </h2>

        <p className="text-base md:text-lg font-light leading-relaxed text-[var(--text-muted)] max-w-2xl mx-auto mb-10 md:mb-14">
          I'm currently seeking opportunities in UX/UI design, product design, and design research. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
          <a
            href="mailto:kanishka@example.com"
            className="inline-flex items-center justify-center gap-2 text-sm md:text-base bg-[var(--text-primary)] text-[var(--bg)] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:bg-[#e8e4dc] hover:-translate-y-0.5 transition-all duration-200 min-w-[200px]"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/kanishka-saxena-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm md:text-base border border-[rgba(242,239,232,0.22)] text-[var(--text-primary)] px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:border-[rgba(242,239,232,0.4)] hover:-translate-y-0.5 transition-all duration-200 min-w-[200px]"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[var(--border-color)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-2 md:mb-3">
                Email
              </label>
              <a
                href="mailto:kanishka@example.com"
                className="text-sm md:text-base text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors duration-200"
              >
                kanishka@example.com
              </a>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-2 md:mb-3">
                Location
              </label>
              <span className="text-sm md:text-base text-[var(--text-primary)]">
                Pune, India
              </span>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted-2)] mb-2 md:mb-3">
                Social
              </label>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/kanishka-saxena-designer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors duration-200"
                >
                  Dribbble ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
