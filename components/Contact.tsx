export default function Contact() {
  return (
    <section id="contact" className="text-center py-20 px-8">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-black">Contact</h2>
        <p className="text-gray-600 mb-8">Want to connect? Reach out directly.</p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:azeem.arif.karim@gmail.com"
            className="text-black underline hover:text-gray-600"
          >
            azeem.arif.karim@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/azeem-a-karim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-gray-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
