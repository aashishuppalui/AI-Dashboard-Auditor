"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileDropzone from "../../components/upload/FileDropzone";
import { analyzeDashboard } from "../../lib/api/analyze";
import {UploadImage} from "../../types";
import { fileToBase64 } from "../../lib/utils/image";
import { analyzeEvidence } from "../../lib/api/evidence";
import { analyzeFinding } from "../../lib/api/finding";
import { buildFindingContext } from "../../lib/ai/context/finding";

export default function UploadPage() {
  const router = useRouter();

  const [upload, setUpload] =
  useState<UploadImage | null>(null);

  const handleAnalyze = async () => {
  if (!upload) return;

  try {
    const understanding =
  await analyzeDashboard(upload.base64);

console.log("Understanding");
console.log(understanding);

const evidence =
  await analyzeEvidence(upload.base64);

console.log("Evidence");
console.log(evidence);

const context =
  buildFindingContext(
    understanding,
    evidence
  );

console.log("===== FINDING CONTEXT =====");
console.log(context);

const finding =
  await analyzeFinding(context);

console.log("===== FINDING =====");
console.log(finding);

// Navigate only after everything succeeds
router.push("/understanding");

  } catch (error) {
    console.error(error);

    alert("Analysis failed.");
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

        disabled={!upload}
        onClick={handleAnalyze}
      >
        Analyze Dashboard
      </button>
    </main>
  );
}