const links = [
  { label: "About", href: "#about", disabled: false },
  { label: "Projects", href: "#projects", disabled: true },
  { label: "Experience", href: "#experience", disabled: false },
  { label: "Contact", href: "#contact", disabled: false },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide text-text">
          AZEEM KARIM
        </a>
        <ul className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-disabled={link.disabled}
                className={`text-sm text-muted ${
                  link.disabled
                    ? "pointer-events-none opacity-50"
                    : "hover:text-text focus-visible:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
