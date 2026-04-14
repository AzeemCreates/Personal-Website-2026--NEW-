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
    <section id="projects" className="py-20 px-8">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-black">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <span className="inline-block text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1 mt-3">
                {project.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
