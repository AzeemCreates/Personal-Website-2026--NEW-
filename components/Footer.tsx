export default function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-muted">© 2026 Azeem Karim</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="text-sm text-muted hover:text-text">
            GitHub
          </a>
          <a href="#" aria-label="LinkedIn" className="text-sm text-muted hover:text-text">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
