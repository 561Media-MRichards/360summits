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
        background: "#0a0a0f",
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
      {/* Animated gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(51,3,98,0.5) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(4,14,207,0.4) 0%, rgba(4,14,207,0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,204,22,0.3) 0%, rgba(132,204,22,0.05) 50%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "30%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,128,0.15) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Header badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 22px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: "36px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#84CC16",
            boxShadow: "0 0 8px rgba(132,204,22,0.6)",
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.3px",
          }}
        >
          Email Signature - {employeeName}
        </span>
      </div>

      {/* Glassmorphic signature card */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "28px",
          padding: "52px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 8px 60px rgba(51,3,98,0.15), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
          maxWidth: "640px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Inner glow at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.5) 30%, rgba(132,204,22,0.5) 70%, transparent 100%)",
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
      </div>

      {/* Copy button */}
      <div style={{ display: "flex", gap: "12px", marginTop: "32px", alignItems: "center" }}>
        <button
          onClick={handleCopy}
          style={{
            padding: "14px 40px",
            fontSize: "14px",
            fontWeight: 700,
            color: copied ? "#0a0a0f" : "#ffffff",
            background: copied
              ? "linear-gradient(135deg, #84CC16 0%, #A3E635 100%)"
              : "linear-gradient(135deg, #330362 0%, #8B5CF6 50%, #040ECF 100%)",
            border: "1px solid " + (copied ? "rgba(132,204,22,0.3)" : "rgba(139,92,246,0.3)"),
            borderRadius: "100px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            letterSpacing: "0.3px",
            boxShadow: copied
              ? "0 4px 24px rgba(132,204,22,0.4), 0 0 60px rgba(132,204,22,0.15)"
              : "0 4px 24px rgba(51,3,98,0.4), 0 0 60px rgba(139,92,246,0.1)",
          }}
        >
          {copied ? "Copied!" : "Copy Signature"}
        </button>
      </div>

      <p
        style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.2px",
        }}
      >
        Paste directly into Gmail, Outlook, or Apple Mail signature settings
      </p>
    </div>
  );
}
