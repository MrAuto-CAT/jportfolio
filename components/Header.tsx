import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <Image src="/images/profile.svg" alt="profile" width={48} height={48} />
        <Link href="/" className="font-semibold text-lg">
          Your Name
        </Link>
      </div>

      <nav className="flex gap-4 text-sm">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a
          href="/resume.pdf"
          className="hidden sm:inline-block px-3 py-1 border rounded hover:bg-gray-100"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
