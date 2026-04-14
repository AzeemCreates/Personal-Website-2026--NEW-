export default function About() {
  return (
    <section id="about" className="border-b border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-text sm:text-3xl">About</h2>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            I am an IT professional with 1.5+ years supporting mission-critical
            infrastructure across government and healthcare environments. Currently
            architecting a production-scale AI system for the State of New Jersey.
            Pursuing a B.S. in Information Technology with a specialization in
            Cybersecurity at NJIT, graduating August 2026.
          </p>
        </div>
        <div className="flex items-start md:justify-end">
          <div className="h-[300px] w-[300px] rounded-md border border-border bg-zinc-700/40" />
        </div>
      </div>
    </section>
  );
}
