"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

import HomeHeader from "../../components/home/HomeHeader";
import SiteFooter from "../../components/common/SiteFooter";
import ExecutiveIntelligenceV2 from "../../components/review-v2/ExecutiveIntelligenceV2";
import HighestImpactFindingV2 from "../../components/review-v2/HighestImpactFindingV2";
import SupportingEvidenceV2 from "../../components/review-v2/SupportingEvidenceV2";
import PriorityActionsV2 from "../../components/review-v2/PriorityActionsV2";
import DESBreakdownV2 from "../../components/review-v2/DESBreakdownV2";

import type { StoredV2Review } from "../../lib/storageV2";
import {
  getV2Review,
  saveV2Enrichment,
  setV2ReviewStatus,
} from "../../lib/storageV2";

import { generateReviewEnrichment } from "../../lib/review/enrichmentService";

export default function ReviewV2Page() {
  const [reviewData, setReviewData] =
    useState<StoredV2Review | null>(null);

  useEffect(() => {
    const data = getV2Review();

    console.log("V2 Review data:", data);

    if (!data) return;

    setReviewData(data);
    track("review_v2_viewed");
  }, []);

  useEffect(() => {
    if (!reviewData) return;

   if (
  reviewData.mode === "demo" ||
  reviewData.status !== "fast-ready" ||
  reviewData.enrichment
) {
  return;
}

    const runEnrichment = async () => {
      try {
        setV2ReviewStatus("enriching");

        setReviewData((current) =>
          current
            ? {
                ...current,
                status: "enriching",
              }
            : current
        );

        console.log("Starting V2 background enrichment...");

        const enrichment = await generateReviewEnrichment(
          reviewData.fastReview
        );

        saveV2Enrichment(enrichment);

        const updatedReview = getV2Review();

        if (updatedReview) {
          setReviewData(updatedReview);
        }

        console.log("V2 enrichment complete.");
      } catch (error) {
        console.error(
          "V2 enrichment failed:",
          error
        );

        // Reset so the user can retry on the next page load.
        setV2ReviewStatus("fast-ready");

        setReviewData((current) =>
          current
            ? {
                ...current,
                status: "fast-ready",
              }
            : current
        );
      }
    };

    runEnrichment();
  }, [reviewData]);

  if (!reviewData) {
  return (
    <main className="review-page">
      <div className="review-loading">
        <div className="review-empty-state">
          <p className="review-eyebrow">AI UX Review</p>

          <h1>No review available</h1>

          <p>
            We don&apos;t have a completed dashboard review to
            display yet.
          </p>

          <a href="/upload-v2" className="review-empty-action">
            Start a new review →
          </a>
        </div>
      </div>
    </main>
  );
}

  const fastReview = reviewData.fastReview;
  const enrichment = reviewData.enrichment;

  const createdDate = new Date().toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="review-page">
       <HomeHeader />
      <div className="report-container">
        <header className="review-header">
          <div>
            <p className="review-eyebrow">
              AI UX Review
            </p>

            <h1>Dashboard Review</h1>
{reviewData.mode === "demo" && (
  <span className="review-demo-badge">
    DEMO DATA · ILLUSTRATIVE EXAMPLE
  </span>
)}
            <p className="review-date">
              {createdDate}
            </p>
          </div>
        </header>

        <ExecutiveIntelligenceV2
          data={fastReview.executiveIntelligence}
          des={enrichment?.des}
        />

        <HighestImpactFindingV2
          finding={fastReview.highestImpactFinding}
          evidence={fastReview.supportingEvidence.evidence}
        />

        <SupportingEvidenceV2
          evidence={fastReview.supportingEvidence.evidence}
          sourceImage={reviewData.sourceImage}
        />

        {enrichment && (
          <>
            <PriorityActionsV2
              actions={enrichment.priorityActions}
            />

            <DESBreakdownV2
              des={enrichment.des}
            />
          </>
        )}

        <SiteFooter />
      </div>
    </main>
  );
}