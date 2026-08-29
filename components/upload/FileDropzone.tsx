"use client";

import { useRef, useState } from "react";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
  compact?: boolean;
}

export default function FileDropzone({
  onFileSelect,
  compact = false,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const handleFile = (file?: File) => {
    if (!file) return;

    onFileSelect(file);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFile(event.target.files?.[0]);

    event.target.value = "";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    handleFile(event.dataTransfer.files?.[0]);
  };

  return (
    <div
      className={`upload-dropzone ${
        compact ? "upload-dropzone-compact" : ""
      } ${
        isDragging
          ? "upload-dropzone-dragging"
          : ""
      }`}
      onDragEnter={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setIsDragging(false);
      }}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          inputRef.current?.click();
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.pdf"
        onChange={handleInputChange}
        hidden
      />

      {!compact && (
        <>
          <div
            className="upload-dropzone-icon"
            aria-hidden="true"
          >
            ↑
          </div>

          <h2 className="upload-dropzone-title">
            Drop your dashboard here
          </h2>

          <p className="upload-dropzone-description">
            or click to choose a file
          </p>

          <p className="upload-dropzone-meta">
            PNG, JPG, JPEG or PDF
          </p>
        </>
      )}

      {compact && (
        <>
          <span
            className="upload-dropzone-compact-icon"
            aria-hidden="true"
          >
            ↗
          </span>

          <span className="upload-dropzone-compact-text">
            Choose another file
          </span>
        </>
      )}
    </div>
  );
}