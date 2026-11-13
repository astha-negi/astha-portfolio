import { projects } from '../data/content.js'
import { accent } from '../accents.js'
import Section, { Heading, Kicker, Reveal } from './Section.jsx'
import { ArrowUpRightIcon, GitHubIcon } from './Icons.jsx'

const Projects = () => (
  <Section id="projects">
    <Reveal>
      <Kicker index="04">Projects</Kicker>
      <Heading lead="Featured" accent="Work" />
    </Reveal>

    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => {
        const theme = accent(project.accent)
        return (
          <Reveal key={project.name} delay={index * 90}>
            <article
              className={`group glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${theme.ring} ${theme.glow}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${theme.text}`}>
                    {project.subtitle}
                  </p>
                </div>

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.name} source on GitHub`}
                    className="shrink-0 rounded-lg border border-white/10 p-2 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <dl className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div>
                  <dt className="font-mono text-[0.7rem] tracking-wider text-slate-500 uppercase">
                    Problem solved
                  </dt>
                  <dd className="mt-1.5 text-sm text-slate-300">
                    {project.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.7rem] tracking-wider text-slate-500 uppercase">
                    Key feature
                  </dt>
                  <dd className="mt-1.5 text-sm text-slate-300">
                    {project.feature}
                  </dd>
                </div>
              </dl>

              {/* mt-auto pins the stack to the card's bottom edge so cards in a
                  row line up regardless of description length. */}
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className={`rounded-md border px-2 py-1 font-mono text-xs ${theme.chip}`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                >
                  View source
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <p className="mt-6 font-mono text-xs text-slate-500">
                  Walkthrough on request
                </p>
              )}
            </article>
          </Reveal>
        )
      })}
    </div>
  </Section>
)

export default Projects
