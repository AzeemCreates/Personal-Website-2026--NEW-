export default function About() {
  return (
    <section id="about" className="border-b border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-text sm:text-3xl">About</h2>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            I am Azeem Karim, an IT student from New Jersey with a focus on building
            dependable technology and growing through hands-on experience. This section is
            a placeholder for a fuller professional bio, goals, and personal mission.
          </p>
        </div>
        <div className="flex items-start md:justify-end">
          <div className="h-[300px] w-[300px] rounded-md border border-border bg-zinc-700/40" />
        </div>
      </div>
    </section>
  );
}
