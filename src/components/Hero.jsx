import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from './Icons.jsx'

const ROLES = [
  'Full Stack Developer',
  'React & TypeScript',
  'Node.js & Express',
  'AWS & Microservices',
]

/** Cycles through ROLES, typing and deleting one character at a time. */
const useTypewriter = (words, { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // Respect reduced motion by showing the first word and stopping.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEnabled(false)
      setText(words[0])
    }
  }, [words])

  useEffect(() => {
    if (!enabled) return

    const word = words[index % words.length]

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => (value + 1) % words.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
        )
      },
      deleting ? deleteMs : typeMs
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, enabled, typeMs, deleteMs, holdMs])

  return text
}

const Hero = () => {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20 sm:px-8"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="reveal is-visible">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {profile.tagline}
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl">
            I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              {profile.firstName}
            </span>
          </h1>

          <p className="mt-6 h-8 font-mono text-lg text-slate-300 sm:text-xl">
            {typed}
            <span className="animate-caret text-cyan-400">|</span>
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.blurb}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Projects
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-slate-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="transition-colors hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-white/15" />
            <span className="inline-flex items-center gap-1.5 text-xs">
              <MapPinIcon className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 transition-colors hover:text-cyan-400"
      >
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
