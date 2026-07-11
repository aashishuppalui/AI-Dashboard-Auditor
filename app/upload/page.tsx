"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileDropzone from "../../components/upload/FileDropzone";
import {UploadImage} from "../../types";
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

 const handleAnalyze = async () => {
  if (!upload) return;

  try {
    setIsAnalyzing(true);
    setStatus("🧠 Understanding dashboard...");

    const review =
      await generateReview(upload.base64, setStatus);

    setStatus("📄 Opening review...");

    saveReview(review);

    await new Promise((resolve) =>
      setTimeout(resolve, 600)
    );

    router.push("/review");

  } catch (error) {
    console.error(error);

    setIsAnalyzing(false);
    setStatus("");

    alert(
      error instanceof Error
        ? error.message
        : "Analysis failed."
    );
  }
};

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Upload Dashboard</h1>

     <FileDropzone
  onFileSelect={async (selectedFile) => {
  const base64 = await fileToBase64(selectedFile);

  setUpload({
    file: selectedFile,
    base64,
    previewUrl: URL.createObjectURL(selectedFile),
    mimeType: selectedFile.type,
    fileName: selectedFile.name,
  });
}}
/>

      {upload && (
        <>
          <br />
          <p>
            <strong>Selected:</strong>
            {upload?.fileName}
          </p>
          {
            upload.mimeType.startsWith("image") && (
              <img src={upload.previewUrl}
                alt="Dashboard Preview"
                width={400}
                style={{marginTop: "1rem", border: "1px solid #ccc"}}
              />
            )
          }
        </>
      )}

      <br />
    
      <button
  disabled={!upload || isAnalyzing}
  onClick={handleAnalyze}
>
  {isAnalyzing
    ? "Analyzing..."
    : "Analyze Dashboard"}
</button>
      {isAnalyzing && (
  <div
    style={{
      marginTop: "20px",
      padding: "16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      background: "#f9fafb",
    }}
  >
    <p>{status}</p>
  </div>
)}
    </main>
  );
}