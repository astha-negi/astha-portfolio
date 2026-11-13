import { about } from '../data/content.js'
import Section, { Heading, Kicker, Reveal } from './Section.jsx'
import { GraduationCapIcon } from './Icons.jsx'

const About = () => (
  <Section id="about">
    <Reveal>
      <Kicker index="01">About</Kicker>
      <Heading lead="About" accent="Me" />
    </Reveal>

    <div className="mt-12 grid gap-10 lg:grid-cols-5">
      <Reveal delay={80} className="lg:col-span-3">
        <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4">
          {about.stats.map(({ value, label }) => (
            <div key={label} className="glass rounded-xl p-4 text-center">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block text-2xl font-black text-white sm:text-3xl">
                  {value}
                </span>
                <span className="mt-1 block text-xs text-slate-500">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={160} className="lg:col-span-2">
        <div className="glass h-full rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <GraduationCapIcon className="h-5 w-5" />
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
              Education
            </h3>
          </div>

          <p className="mt-6 text-lg font-bold text-white">
            {about.education.degree}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {about.education.institution}
          </p>
          <p className="mt-1 text-sm text-slate-500">{about.education.place}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
            <span className="font-mono text-xs text-slate-500">
              {about.education.period}
            </span>
            <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 font-mono text-xs text-emerald-300">
              {about.education.score}
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
)

export default About
