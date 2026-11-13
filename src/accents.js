/**
 * Accent colours as complete class strings.
 *
 * Tailwind scans source files for literal class names, so a template string
 * like `text-${accent}-400` would never be generated. Keeping the full names
 * here means every class survives the production build.
 */
export const accents = {
  cyan: {
    text: 'text-cyan-300',
    dot: 'bg-cyan-400',
    ring: 'group-hover:border-cyan-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(34_211_238/0.45)]',
    chip: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
  },
  emerald: {
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
    ring: 'group-hover:border-emerald-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(52_211_153/0.45)]',
    chip: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
  },
  sky: {
    text: 'text-sky-300',
    dot: 'bg-sky-400',
    ring: 'group-hover:border-sky-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(56_189_248/0.45)]',
    chip: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
  },
  purple: {
    text: 'text-purple-300',
    dot: 'bg-purple-400',
    ring: 'group-hover:border-purple-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(192_132_252/0.45)]',
    chip: 'border-purple-400/20 bg-purple-400/10 text-purple-200',
  },
  amber: {
    text: 'text-amber-300',
    dot: 'bg-amber-400',
    ring: 'group-hover:border-amber-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(251_191_36/0.45)]',
    chip: 'border-amber-400/20 bg-amber-400/10 text-amber-200',
  },
  pink: {
    text: 'text-pink-300',
    dot: 'bg-pink-400',
    ring: 'group-hover:border-pink-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-12px_rgb(244_114_182/0.45)]',
    chip: 'border-pink-400/20 bg-pink-400/10 text-pink-200',
  },
}

export const accent = (name) => accents[name] ?? accents.cyan
