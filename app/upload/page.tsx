"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import HomeHeader from "../../components/home/HomeHeader";
import FileDropzone from "../../components/upload/FileDropzone";

import type { UploadImage } from "../../types";

import { fileToBase64 } from "../../lib/utils/image";
import { saveReview } from "../../lib/storage";
import { generateReview } from "../../lib/review/reviewService";

export default function UploadPage() {
  const router = useRouter();

  const [upload, setUpload] =
    useState<UploadImage | null>(null);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [status, setStatus] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  /* =========================================================
     FILE SELECTION
     ========================================================= */

  const handleFileSelect = async (
    selectedFile: File
  ) => {
    try {
      setError(null);
      setStatus("");

      const base64 =
        await fileToBase64(selectedFile);

      setUpload({
        file: selectedFile,
        base64,
        previewUrl:
          URL.createObjectURL(selectedFile),
        mimeType: selectedFile.type,
        fileName: selectedFile.name,
      });

      setIsAnalyzing(false);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "We couldn't process this file."
      );
    }
  };

  /* =========================================================
     ANALYZE DASHBOARD
     ========================================================= */

  const handleAnalyze = async () => {
    if (!upload) return;

    try {
      setIsAnalyzing(true);
      setError(null);

      setStatus(
        "Understanding your dashboard..."
      );

      const review =
        await generateReview(
          upload.base64,
          setStatus
        );

      saveReview(review);

      setStatus("Opening review...");

      await new Promise((resolve) =>
        setTimeout(resolve, 600)
      );

      router.push("/review");
    } catch (error) {
      console.error(error);

      setIsAnalyzing(false);

      setError(
        error instanceof Error
          ? error.message
          : "We couldn't complete the review."
      );
    }
  };

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <main className="upload-page">

      {/* =====================================================
          GLOBAL HEADER
          ===================================================== */}

      <HomeHeader />

      <div className="upload-container">

        {/* ===================================================
            HERO
            =================================================== */}

        <header className="upload-header">
          <p className="upload-eyebrow">
            AI-ASSISTED UX REVIEW
          </p>

          <h1 className="upload-title">
            Upload your dashboard
          </h1>

          <p className="upload-description">
            Get an evidence-based review of how
            well your dashboard supports the
            decisions users need to make.
          </p>
        </header>

        {/* ===================================================
            BACK NAVIGATION
            =================================================== */}

        <div className="upload-back">
          <Link href="/">
            ← Back to home
          </Link>
        </div>

        {/* ===================================================
            WORKFLOW
            =================================================== */}

        <section className="upload-card">

          {/* =================================================
              EMPTY STATE
              ================================================= */}

          {!upload && (
            <FileDropzone
              onFileSelect={handleFileSelect}
            />
          )}

          {/* =================================================
              SELECTED STATE
              ================================================= */}

          {upload && (
            <div className="upload-selected-layout">

              {/* ---------------------------------------------
                  DASHBOARD PREVIEW
                  --------------------------------------------- */}

              <div className="upload-preview-panel">

                <p className="upload-panel-label">
                  Dashboard preview
                </p>

                {upload.mimeType.startsWith(
                  "image"
                ) ? (
                  <img
                    src={upload.previewUrl}
                    alt="Dashboard preview"
                    className="upload-preview"
                  />
                ) : (
                  <div className="upload-pdf-preview">
                    <span>PDF</span>

                    <p>
                      {upload.fileName}
                    </p>
                  </div>
                )}

              </div>

              {/* ---------------------------------------------
                  ACTION PANEL
                  --------------------------------------------- */}

              <div className="upload-action-panel">

                {/* =========================================
                    ERROR STATE
                    ========================================= */}

                {error ? (
                  <div className="upload-error-state">

                    <div
                      className="upload-error-icon"
                      aria-hidden="true"
                    >
                      !
                    </div>

                    <p className="upload-panel-label">
                      Analysis couldn't be completed
                    </p>

                    <h2 className="upload-error-title">
                      We couldn't complete the review.
                    </h2>

                    <p className="upload-error-message">
                      {error}
                    </p>

                    <div className="upload-error-actions">

                      <button
                        type="button"
                        className="upload-analyze-button"
                        onClick={handleAnalyze}
                      >
                        Try again

                        <span aria-hidden="true">
                          →
                        </span>
                      </button>

                      <FileDropzone
                        onFileSelect={
                          handleFileSelect
                        }
                        compact
                      />

                    </div>
                  </div>

                ) : isAnalyzing ? (

                  /* =======================================
                     ANALYZING STATE
                     ======================================= */

                  <div className="upload-analysis-state">

                    <div
                      className="upload-analysis-icon"
                      aria-hidden="true"
                    >
                      ✦
                    </div>

                    <p className="upload-panel-label">
                      Analyzing dashboard
                    </p>

                    <p className="upload-analysis-title">
                      Understanding your dashboard
                    </p>

                    <p className="upload-analysis-message">
                      {status}
                    </p>

                  </div>

                ) : (

                  /* =======================================
                     READY STATE
                     ======================================= */

                  <>
                    <p className="upload-panel-label">
                      Ready to review
                    </p>

                    <h2 className="upload-action-title">
                      {upload.fileName}
                    </h2>

                    <p className="upload-action-description">
                      Your dashboard is ready to be
                      analyzed for decision
                      effectiveness and UX issues.
                    </p>

                    <button
                      type="button"
                      className="upload-analyze-button"
                      onClick={handleAnalyze}
                    >
                      Analyze Dashboard

                      <span aria-hidden="true">
                        →
                      </span>
                    </button>

                    <FileDropzone
                      onFileSelect={
                        handleFileSelect
                      }
                      compact
                    />
                  </>

                )}

              </div>

            </div>
          )}

        </section>

        {/* ===================================================
            WHAT HAPPENS NEXT
            =================================================== */}

        <section
          id="how-it-works"
          className="upload-next"
        >

          <div className="upload-next-header">

            <p className="upload-next-eyebrow">
              WHAT HAPPENS NEXT
            </p>

            <h2 className="upload-next-title">
              From dashboard to decision insight.
            </h2>

          </div>

          <div className="upload-steps">

            {/* ---------------------------------------------
                STEP 01
                --------------------------------------------- */}

            <article className="upload-step">

              <span className="upload-step-number">
                01
              </span>

              <h3 className="upload-step-title">
                Upload
              </h3>

              <p className="upload-step-description">
                Provide a screenshot of the
                dashboard you want to review.
              </p>

            </article>

            {/* ---------------------------------------------
                STEP 02
                --------------------------------------------- */}

            <article className="upload-step">

              <span className="upload-step-number">
                02
              </span>

              <h3 className="upload-step-title">
                Understand
              </h3>

              <p className="upload-step-description">
                AI identifies the interface,
                users, goals, and decisions.
              </p>

            </article>

            {/* ---------------------------------------------
                STEP 03
                --------------------------------------------- */}

            <article className="upload-step">

              <span className="upload-step-number">
                03
              </span>

              <h3 className="upload-step-title">
                Review
              </h3>

              <p className="upload-step-description">
                Get evidence-backed findings
                and prioritized recommendations.
              </p>

            </article>

          </div>

        </section>

      </div>

    </main>
  );
}