import { profile } from '../data/content.js'

const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row sm:px-8">
      <p className="font-mono text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs text-slate-600">
        Built with React, Vite &amp; Tailwind CSS
      </p>
    </div>
  </footer>
)

export default Footer
