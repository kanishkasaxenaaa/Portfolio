export default function WorkIntro() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-5 md:mb-6">
            <div className="h-px w-7 bg-[var(--text-muted-2)]"></div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted-2)]">
              Selected Work
            </span>
          </div>
          <h2 className="font-['Fraunces'] text-[clamp(1.75rem,3.8vw,3rem)] font-light tracking-tight leading-tight text-[var(--text-primary)]">
            Designing <em className="italic text-[var(--text-muted)]">with empathy,</em>
            <br />
            building <em className="italic text-[var(--text-muted)]">with purpose</em>
          </h2>
        </div>
        <div className="lg:text-right max-w-md lg:max-w-xs">
          <p className="text-xs md:text-sm font-light text-[var(--text-muted)] leading-relaxed">
            A collection of projects exploring human-centered design, behavioral psychology, and systems thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
