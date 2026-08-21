"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { HelpCircle, ShieldCheck, Play } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { FadeIn } from "./FadeIn";

interface Fear {
  q: string;
  a: ReactNode;
  tag: string;
}

const FEARS: Fear[] = [
  {
    q: "Nikdy jsem elektro nedělal. Zvládnu to?",
    a: (
      <>
        Kurz je pro lidi <strong>bez předchozí zkušenosti</strong>. Začínáme
        od základů, vše si osaháte na reálných zařízeních.
      </>
    ),
    tag: "Začínáme od nuly",
  },
  {
    q: "Zvládnu za 10 dní to, co jiní studují roky?",
    a: (
      <>
        Učíme jen to, co <strong>reálně potřebujete v praxi</strong>. Žádná
        zbytečná teorie. 96 % účastníků projde zkouškou napoprvé.
      </>
    ),
    tag: "96 % úspěšnost",
  },
  {
    q: "Co když zjistím, že to není pro mě?",
    a: (
      <>
        Záruka prvního dne — když to po prvním dni není pro vás,{" "}
        <strong>vrátíme peníze</strong>.
      </>
    ),
    tag: "Záruka vrácení peněz",
  },
];

const VIDEOS = [
  {
    heading: "Změna oboru, i kvůli AI",
    quote:
      "Přemýšlel jsem o změně oboru, i kvůli AI. Elektriku snad nahradit nemůže.",
    video: "/videos/videorecenze-2.mp4",
    poster: "/videos/videorecenze-2.jpg",
    len: "1:04",
  },
  {
    heading: "Chtěl jsem elektrice rozumět sám",
    quote:
      "Zaujala mě elektrika, je to kombinace, zapojíte hlavu i zručnost.",
    video: "/videos/videorecenze-1.mp4",
    poster: "/videos/videorecenze-1.jpg",
    len: "1:06",
  },
];

function VideoCard({ v }: { v: (typeof VIDEOS)[number] }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [playing, setPlaying] = useState(false);

  return (
    <div className="lp-video">
      <div
        className={`lp-video__thumb${playing ? " is-playing" : ""}`}
        onClick={() => !playing && setPlaying(true)}
      >
        {playing ? (
          <video
            src={`${base}${v.video}`}
            poster={`${base}${v.poster}`}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <>
            <Image
              src={`${base}${v.poster}`}
              alt={`Videoreference – ${v.heading}`}
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <button
              type="button"
              className="lp-video__play"
              aria-label={`Přehrát videoreferenci – ${v.heading}`}
              onClick={() => setPlaying(true)}
            >
              <Play />
            </button>
            <span className="lp-video__badge">Videoreference · {v.len}</span>
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

export function LpFearsProofB() {
  return (
    <Section tone="dark">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow tone="ondark">Bez obav</Eyebrow>
          <Heading level={2} ondark>Změna oboru vypadá velká. Ale nemusí být.</Heading>
        </div>
        <div className="lp-fears">
          {FEARS.map((f) => (
            <div className="lp-fear" key={f.q}>
              <h3 className="lp-fear__q">
                <span className="lp-fear__q-ic"><HelpCircle /></span>
                {f.q}
              </h3>
              <p className="lp-fear__a">{f.a}</p>
              <span className="lp-fear__tag">
                <ShieldCheck />
                {f.tag}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div className="lp-head lp-head--center">
            <Eyebrow tone="ondark">Důkaz, ne sliby</Eyebrow>
            <Heading level={3} ondark>Čísla a lidé, co to mají za sebou.</Heading>
          </div>

          <div className="lp-proof-nums">
            <div className="lp-num">
              <strong>{LP_DATA.stats.graduates}</strong>
              <small>vyškolených absolventů</small>
            </div>
            <div className="lp-num">
              <strong>{LP_DATA.stats.successRate}</strong>
              <small>úspěšnost u zkoušky</small>
            </div>
            <div className="lp-num">
              <strong>{LP_DATA.stats.teacherExperience}</strong>
              <small>praxe lektora v oboru</small>
            </div>
          </div>

          <div className="lp-videos">
            {VIDEOS.map((v, i) => (
              <VideoCard v={v} key={i} />
            ))}
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
