"use client";

import { useState, useEffect } from "react";

import EvidenceCard from "../../components/review/EvidenceCard";
import UnderstandingCard from "../../components/review/UnderstandingCard";
import FindingCard from "../../components/review/highest-impact/FindingCard";

import ExecutiveOverview from "../../components/executives/ExecutiveOverview";
import PriorityActionsSection from "../../components/action/PriorityActionsSection";

import { ReviewResponse } from "../../schemas/report/review-schema";
import { getReview } from "../../lib/storage";

export default function ReviewPage() {
  const [reviewData, setReviewData] =
    useState<ReviewResponse | null>(null);

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
    understanding={reviewData.aiUnderstanding}
  />

</section>

<section style={sectionStyle}>
<PriorityActionsSection
  actions={reviewData.recommendations}
/>
</section>

<section style={sectionStyle}>
  <h2>⭐ Highest Impact Finding</h2>
  

  <FindingCard
    finding={reviewData.highestImpactFinding}
  />
</section>

<section style={sectionStyle}>
  <h2>🔍 Observable Evidence</h2>

  <EvidenceCard
    evidence={reviewData.supportingEvidence}
  />
</section>
    </main>
  );
}