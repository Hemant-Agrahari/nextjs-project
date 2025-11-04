import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                YourLogo
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/get-started"
              className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

