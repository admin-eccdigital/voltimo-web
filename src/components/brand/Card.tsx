import { type ReactNode } from "react";
import Image from "next/image";

export interface CardProps {
  children?: ReactNode;
  variant?: "default" | "dark" | "featured";
  media?: string;
  mediaAlt?: string;
  interactive?: boolean;
  href?: string;
  className?: string;
}

export function Card({
  children,
  variant = "default",
  media,
  mediaAlt,
  interactive = false,
  href,
  className = "",
}: CardProps) {
  const classes = [
    "vlt-card",
    variant !== "default" && `vlt-card--${variant}`,
    (interactive || href) && "vlt-card--interactive",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {media && (
        <Image
          className="vlt-card__media"
          src={media}
          alt={mediaAlt ?? ""}
          width={640}
          height={400}
        />
      )}
      <div className="vlt-card__body">{children}</div>
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }
  return (
    <div className={classes}>
      {inner}
    </div>
  );
}
