import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WorkIntro from '../components/WorkIntro';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'fintra',
      title: 'Fintra',
      subtitle: 'Financial Literacy Platform',
      description: 'Designing an inclusive learning experience for young adults to build financial confidence through behavioral design and gamification.',
      tags: ['UX Research', 'Behavioral Design', 'Gamification'],
      color: 'sage',
      image: '/src/imports/Screenshot_2026-05-10_221041.png',
      link: '/fintra'
    },
    {
      id: 'splitwise',
      title: 'Splitwise',
      subtitle: 'Expense Sharing Reimagined',
      description: 'Redesigning the group expense management experience with focus on clarity, trust, and emotional comfort in shared finances.',
      tags: ['Product Design', 'User Research', 'Prototyping'],
      color: 'clay',
      image: '/src/imports/Screenshot_2026-05-10_215432.png',
      link: '/splitwise'
    },
    {
      id: 'dysmenorrhea',
      title: 'Designing for Invisible Pain',
      subtitle: 'Inclusive Systems Design · Accessibility UX',
      description: 'Reimagining real-time support systems for dysmenorrhea through inclusive, accessibility-first, and emotionally aware design.',
      tags: ['Inclusive Design', 'Accessibility', 'Emotional UX', 'Systems Thinking'],
      color: 'plum',
      image: '/src/imports/Screenshot_2026-05-10_220859.png',
      link: '/dysmenorrhea'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation scrolled={scrolled} />
      <Hero />
      <WorkIntro />

      {/* Projects Section */}
      <section id="work" className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 space-y-12 md:space-y-16 lg:space-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <About />

      {/* Visual Communication Design Section */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-36 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px w-7 bg-[var(--text-muted-2)]"></div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted-2)]">
              Visual Design
            </span>
          </div>
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight mb-8 md:mb-12">
            Visual Communication<br />Design
          </h2>
          <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl mb-12 md:mb-16 leading-relaxed">
            Exploring the intersection of design thinking and visual storytelling through branding, illustration, and editorial design projects.
          </p>

          {/* Visual Design Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              '/src/imports/Screenshot_2026-05-11_110945.png',
              '/src/imports/Screenshot_2026-05-11_111238.png',
              '/src/imports/Screenshot_2026-05-11_120824.png',
              '/src/imports/Screenshot_2026-05-11_111327.png',
              '/src/imports/Screenshot_2026-05-11_111122.png',
              '/src/imports/Screenshot_2026-05-11_161445.png',
            ].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Visual Design ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--bg)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-xs md:text-sm text-[var(--text-muted)] text-center md:text-left">
            © 2024 Kanishka Saxena. Designed with intention.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://www.linkedin.com/in/kanishka-saxena-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:kanishka@example.com"
              className="text-xs md:text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Email ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
