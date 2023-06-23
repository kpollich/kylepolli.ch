"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkClass = "hover:text-cyan-600 decoration-cyan-600 underline-offset-4 decoration-2";

  return (
    <nav className="flex space-x-2 px-16 py-8 text-lg">
      <Link href="/" className={pathname === "/" ? `${linkClass} underline` : linkClass}>
        Home
      </Link>
      <Link
        href="/blog"
        className={pathname.startsWith("/blog") ? `${linkClass} underline` : linkClass}
      >
        Blog
      </Link>
    </nav>
  );
}
