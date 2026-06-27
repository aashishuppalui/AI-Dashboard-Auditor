"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileDropzone from "../../components/upload/FileDropzone";
import { analyzeDashboard } from "../../lib/services/analyze";

export default function UploadPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);

  const handleAnalyze = async () => {
    await analyzeDashboard();
    router.push("/understanding");
  };

  const [previewUrl, setPreviewUrl] =
  useState<string | null>(null);
  
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Upload Dashboard</h1>

     <FileDropzone
  onFileSelect={(selectedFile) => {
    setFile(selectedFile);

    setPreviewUrl(
      URL.createObjectURL(selectedFile)
    );
  }}
/>

      {file && (
        <>
          <br />
          <p>
            <strong>Selected:</strong>{" "}
            {file.name}
          </p>
          {
            previewUrl &&
            file?.type.startsWith("image") && (
              <img src={previewUrl}
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

        disabled={!file}
        onClick={handleAnalyze}
      >
        Analyze Dashboard
      </button>
    </main>
  );
}