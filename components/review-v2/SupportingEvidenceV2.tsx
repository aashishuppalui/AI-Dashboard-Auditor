"use client";

import { useEffect, useState } from "react";

import type {
  ObservableEvidenceItem,
} from "../../schemas/reasoning/evidence";

import {
  ChevronDown,
  ChevronUp,
  FileSearch,
  ScanSearch,
  X,
} from "lucide-react";

interface SupportingEvidenceV2Props {
  evidence: ObservableEvidenceItem[];
  sourceImage: string;
}

const INITIAL_VISIBLE_COUNT = 5;

const THUMBNAIL_WIDTH = 170;
const THUMBNAIL_HEIGHT = 96;

export default function SupportingEvidenceV2({
  evidence,
  sourceImage,
}: SupportingEvidenceV2Props) {

  const [showAll, setShowAll] =
    useState(false);

  const [selectedEvidence, setSelectedEvidence] =
    useState<ObservableEvidenceItem | null>(
      null
    );

  const visibleEvidence = showAll
    ? evidence
    : evidence.slice(
        0,
        INITIAL_VISIBLE_COUNT
      );

  const hiddenCount = Math.max(
    evidence.length -
      INITIAL_VISIBLE_COUNT,
    0
  );

  /* =========================================================
     ESCAPE
     ========================================================= */

  useEffect(() => {
    if (!selectedEvidence) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedEvidence(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedEvidence]);

  /* =========================================================
     LOCK BACKGROUND SCROLL
     ========================================================= */

  useEffect(() => {
    if (!selectedEvidence) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [selectedEvidence]);

  function openVisualEvidence(
    item: ObservableEvidenceItem
  ) {
    if (
      !sourceImage ||
      !item.region
    ) {
      return;
    }

    setSelectedEvidence(item);
  }

  function closeVisualEvidence() {
    setSelectedEvidence(null);
  }

  return (
    <>
      {/* =====================================================
          SUPPORTING EVIDENCE
          ===================================================== */}

      <section className="v2-evidence">

        <header className="v2-evidence-header">

          <div>
            <div className="report-section-heading">

              <FileSearch
                size={16}
                strokeWidth={1.8}
                className="report-section-icon"
                aria-hidden="true"
              />

              <h2 className="v2-evidence-title">
                Supporting Evidence
              </h2>

            </div>

            <p className="v2-evidence-description">
              Key observations from the interface
              that support this finding.
            </p>
          </div>

          <div className="v2-evidence-header-actions">

            <span className="v2-evidence-count">
              {evidence.length} observations
            </span>

            {hiddenCount > 0 && (
              <button
                type="button"
                className="v2-evidence-view-all"
                onClick={() =>
                  setShowAll(
                    (current) => !current
                  )
                }
                aria-expanded={showAll}
              >
                {showAll
                  ? "Show fewer"
                  : "View all"}
              </button>
            )}

          </div>

        </header>

        {/* ===================================================
            EVIDENCE ROWS
            =================================================== */}

        <div className="v2-evidence-list">

          {visibleEvidence.map((item) => {

            const region = item.region;

            return (
              <article
                key={item.id}
                className="v2-evidence-row"
              >

                {/* =========================================
                    LEFT — ID + THUMBNAIL
                    ========================================= */}

                <div className="v2-evidence-visual">

                  <div className="v2-evidence-id">
                    {item.id}
                  </div>

                  {region && sourceImage ? (
                    <button
                      type="button"
                      className="v2-evidence-thumbnail-button"
                      onClick={() =>
                        openVisualEvidence(item)
                      }
                      aria-label={`View visual evidence for ${item.id}: ${item.title}`}
                    >
                      <EvidenceThumbnail
                        sourceImage={sourceImage}
                        region={region}
                      />
                    </button>
                  ) : (
                    <div className="v2-evidence-thumbnail-placeholder">
                      No visual evidence
                    </div>
                  )}

                </div>

                {/* =========================================
                    CENTER — CONTENT
                    ========================================= */}

                <div className="v2-evidence-content">

                  <h3 className="v2-evidence-row-title">
                    {item.title}
                  </h3>

                  <p className="v2-evidence-observation">
                    {item.observation}
                  </p>

                  {region && sourceImage && (
                    <button
                      type="button"
                      className="v2-evidence-visual-button"
                      onClick={() =>
                        openVisualEvidence(item)
                      }
                    >
                      <ScanSearch
                        size={14}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                      View visual evidence
                    </button>
                  )}

                </div>

                {/* =========================================
                    RIGHT — META
                    ========================================= */}

                <div className="v2-evidence-meta">

                  <span className="v2-evidence-location">
                    {item.location}
                  </span>

                  <span className="v2-evidence-confidence">
                    {Math.round(
                      item.confidence * 100
                    )}
                    %
                  </span>

                </div>

              </article>
            );
          })}

        </div>

        {/* =================================================
            SHOW MORE
            ================================================= */}

        {hiddenCount > 0 && (
          <div className="v2-evidence-more">

            <button
              type="button"
              className="v2-evidence-more-button"
              onClick={() =>
                setShowAll(
                  (current) => !current
                )
              }
              aria-expanded={showAll}
            >

              {showAll ? (
                <>
                  <ChevronUp
                    size={14}
                    strokeWidth={1.8}
                  />
                  Show fewer observations
                </>
              ) : (
                <>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                  Show {hiddenCount} more observations
                </>
              )}

            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          VISUAL EVIDENCE MODAL
          ===================================================== */}

      {selectedEvidence?.region &&
        sourceImage && (
          <div
            className="v2-evidence-dialog-overlay"
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeVisualEvidence();
              }
            }}
          >

            <div
              className="v2-evidence-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="v2-evidence-dialog-title"
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >

              {/* =========================================
                  HEADER
                  ========================================= */}

              <header className="v2-evidence-dialog-header">

                <div>
                  <span className="v2-evidence-dialog-id">
                    {selectedEvidence.id}
                  </span>

                  <h2
                    id="v2-evidence-dialog-title"
                    className="v2-evidence-dialog-title"
                  >
                    {selectedEvidence.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="v2-evidence-dialog-close"
                  onClick={
                    closeVisualEvidence
                  }
                  aria-label="Close visual evidence"
                >
                  <X
                    size={18}
                    strokeWidth={1.7}
                  />
                </button>

              </header>

              {/* =========================================
                  IMAGE
                  ========================================= */}

              <div className="v2-evidence-dialog-image-wrap">

                <EvidenceDialogImage
                  sourceImage={sourceImage}
                  region={
                    selectedEvidence.region
                  }
                  evidenceId={
                    selectedEvidence.id
                  }
                />

              </div>

              {/* =========================================
                  FOOTER
                  ========================================= */}

              <footer className="v2-evidence-dialog-footer">

                <p>
                  The highlighted area shows
                  where this observation appears
                  in the dashboard.
                </p>

                <span>
                  {selectedEvidence.location}
                </span>

              </footer>

            </div>

          </div>
        )}
    </>
  );
}


/* =========================================================
   THUMBNAIL
   ========================================================= */

function EvidenceThumbnail({
  sourceImage,
  region,
}: {
  sourceImage: string;
  region: NonNullable<
    ObservableEvidenceItem["region"]
  >;
}) {

  const scale =
    THUMBNAIL_WIDTH /
    region.width;

  const imageWidth =
    1000 * scale;

  const imageHeight =
    1000 * scale;

  const left =
    -region.x * scale;

  const top =
    -region.y * scale;

  return (
    <div
      className="v2-evidence-thumbnail"
      style={{
        width:
          `${THUMBNAIL_WIDTH}px`,
        height:
          `${THUMBNAIL_HEIGHT}px`,
      }}
    >
      <img
        src={sourceImage}
        alt=""
        className="v2-evidence-thumbnail-image"
        style={{
          width:
            `${imageWidth}px`,
          height:
            `${imageHeight}px`,
          left:
            `${left}px`,
          top:
            `${top}px`,
        }}
      />
    </div>
  );
}


/* =========================================================
   MODAL IMAGE
   ========================================================= */

function EvidenceDialogImage({
  sourceImage,
  region,
  evidenceId,
}: {
  sourceImage: string;
  region: NonNullable<
    ObservableEvidenceItem["region"]
  >;
  evidenceId: string;
}) {

  return (
    <div className="v2-evidence-dialog-canvas">

      <img
        src={sourceImage}
        alt={`Dashboard showing visual evidence ${evidenceId}`}
        className="v2-evidence-dialog-image"
      />

      <div
        className="v2-evidence-region-highlight"
        style={{
          left:
            `${region.x / 10}%`,
          top:
            `${region.y / 10}%`,
          width:
            `${region.width / 10}%`,
          height:
            `${region.height / 10}%`,
        }}
      >

        <span className="v2-evidence-region-label">
          {evidenceId}
        </span>

      </div>

    </div>
  );
}