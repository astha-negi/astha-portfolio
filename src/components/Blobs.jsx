/**
 * Soft out-of-focus colour behind the page. Purely decorative, so it is
 * hidden from assistive tech and never intercepts a click.
 */
const Blobs = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div className="animate-float-slow absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-cyan-500/12 blur-3xl" />
    <div
      className="animate-float-slow absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-purple-500/12 blur-3xl"
      style={{ animationDelay: '-6s' }}
    />
    <div
      className="animate-float-slow absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-3xl"
      style={{ animationDelay: '-12s' }}
    />
  </div>
)

export default Blobs
