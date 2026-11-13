import { useEffect, useState } from 'react'

/** Thin cyan bar across the top showing how far down the page you are. */
const ScrollProgress = () => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      // A page shorter than the viewport has nothing to report.
      setPercent(scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-60 h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 transition-[width] duration-75 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

export default ScrollProgress
