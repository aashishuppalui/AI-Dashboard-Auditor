"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

import HomeHeader from "../../components/home/HomeHeader";
import ExecutiveIntelligenceV2 from "../../components/review-v2/ExecutiveIntelligenceV2";
import HighestImpactFindingV2 from "../../components/review-v2/HighestImpactFindingV2";
import SupportingEvidenceV2 from "../../components/review-v2/SupportingEvidenceV2";
import PriorityActionsV2 from "../../components/review-v2/PriorityActionsV2";
import DESBreakdownV2 from "../../components/review-v2/DESBreakdownV2";
import ReviewFeedback from "../../components/review/ReviewFeedback";
import SiteFooter from "../../components/common/SiteFooter";

import type { ReviewResponse } from "../../schemas/report/review-schema";
import { getReview } from "../../lib/storage";

export default function ReviewV2Page() {
  const [reviewData, setReviewData] = useState<ReviewResponse | null>(null);

  const [sourceImage, setSourceImage] =
  useState<string>("");

  useEffect(() => {
  const data = getReview();

  console.log("V2 Review data:", data);

  if (!data) {
    return;
  }

  // New storage format
  if ("review" in data) {
    setReviewData(data.review);
    setSourceImage(data.sourceImage ?? "");
    track("review_v2_viewed");
    return;
  }

  // Legacy storage format
  setReviewData(data);
  setSourceImage("");
  track("review_v2_viewed");
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

  const createdDate = new Date(
    reviewData.metadata.createdAt,
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <main className="report-page">
      <HomeHeader ctaLabel="Start another review" />

      <div className="report-container">
        {/* =================================================
            V2 REPORT HEADER
            ================================================= */}

        <header className="v2-report-header">
          <div>
            <p className="v2-report-eyebrow">
              Dashboard Decision Effectiveness Review
            </p>

            <h1 className="v2-report-title">
                UX Review Report
            </h1>

            <p className="v2-report-description">
              AI-assisted UX Audit Report · Generated {createdDate}
            </p>
          </div>
        </header>

        {/* =================================================
            EXECUTIVE INTELLIGENCE
            ================================================= */}

        <ExecutiveIntelligenceV2
          data={reviewData.executiveIntelligence}
          des={reviewData.des}
        />

        <HighestImpactFindingV2
          finding={reviewData.highestImpactFinding}
          evidence={reviewData.supportingEvidence.evidence}
        />

        <SupportingEvidenceV2
            evidence={reviewData.supportingEvidence.evidence}
            sourceImage={sourceImage}
        />

        <PriorityActionsV2
            actions={reviewData.priorityActions}
        />

        <DESBreakdownV2
          des={reviewData.des}
        />

      </div>

      <ReviewFeedback />

      <SiteFooter />
    </main>
  );
}
