"use client";

import { useEffect, useState } from "react";

import ReviewHeader from "../../components/review/ReviewHeader";
import ExecutiveOverview from "../../components/executives/ExecutiveOverview";
import HighestImpactCard from "../../components/review/highest-impact/HighestImpactCard";
import ObservableEvidence from "../../components/observable-evidence/ObservableEvidence";
import RecommendationCard from "../../components/recommendations/ActionCard";

import type { ReviewResponse } from "../../schemas/report/review-schema";
import { getReview } from "../../lib/storage";

export default function ReviewPage() {
  const [reviewData, setReviewData] = useState<ReviewResponse | null>(null);

  useEffect(() => {
    const data = getReview();

    console.log("Review data:", data);

    if (data) {
      setReviewData(data);
    }
  }, []);

  if (!reviewData) {
    return (
      <main className="report-page">
        <div className="report-container">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="report-page">
      <div className="report-container">
        {/* Report Header */}
        <ReviewHeader
          reviewId={reviewData.metadata.reviewId}
          createdAt={reviewData.metadata.createdAt}
          model={reviewData.metadata.model}
        />

        {/* Executive Intelligence */}
        <ExecutiveOverview
          data={reviewData.executiveIntelligence}
          des={reviewData.des}
        />

        {/* Highest Impact Finding */}
        <section className="report-section">
          <HighestImpactCard
            finding={reviewData.highestImpactFinding}
            evidence={reviewData.supportingEvidence}
          />
        </section>

        {/* Supporting Evidence */}
        <section className="report-section">
          <ObservableEvidence
            observableEvidence={reviewData.supportingEvidence}
          />
        </section>

        {/* Priority Actions */}
        <section className="report-section">
          <RecommendationCard data={reviewData.priorityActions} />
        </section>
      </div>
    </main>
  );
}
