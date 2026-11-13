import { useReveal } from '../hooks/useReveal.js'

/** Small kicker above a section title, e.g. "02 — Skills". */
export const Kicker = ({ index, children }) => (
  <p className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase">
    {index ? <span className="text-slate-600">{index} / </span> : null}
    {children}
  </p>
)

/** Section heading with a two-tone treatment on the final word. */
export const Heading = ({ lead, accent }) => (
  <h2 className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-5xl">
    {lead}{' '}
    <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
      {accent}
    </span>
  </h2>
)

/**
 * Wrapper that reveals its children on first scroll into view.
 * `as` lets a caller pick the element without losing the behaviour.
 */
export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const ref = useReveal({ delay })
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

/** A full-width page section with consistent padding and an anchor id. */
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`section-pad scroll-mt-24 ${className}`}>
    {children}
  </section>
)

export default Section
