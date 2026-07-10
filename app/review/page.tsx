"use client";

import { useState, useEffect } from "react";

import EvidenceCard from "../../components/review/EvidenceCard";
import HighestImpactCard from "../../components/review/HighestImpactCard";
// import InsightCard from "../../components/review/InsightCard";
// import DESCard from "../../components/review/DESCard";
// import RecommendationCard from "../../components/review/RecommendationCard";

import { Review } from "../../schemas/review";
import { getReview } from "../../lib/storage";

export default function ReviewPage() {
  const [reviewData, setReviewData] =
    useState<Review | null>(null);

  useEffect(() => {
    const data = getReview();

    console.log("Review data:", data);

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

  const review = reviewData;

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "900px",
      }}
    >
      <h1>UX Review Results</h1>

      <hr />

      <HighestImpactCard
        finding={review.finding}
      />

      <hr />

      <EvidenceCard
        evidence={review.evidence.evidence}
        confidence={review.evidence.confidence}
      />

      {/* <hr />

      <InsightCard
        insight={review.insight}
      />

      <hr />

      <DESCard
        des={review.des}
        potentialDes={review.potentialDes}
      />

      <hr />

      <RecommendationCard
        recommendation={
          review.recommendation
        }
      /> */}
    </main>
  );
}