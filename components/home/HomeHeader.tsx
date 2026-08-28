import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-header-inner">
        <Link
          href="/"
          className="home-brand"
          aria-label="UX Review Companion home"
        >
          UX Review Companion
        </Link>

        <nav
          className="home-navigation"
          aria-label="Primary navigation"
        >
          <Link href="#how-it-works">
            How it works
          </Link>

          <Link href="#what-youll-get">
            What you&apos;ll get
          </Link>

          <Link
            href="/upload"
            className="home-header-cta"
          >
            Start a UX Review
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}