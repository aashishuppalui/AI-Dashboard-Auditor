"use client";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
}

export default function FileDropzone({
  onFileSelect,
}: FileDropzoneProps) {
  return (
    <input
      type="file"
      accept=".png,.jpg,.jpeg,.pdf"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (file) {
          onFileSelect(file);
        }
      }}
    />
  );
}