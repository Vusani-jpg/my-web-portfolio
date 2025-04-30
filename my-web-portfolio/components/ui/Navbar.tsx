import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <Link
          className="text-2xl font-bold p-4 hover:text-blue-400 opacity-80 transition-all"
          href="/"
        >
          VM
        </Link>

        <ul className="flex gap-14 items-center text-lg font-semibold">
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-400 transition-all">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-400 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="hover:text-blue-400 transition-all"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
