const experiences = [
  {
    title: "Cybersecurity Intern",
    organization: "State of New Jersey — DCA, Division of IT",
    dateRange: "Jan 2026 – Present",
    description:
      "Architecting phase 2 of an AI email triage system. Managing NJCICC security alerts, directing incident response for 30+ users, and validating security posture across state divisions.",
  },
  {
    title: "IT Network Engineer (Volunteer)",
    organization:
      "RWJ Barnabas Health — Trinitas Regional Medical Center",
    dateRange: "Jan 2024 – Apr 2026",
    description:
      "Supporting enterprise healthcare network infrastructure. Troubleshooting endpoint incidents, VLAN operations, Cisco wireless controllers, and Aruba mobility platforms.",
  },
  {
    title: "Executive President & Head Coach",
    organization: "NJIT League of Legends Esports",
    dateRange: "Jan 2022 – Present",
    description:
      "Led Division 1 collegiate team to WHAC Championship victory. Secured scholarship offers for roster. Challenger rank, peak 1061 LP, #99 North America.",
  },
  {
    title: "Coach",
    organization: "Jungle Kingdom",
    dateRange: "Dec 2025 – Present",
    description:
      "Elite mentorship under PerryJG (Rank 2 NA). Hosting 15+ hours weekly of Discord-based coaching events focused on discipline and goal-oriented improvement.",
  },
  {
    title: "Intern — Operations & Digital Initiatives",
    organization: "Esports Innovation Center (EIC)",
    dateRange: "Dec 2025 – Apr 2026",
    description:
      "Supporting NJ state-backed esports initiatives and FIFA World Cup 2026 digital activations.",
  },
  {
    title: "Volunteer Firefighter & IT Liaison",
    organization: "Iselin Fire Department, District 9",
    dateRange: "Jan 2025 – Apr 2026",
    description:
      "Responded to 400+ emergency calls. Maintaining Chief's CAD system for 99% uptime and firehouse network infrastructure.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 text-black">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
        <div className="relative mt-8 space-y-8 border-l border-gray-300 pl-8">
          {experiences.map((item) => (
            <article key={`${item.title}-${item.dateRange}`} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-gray-300 bg-white" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.organization}</p>
              <p className="mt-1 text-sm">{item.dateRange}</p>
              <p className="mt-2 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
