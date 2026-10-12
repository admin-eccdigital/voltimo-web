"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Video recenze chlazení (na výšku, jedna centrovaná karta).
const V = {
  heading: "Přesně tenhle kurz mi chyběl",
  quote:
    "Montuju klimatizace a tepelná čerpadla a tahle příprava mi chyběla. Sedlo mi vybavení i to, že se učí prakticky na reálných zařízeních, ne jen teorie.",
  video: "/videos/videorecenze-chlazeni-1.mp4",
  poster: "/videos/videorecenze-chlazeni-1.jpg",
  len: "0:36",
};

export function ChlVideoProof() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [playing, setPlaying] = useState(false);

  return (
    <div className="lp-videos lp-videos--single">
      <div className="lp-video lp-video--portrait">
        <div
          className={`lp-video__thumb lp-video__thumb--portrait${playing ? " is-playing" : ""}`}
          onClick={() => !playing && setPlaying(true)}
        >
          {playing ? (
            <video
              src={`${base}${V.video}`}
              poster={`${base}${V.poster}`}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <>
              <Image
                src={`${base}${V.poster}`}
                alt={`Videoreference – ${V.heading}`}
                fill
                sizes="(max-width: 920px) 100vw, 340px"
                style={{ objectFit: "cover" }}
              />
              <button
                type="button"
                className="lp-video__play"
                aria-label={`Přehrát videoreferenci – ${V.heading}`}
                onClick={() => setPlaying(true)}
              >
                <Play />
              </button>
              <span className="lp-video__badge">Videoreference · {V.len}</span>
            </>
          )}
        </div>
        <div className="lp-video__cap">
          <strong>{V.heading}</strong>
          {V.quote && <p>„{V.quote}"</p>}
        </div>
      </div>
    </div>
  );
}
