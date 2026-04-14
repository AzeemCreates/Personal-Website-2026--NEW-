export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-500">© 2026 Azeem Karim</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AzeemCreates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/azeem-a-karim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
