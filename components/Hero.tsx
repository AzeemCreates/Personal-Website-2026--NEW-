export default function Hero() {
  return (
    <section id="top" className="border-b border-border bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">Portfolio</p>
        <h1 className="text-4xl font-bold text-text sm:text-5xl md:text-6xl">
          Azeem Karim
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          IT student, firefighter, and coach.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Building practical systems, serving my community, and helping others grow.
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
