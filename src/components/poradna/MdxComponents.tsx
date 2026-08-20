import React from "react";
import { slugifyHeading } from "@/lib/poradna";
import { CestaKvalifikace } from "./CestaInfografika";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function toText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (React.isValidElement(node)) {
    return toText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

function H2({ children }: { children?: React.ReactNode }) {
  return <h2 id={slugifyHeading(toText(children))}>{children}</h2>;
}

function H3({ children }: { children?: React.ReactNode }) {
  return <h3 id={slugifyHeading(toText(children))}>{children}</h3>;
}

function A({
  href = "",
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const internal = href.startsWith("/");
  const external = href.startsWith("http");
  const to = internal ? `${basePath}${href}` : href;
  return (
    <a
      href={to}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

// Box "Z praxe Voltimo" — konkrétní zkušenost lektora.
export function Praxe({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="poradna-box poradna-box--praxe">
      <span className="poradna-box__tag">Z praxe Voltimo</span>
      <div className="poradna-box__body">{children}</div>
    </aside>
  );
}

// Box "Pozor / časté omyly".
export function Pozor({ children }: { children?: React.ReactNode }) {
  return <aside className="poradna-box poradna-box--pozor">{children}</aside>;
}

// Obal pro číslovaný postup (styluje vnořený <ol>).
export function Postup({ children }: { children?: React.ReactNode }) {
  return <div className="poradna-steps">{children}</div>;
}

// Fotka v textu s popiskem.
export function Foto({
  src = "",
  alt = "",
  caption,
}: {
  src?: string;
  alt?: string;
  caption?: string;
}) {
  const url = src.startsWith("http") ? src : `${basePath}/photos/${src}`;
  return (
    <figure className="poradna-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// Klíčová myšlenka / vytažená věta (pull-quote).
export function Klic({ children }: { children?: React.ReactNode }) {
  return <p className="poradna-key">{children}</p>;
}

// Kompaktní výzva k akci uprostřed článku.
export function CtaInline({
  heading = "",
  label = "",
  href = "",
}: {
  heading?: string;
  label?: string;
  href?: string;
}) {
  const url = href.startsWith("/") ? `${basePath}${href}` : href;
  return (
    <aside className="poradna-cta-inline">
      <span className="poradna-cta-inline__text">{heading}</span>
      <a className="poradna-cta-inline__btn" href={url}>
        {label}
      </a>
    </aside>
  );
}

export const mdxComponents = {
  h2: H2,
  h3: H3,
  a: A,
  Praxe,
  Pozor,
  Postup,
  Foto,
  Klic,
  CtaInline,
  CestaKvalifikace,
};
