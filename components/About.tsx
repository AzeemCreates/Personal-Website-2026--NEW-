export default function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-black">About</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <p className="text-gray-600 leading-relaxed">
            I am an IT professional with 1.5+ years supporting mission-critical
            infrastructure across government and healthcare environments. Currently
            architecting a production-scale AI system for the State of New Jersey.
            Pursuing a B.S. in Information Technology with a specialization in
            Cybersecurity at NJIT, graduating August 2026.
          </p>
          <div className="h-64 w-full rounded-lg bg-gray-100" />
        </div>
      </div>
    </section>
  );
}
