"use client";

import { useEffect } from "react";

export function TestyRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "48px 16px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 18, margin: 0 }}>
        Přesměrováváme vás na testovací portál Voltimo…
      </p>
      <a href={url} style={{ fontWeight: 600 }}>
        Pokračovat na testovací portál
      </a>
    </main>
  );
}
