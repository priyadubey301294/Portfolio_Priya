import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">

      <Link href="/" className="text-xl font-bold pl-3">
        Priya Dubey
      </Link>

      <div className="flex gap-6 text-gray-600 pr-3">

        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>

      </div>

    </nav>
  );
}