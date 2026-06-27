import React from "react";

export const metadata = {
  title: "UX Review Companion",
  description: "AI-powered dashboard effectiveness review",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}