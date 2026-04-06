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
        background: "linear-gradient(180deg, #FFF9EE 0%, #F3EEFF 50%, #EEF6FF 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        fontFamily: "'Plus Jakarta Sans', 'Inter', Arial, Helvetica, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,204,22,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 20px",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.6)",
          marginBottom: "32px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#84CC16",
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#44446a",
            letterSpacing: "0.2px",
          }}
        >
          Email Signature for {employeeName}
        </span>
      </div>

      {/* Signature card */}
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: "24px",
          padding: "48px",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 4px 32px rgba(51,3,98,0.06), 0 1px 4px rgba(0,0,0,0.04)",
          maxWidth: "620px",
          width: "100%",
          position: "relative",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "28px", alignItems: "center" }}>
        <button
          onClick={handleCopy}
          style={{
            padding: "14px 36px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
            background: copied
              ? "linear-gradient(135deg, #84CC16 0%, #65A30D 100%)"
              : "linear-gradient(135deg, #330362 0%, #5B1A9E 100%)",
            border: "none",
            borderRadius: "100px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            letterSpacing: "0.3px",
            boxShadow: copied
              ? "0 4px 20px rgba(132,204,22,0.3)"
              : "0 4px 20px rgba(51,3,98,0.25)",
          }}
        >
          {copied ? "Copied!" : "Copy Signature"}
        </button>
      </div>

      <p
        style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "#9393b0",
          letterSpacing: "0.2px",
        }}
      >
        Paste directly into Gmail, Outlook, or Apple Mail signature settings
      </p>
    </div>
  );
}
