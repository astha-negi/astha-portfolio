import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to the element the first time it scrolls into view, which
 * triggers the fade-up animation in index.css.
 *
 * Returns a ref to attach to any element carrying the `reveal` class. The
 * observer disconnects after firing, so the animation never replays.
 */
export const useReveal = ({ threshold = 0.15, delay = 0 } = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // No IntersectionObserver (or reduced motion): show it immediately.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const timer = setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, delay)
          entry.target.dataset.revealTimer = String(timer)
          observer.disconnect()
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
