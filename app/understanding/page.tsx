"use client"; 

import { AnalyzeResponse } from "../../types";
import { getReview } from "../../lib/storage";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function UnderstandingPage() {
  const [reviewData, setReviewData] =
    useState<AnalyzeResponse | null>(null);

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

  const classification =
    reviewData.classification;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard Understanding</h1>

      <hr />

      <p>
        <strong>Dashboard Type:</strong>{" "}
        {classification.dashboardType}
      </p>

      <p>
        <strong>Primary User:</strong>{" "}
        {classification.primaryUser}
      </p>

      <p>
        <strong>Primary Goal:</strong>{" "}
        {classification.primaryGoal}
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {classification.confidence}%
      </p>

      <br />

      <Link href="/review">
        Continue To Review →
      </Link>
    </main>
  );
}