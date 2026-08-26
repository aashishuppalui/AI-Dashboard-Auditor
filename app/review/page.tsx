"use client";

import { useEffect, useState } from "react";

import ExecutiveOverview from "../../components/executives/ExecutiveOverview";
import HighestImpactCard from "../../components/review/highest-impact/HighestImpactCard";
import ObservableEvidence from "../../components/observable-evidence/ObservableEvidence";
import RecommendationCard from "../../components/recommendations/ActionCard";

import type { ReviewResponse } from "../../schemas/report/review-schema";
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

  const sectionStyle = {
    marginTop: "40px",
  };

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Executive Intelligence */}
      <ExecutiveOverview
        data={reviewData.executiveIntelligence}
        des={reviewData.des}
      />

      {/* Highest Impact Finding */}
      <section style={sectionStyle}>
        <HighestImpactCard
          finding={reviewData.highestImpactFinding}
        />
      </section>

      {/* Supporting Evidence */}
      <section style={sectionStyle}>
        <ObservableEvidence
          observableEvidence={reviewData.supportingEvidence}
        />
      </section>

      {/* Priority Actions */}
      <section style={sectionStyle}>
        <RecommendationCard
          data={reviewData.priorityActions}
        />
      </section>
    </main>
  );
}