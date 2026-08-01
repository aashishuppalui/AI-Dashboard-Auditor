"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getReview } from "../../lib/storage";
import type { ReviewResponse } from "../../schemas/report/review-schema";

export default function UnderstandingPage() {
  const [reviewData, setReviewData] =
    useState<ReviewResponse | null>(null);

  useEffect(() => {
    const data = getReview();

    if (data) {
      setReviewData(data);
    }
  }, []);

  if (!reviewData) {
    return (
      <main style={{ padding: "2rem" }}>
        <p>Loading...</p>
      </main>
    );
  }

  const understanding =
    reviewData.executiveIntelligence;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard Understanding</h1>

      <hr />

      <p>
        <strong>Interface Type:</strong>{" "}
        {understanding.interfaceType}
      </p>

      <p>
        <strong>Primary Goal:</strong>{" "}
        {understanding.primaryGoal}
      </p>

      <p>
        <strong>Target Users:</strong>{" "}
        {understanding.targetUsers.join(", ")}
      </p>

      <p>
        <strong>Detected Components:</strong>{" "}
        {understanding.detectedComponents.join(", ")}
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {understanding.confidence}
      </p>

      <br />

      <Link href="/review">
        Continue To Review →
      </Link>
    </main>
  );
}