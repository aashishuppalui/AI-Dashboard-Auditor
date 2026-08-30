import React from "react";
import { Analytics } from "@vercel/analytics/next";

import "./global.css";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}