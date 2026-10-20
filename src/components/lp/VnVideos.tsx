"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Vid = {
  heading: string;
  quote: string;
  video: string;
  poster: string;
  len: string;
  portrait?: boolean;
};

const ELEKTRO: Vid[] = [
  {
    heading: "Změna oboru, i kvůli AI",
    quote: "Přemýšlel jsem o změně oboru, i kvůli AI. Elektriku nahradit nemůže. Znalosti jsem si konečně ucelil v kuse.",
    video: "/videos/videorecenze-2.mp4",
    poster: "/videos/videorecenze-2.jpg",
    len: "1:04",
  },
  {
    heading: "Chtěl jsem elektrice rozumět sám",
    quote: "Zaujala mě elektrika, kombinace hlavy i zručnosti. Díky přípravě šla zkouška složit jednodušeji, než jsem čekal.",
    video: "/videos/videorecenze-1.mp4",
    poster: "/videos/videorecenze-1.jpg",
    len: "1:06",
  },
];

const CHLAZENI: Vid = {
  heading: "Přesně tenhle kurz mi chyběl",
  quote: "Montuju klimatizace a tepelná čerpadla a tahle příprava mi chyběla. Sedlo mi vybavení i praktická výuka.",
  video: "/videos/videorecenze-chlazeni-1.mp4",
  poster: "/videos/videorecenze-chlazeni-1.jpg",
  len: "0:36",
  portrait: true,
};

function VideoCard({ v }: { v: Vid }) {
  const [playing, setPlaying] = useState(false);
  const thumbCls = `lp-video__thumb${v.portrait ? " lp-video__thumb--portrait" : ""}${playing ? " is-playing" : ""}`;
  return (
    <div className={`lp-video${v.portrait ? " lp-video--portrait" : ""}`}>
      <div className={thumbCls} onClick={() => !playing && setPlaying(true)}>
        {playing ? (
          <video src={`${base}${v.video}`} poster={`${base}${v.poster}`} controls autoPlay playsInline />
        ) : (
          <>
            <Image
              src={`${base}${v.poster}`}
              alt={`Videorecenze – ${v.heading}`}
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <button
              type="button"
              className="lp-video__play"
              aria-label={`Přehrát videorecenzi – ${v.heading}`}
              onClick={() => setPlaying(true)}
            >
              <Play />
            </button>
            <span className="lp-video__badge">Videorecenze · {v.len}</span>
          </>
        )}
      </div>
      <div className="lp-video__cap">
        <strong>{v.heading}</strong>
        <p>„{v.quote}"</p>
      </div>
    </div>
  );
}

export function VnVideos() {
  return (
    <>
      <div className="lp-videos">
        {ELEKTRO.map((v) => (
          <VideoCard v={v} key={v.video} />
        ))}
      </div>
      <div className="lp-videos lp-videos--single" style={{ marginTop: "24px" }}>
        <VideoCard v={CHLAZENI} />
      </div>
    </>
  );
}
