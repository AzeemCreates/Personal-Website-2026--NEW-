export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 text-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <p className="text-base">Want to connect? Reach out directly.</p>
        <div className="flex flex-col items-center gap-4 mt-4">
          <a href="mailto:azeem.arif.karim@gmail.com" className="underline">
            azeem.arif.karim@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/azeem-a-karim/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
