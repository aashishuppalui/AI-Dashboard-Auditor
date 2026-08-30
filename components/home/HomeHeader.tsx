import Link from "next/link";

interface HomeHeaderProps {
  ctaLabel?: string;
}

export default function HomeHeader({
  ctaLabel = "Start a UX Review",
}: HomeHeaderProps) {
  return (
    <header className="home-header">
      <div className="home-header-inner">
        <Link href="/" className="home-brand">
          UX Review Companion
        </Link>

        <nav className="home-nav">
          <Link href="#how-it-works">How it works</Link>

          <Link href="#what-youll-get">What you'll get</Link>

          <Link href="/upload" className="home-header-cta">
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}