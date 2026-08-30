"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

type FeedbackChoice = "positive" | "negative";

export default function ReviewFeedback() {
  const [choice, setChoice] =
    useState<FeedbackChoice | null>(null);

  const [feedback, setFeedback] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const handleChoice = (
    selectedChoice: FeedbackChoice
  ) => {
    setChoice(selectedChoice);

    track(
      selectedChoice === "positive"
        ? "feedback_positive"
        : "feedback_negative"
    );
  };

  const handleSubmit = () => {
    if (!choice) {
      return;
    }

    track("feedback_submitted");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="review-feedback">
        <div className="review-feedback-inner">
          <p className="review-feedback-thank-you">
            Thanks for helping make UX Review Companion better. ❤️
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="review-feedback">
      <div className="review-feedback-inner">
        <div className="review-feedback-heading">
          <h2>Was this review useful?</h2>

          <p>
            Your feedback helps me understand how useful
            this review is in real UX work.
          </p>
        </div>

        <div
          className="review-feedback-options"
          role="group"
          aria-label="Review usefulness"
        >
          <button
            type="button"
            className={`review-feedback-option ${
              choice === "positive"
                ? "is-selected"
                : ""
            }`}
            onClick={() =>
              handleChoice("positive")
            }
          >
            <span aria-hidden="true">👍</span>
            <span>Yes, useful</span>
          </button>

          <button
            type="button"
            className={`review-feedback-option ${
              choice === "negative"
                ? "is-selected"
                : ""
            }`}
            onClick={() =>
              handleChoice("negative")
            }
          >
            <span aria-hidden="true">👎</span>
            <span>Not really</span>
          </button>
        </div>

        {choice && (
          <div className="review-feedback-followup">
            <label htmlFor="review-feedback-input">
              {choice === "positive"
                ? "What did you find useful?"
                : "What could make the review more useful?"}
            </label>

            <textarea
              id="review-feedback-input"
              value={feedback}
              onChange={(event) =>
                setFeedback(event.target.value)
              }
              placeholder="Optional"
              rows={4}
            />

            <button
              type="button"
              className="review-feedback-submit"
              onClick={handleSubmit}
            >
              Send feedback
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}