"use client";

import { useState } from "react";

interface SignaturePreviewProps {
  signatureHtml: string;
  employeeName: string;
}

export default function SignaturePreview({
  signatureHtml,
  employeeName,
}: SignaturePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const blob = new Blob([signatureHtml], { type: "text/html" });
      const textBlob = new Blob([signatureHtml], { type: "text/plain" });
      const data = [
        new ClipboardItem({
          "text/html": blob,
          "text/plain": textBlob,
        }),
      ];
      await navigator.clipboard.write(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = signatureHtml;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#330362",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          marginBottom: "24px",
        }}
      >
        Email Signature - {employeeName}
      </h1>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          maxWidth: "560px",
          width: "100%",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
      </div>

      <button
        onClick={handleCopy}
        style={{
          marginTop: "24px",
          padding: "12px 32px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#ffffff",
          background: copied ? "#65A30D" : "#330362",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.2s ease",
          letterSpacing: "0.5px",
        }}
      >
        {copied ? "Copied to Clipboard!" : "Copy Signature"}
      </button>

      <p
        style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "#888",
        }}
      >
        Paste directly into Gmail, Outlook, or Apple Mail signature settings.
      </p>
    </div>
  );
}
