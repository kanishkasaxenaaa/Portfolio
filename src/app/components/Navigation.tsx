import { Link } from 'react-router';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 transition-all duration-350 ${
        scrolled
          ? 'bg-[rgba(10,10,9,0.93)] backdrop-blur-xl py-3 md:py-4 border-b border-[var(--border-color)]'
          : 'py-6 md:py-7'
      }`}
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="font-['Fraunces'] text-sm md:text-base font-light text-[var(--text-primary)] tracking-tight hover:opacity-70 transition-opacity duration-200"
        >
          Kanishka Saxena
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#work"
            className="text-xs md:text-sm text-[var(--text-muted)] px-3 md:px-4 py-2 rounded-full hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-xs md:text-sm text-[var(--text-muted)] px-3 md:px-4 py-2 rounded-full hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-200"
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1a9HkAkl9X6Ygz01-jvxJHZeGOMtJm6Gs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-[rgba(242,239,232,0.75)] px-3 md:px-4 py-2 rounded-full border border-[rgba(242,239,232,0.18)] hover:border-[rgba(242,239,232,0.4)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200"
          >
            Resume ↗
          </a>
          <a
            href="#contact"
            className="text-xs md:text-sm text-[var(--text-muted)] px-3 md:px-4 py-2 rounded-full hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-200"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/kanishka-saxena-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm bg-[var(--text-primary)] text-[var(--bg)] px-4 md:px-5 py-2 rounded-full font-medium hover:bg-[#e8e4dc] transition-all duration-200 ml-1"
          >
            Say Hi
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--text-primary)] p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
