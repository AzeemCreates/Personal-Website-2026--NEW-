const projects = [
  {
    title: "AI Mail Orchestration",
    description:
      "Automating email routing for the State of New Jersey using confidence-based scoring and Microsoft Outlook integration.",
    tag: "Internship",
  },
  {
    title: "Homify Property Management Portal",
    description:
      "Distributed property management system using RabbitMQ, VPN-secured database access, and U.S. Census API integration.",
    tag: "NJIT",
  },
  {
    title: "Offensive Wireless Security Lab",
    description:
      "HID injection attack research over 2.4GHz frequencies with custom directional antenna and packet capture analysis.",
    tag: "NJIT",
  },
  {
    title: "Home Network Lab",
    description:
      "VLAN-segmented home network with switch-level traffic isolation and Wireshark packet analysis.",
    tag: "NJIT",
  },
  {
    title: "LoL Game Prototypes",
    description:
      "Unity/C# gameplay prototypes with enemy-spawn systems and state management.",
    tag: "Personal",
  },
  {
    title: "Parking Reservation Web App",
    description:
      "Full-cycle booking system with integrated database tools and pricing logic.",
    tag: "Personal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 text-black">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {projects.map((project) => (
            <article key={project.title} className="rounded-md border border-gray-300 p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>
              <span className="mt-4 inline-block rounded border border-gray-300 px-2.5 py-1 text-xs">
                {project.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
