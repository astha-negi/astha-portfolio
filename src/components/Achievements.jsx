import { achievements } from '../data/content.js'
import { Reveal } from './Section.jsx'
import { TrophyIcon } from './Icons.jsx'

/** Sits inside the Projects-to-Contact gap; no nav entry of its own. */
const Achievements = () => (
  <div className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-8">
    <Reveal>
      <h2 className="font-mono text-xs tracking-[0.25em] text-slate-500 uppercase">
        Achievements &amp; Leadership
      </h2>
    </Reveal>

    <ul className="mt-6 grid gap-4 md:grid-cols-3">
      {achievements.map(({ title, detail }, index) => (
        <Reveal as="li" key={title} delay={index * 70}>
          <div className="glass h-full rounded-xl p-5">
            <TrophyIcon className="h-4 w-4 text-amber-300" />
            <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {detail}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  </div>
)

export default Achievements
