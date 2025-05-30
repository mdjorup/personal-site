import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <p className="text-3xl">Michael Djorup</p>
      <p className="text-gray-600">
        Software Engineer @{" "}
        <Link
          href="https://www.hazelai.com/"
          target="_blank"
          className="underline text-blue-500"
        >
          Hazel
        </Link>
      </p>

      <section>
        <p className="text-xl">About</p>
        <p className="text-gray-600">
          I've spent the last few years building tools for humans and systems
          that support them. I like solving practical problems with clear
          software.
        </p>
      </section>

      <section>
        <p className="text-xl">Work</p>
        <ul className="list-disc list-inside">
          <li><span className="font-bold">Hazel AI</span> (current) – building AI procurement software</li>
          <li><span className="font-bold">Palantir</span> – worked on frontend build systems</li>
          <li><span className="font-bold">Gruvian</span> – AdTech startup I cofounded</li>
        </ul>
      </section>

      <section>
        <p className="text-xl">Thoughts</p>
        <p>None Yet</p>
      </section>
    </main>
  );
}

