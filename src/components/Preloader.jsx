import { useEffect, useState } from 'react'

/**
 * Brief loading veil over the first paint.
 *
 * Counts to 100 and unmounts. Anyone who prefers reduced motion skips it
 * entirely rather than being made to wait for decoration.
 */
const Preloader = ({ onDone }) => {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      onDone()
      return
    }

    const tick = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) return 100
        return Math.min(100, value + Math.random() * 18 + 6)
      })
    }, 90)

    return () => clearInterval(tick)
  }, [onDone])

  useEffect(() => {
    if (progress < 100) return
    setLeaving(true)
    const timer = setTimeout(onDone, 500)
    return () => clearTimeout(timer)
  }, [progress, onDone])

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      <p className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">
        Loading
      </p>
      <p className="mt-6 text-5xl font-black tabular-nums text-white">
        {Math.floor(progress)}
        <span className="text-cyan-400">%</span>
      </p>
      <div className="mt-6 h-px w-48 overflow-hidden bg-white/10">
        <div
          className="h-full bg-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default Preloader
