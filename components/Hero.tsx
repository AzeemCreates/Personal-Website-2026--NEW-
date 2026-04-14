export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center py-20 px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-black">Azeem Karim</h1>
        <p className="text-xl text-gray-500 mb-2">
          IT Professional · Cybersecurity · Firefighter · Collegiate Esports Coach
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Building mission-critical systems, serving my community, and competing at the highest level.
        </p>
        <a
          href="#about"
          className="inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
