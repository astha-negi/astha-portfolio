import { skills } from '../data/content.js'
import { accent } from '../accents.js'
import Section, { Heading, Kicker, Reveal } from './Section.jsx'

const Skills = () => (
  <Section id="skills">
    <Reveal>
      <Kicker index="02">Skills</Kicker>
      <Heading lead="Tech" accent="Stack" />
      <p className="mt-5 max-w-2xl text-base text-slate-400">
        What I reach for when building full-stack applications, from the browser
        down to the query plan.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ group, items, accent: name }, index) => {
        const theme = accent(name)
        return (
          <Reveal key={group} delay={index * 70}>
            <div
              className={`group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${theme.ring} ${theme.glow}`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                <h3 className={`text-sm font-bold tracking-wide uppercase ${theme.text}`}>
                  {group}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )
      })}
    </div>
  </Section>
)

export default Skills
