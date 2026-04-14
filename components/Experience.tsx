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
    organization: "RWJ Barnabas Health — Trinitas Regional Medical Center",
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
    <section id="experience" className="py-20 px-8">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-black">Experience</h2>
        <div className="border-l-2 border-gray-200 ml-4">
          {experiences.map((item) => (
            <article
              key={`${item.title}-${item.dateRange}`}
              className="pl-6 mb-10 relative"
            >
              <span className="absolute -left-2 top-1 w-3 h-3 bg-black rounded-full" />
              <p className="text-sm text-gray-400 mb-1">{item.dateRange}</p>
              <h3 className="font-bold text-lg text-black">{item.title}</h3>
              <p className="text-gray-500 mb-2">{item.organization}</p>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
