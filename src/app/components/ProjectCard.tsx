import { Link } from 'react-router';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  image?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  sage: {
    bg: 'rgba(74, 124, 111, 0.14)',
    border: 'rgba(74, 124, 111, 0.3)',
    text: '#7DC4B4',
  },
  clay: {
    bg: 'rgba(200, 89, 58, 0.14)',
    border: 'rgba(200, 89, 58, 0.3)',
    text: '#E8A87C',
  },
  plum: {
    bg: 'rgba(122, 92, 122, 0.14)',
    border: 'rgba(122, 92, 122, 0.3)',
    text: '#B497B4',
  },
  mint: {
    bg: 'rgba(61, 140, 122, 0.14)',
    border: 'rgba(61, 140, 122, 0.3)',
    text: '#7DC4B4',
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;
  const colors = colorMap[project.color] || colorMap.sage;

  return (
    <div
      className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center ${
        isReversed ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--surface-1)] border border-[var(--border-color)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300">
          {project.image ? (
            <>
              {/* Project Image */}
              <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[var(--bg)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </>
          ) : (
            <>
              {/* Placeholder Image with Gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background: `linear-gradient(135deg, ${colors.bg} 0%, rgba(22, 22, 21, 0.4) 100%)`,
                }}
              ></div>
              {/* Project Number */}
              <div className="absolute top-6 left-6 font-['Fraunces'] text-6xl md:text-7xl font-light opacity-10">
                0{index + 1}
              </div>
            </>
          )}

          {/* Hover State */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="text-sm text-[var(--text-muted)] font-light">View Case Study →</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`space-y-5 md:space-y-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div
              className="h-px w-12 md:w-14"
              style={{ background: colors.border }}
            ></div>
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-light"
              style={{ color: colors.text }}
            >
              {project.subtitle}
            </span>
          </div>

          <h3 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[var(--text-primary)] mb-4 md:mb-5">
            {project.title}
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-[var(--text-muted)] max-w-lg">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs border backdrop-blur-sm"
              style={{
                background: colors.bg,
                borderColor: colors.border,
                color: colors.text,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.link ? (
          <Link
            to={project.link}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors duration-200 mt-2 md:mt-3"
          >
            View Case Study
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
          <button
            className="inline-flex items-center gap-2 text-xs md:text-sm text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors duration-200 mt-2 md:mt-3"
          >
            View Case Study
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
