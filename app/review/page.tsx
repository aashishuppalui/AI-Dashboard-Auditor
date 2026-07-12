"use client";

import { useState, useEffect } from "react";

import EvidenceCard from "../../components/review/EvidenceCard";
import HighestImpactCard from "../../components/review/HighestImpactCard";

import ReviewHeader from "../../components/review/ReviewHeader";
import UnderstandingCard from "../../components/review/UnderstandingCard";
import FindingCard from "../../components/review/FindingCard";

import ExecutiveOverview from "../../components/executives/ExecutiveOverview";
// import ReviewInfoCard from "../../components/executives/ReviewInfoCard";
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

  const sectionStyle = {
  marginTop: "40px",
};
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "1400px",
      }}
    >

      {/* <ReviewHeader
  title={review.understanding.dashboardType}
  createdAt={review.metadata.createdAt}
  model={review.metadata.model}
  version={review.metadata.appVersion}
/> */}
  <ExecutiveOverview/>

<section style={sectionStyle}>
  <h2>🧠 Dashboard Understanding</h2>

  <UnderstandingCard
    understanding={review.understanding}
  />

</section>

<section style={sectionStyle}>
  <h2>⭐ Highest Impact Finding</h2>

  <FindingCard
    finding={review.finding}
  />
</section>

<section style={sectionStyle}>
  <h2>🔍 Observable Evidence</h2>

  <EvidenceCard
    evidence={review.evidence}
  />
</section>
    </main>
  );
}