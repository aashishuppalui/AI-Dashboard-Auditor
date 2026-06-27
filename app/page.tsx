import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>UX Review Companion</h1>

      <p>
        Upload a dashboard and receive an evidence-based UX review.
      </p>

      <br />

      <Link href="/upload">
        Start Review →
      </Link>
    </main>
  );
}