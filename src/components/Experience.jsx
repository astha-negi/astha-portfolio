import { experience } from '../data/content.js'
import Section, { Heading, Kicker, Reveal } from './Section.jsx'

/** Vertical timeline of roles, newest first. */
const Experience = () => (
  <Section id="work">
    <Reveal>
      <Kicker index="03">Work</Kicker>
      <Heading lead="Where I've" accent="Worked" />
    </Reveal>

    <ol className="relative mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-10">
      {experience.map((job, index) => (
        <Reveal as="li" key={`${job.company}-${job.period}`} delay={index * 90}>
          {/* Timeline node */}
          <span
            className={`absolute -left-[5px] mt-6 h-2.5 w-2.5 rounded-full ring-4 ring-slate-950 ${
              job.current ? 'bg-emerald-400' : 'bg-slate-600'
            }`}
            aria-hidden="true"
          />

          <article className="glass rounded-2xl p-6 transition-colors hover:border-white/20 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan-300">
                  {job.company}
                </p>
              </div>

              <span
                className={`rounded-md border px-2.5 py-1 font-mono text-xs whitespace-nowrap ${
                  job.current
                    ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                    : 'border-white/10 bg-white/5 text-slate-400'
                }`}
              >
                {job.period}
              </span>
            </div>

            <ul className="mt-5 space-y-3">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 40)}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-slate-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </ol>
  </Section>
)

export default Experience
