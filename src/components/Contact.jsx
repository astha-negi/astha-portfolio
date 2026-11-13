import { profile } from '../data/content.js'
import Section, { Heading, Kicker, Reveal } from './Section.jsx'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './Icons.jsx'

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
]

const Contact = () => (
  <Section id="contact">
    <Reveal className="text-center">
      <Kicker index="05">Contact</Kicker>
      <Heading lead="Let's Work" accent="Together" />
      <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
        I&apos;m open to internship and new-grad opportunities, and happy to talk
        about anything full-stack. The fastest way to reach me is email.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
      >
        <MailIcon className="h-4 w-4" />
        {profile.email}
      </a>
    </Reveal>

    <ul className="mt-14 grid gap-4 sm:grid-cols-3">
      {links.map(({ label, value, href, Icon, external }, index) => (
        <Reveal as="li" key={label} delay={index * 70}>
          <a
            href={href}
            {...(external
              ? { target: '_blank', rel: 'noreferrer noopener' }
              : {})}
            className="group glass flex h-full items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors group-hover:text-cyan-300">
              <Icon className="h-4 w-4" />
            </span>

            <span className="min-w-0">
              <span className="block text-xs text-slate-500">{label}</span>
              <span className="block truncate text-sm font-semibold text-white">
                {value}
              </span>
            </span>

            <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
          </a>
        </Reveal>
      ))}
    </ul>
  </Section>
)

export default Contact
