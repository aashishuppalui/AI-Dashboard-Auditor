"use client";

import { useState } from "react";

import type { ObservableEvidenceItem } from "../../schemas/reasoning/evidence";

import EvidenceCard from "./EvidenceCard";

interface EvidenceListProps {
  evidence: ObservableEvidenceItem[];
}

const DEFAULT_VISIBLE_COUNT = 3;

export default function EvidenceList({
  evidence,
}: EvidenceListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreEvidence =
    evidence.length > DEFAULT_VISIBLE_COUNT;

  const hiddenCount =
    evidence.length - DEFAULT_VISIBLE_COUNT;

  return (
    <div className="evidence-list">
      {evidence.map((item, index) => {
        const isHidden =
          !isExpanded &&
          index >= DEFAULT_VISIBLE_COUNT;

        return (
          <div
            key={item.id}
            className={
              isHidden
                ? "evidence-item evidence-item-hidden"
                : "evidence-item"
            }
          >
            <EvidenceCard evidence={item} />
          </div>
        );
      })}

      {hasMoreEvidence && (
        <button
          type="button"
          className="evidence-expand-control"
          onClick={() =>
            setIsExpanded((current) => !current)
          }
          aria-expanded={isExpanded}
        >
          <span>
            {isExpanded
              ? "Show fewer observations"
              : `Show ${hiddenCount} more observations`}
          </span>

          <span
            className={`evidence-expand-icon ${
              isExpanded ? "is-expanded" : ""
            }`}
            aria-hidden="true"
          >
            ↓
          </span>
        </button>
      )}
    </div>
  );
}