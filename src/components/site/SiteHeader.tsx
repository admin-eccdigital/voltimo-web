"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";

type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Úvod", href: "/" },
  {
    label: "Elektro",
    href: "/elektrikar-za-10-dni/",
    children: [
      { label: "Elektrikář za 10 dní", href: "/elektrikar-za-10-dni/" },
      { label: "Rekvalifikace přes ÚP", href: "/rekvalifikace/" },
    ],
  },
  { label: "Chlazení", href: "/chlazeni/" },
  { label: "Poradna", href: "/poradna/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = pathname.replace(basePath, "") || "/";

  // Hlavní CTA se řídí podle stránky, na které jsme.
  const cta =
    normalizedPath === "/elektrikar-za-10-dni/"
      ? { label: "Rezervovat termín", href: `${basePath}/elektrikar-za-10-dni/#registrace` }
      : normalizedPath === "/chlazeni/"
        ? { label: "Poptat termín", href: `${basePath}/chlazeni/#poptavka` }
        : normalizedPath === "/rekvalifikace/"
          ? { label: "Mám zájem", href: `${basePath}/rekvalifikace/#poptavka` }
          : { label: "Vybrat kurz", href: `${basePath}/#kurzy` };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo" aria-label="Voltimo — domů">
            <img
              src={`${basePath}/logo/logo-voltimo.svg`}
              alt="Voltimo"
              width={180}
              height={48}
            />
          </Link>

          <nav className="site-header__nav" aria-label="Hlavní navigace">
            <ul className="site-header__nav-list">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  const groupActive = item.children.some(
                    (c) => c.href === normalizedPath,
                  );
                  return (
                    <li
                      key={item.href}
                      className={`site-header__has-drop${dropOpen ? " site-header__has-drop--open" : ""}`}
                    >
                      <button
                        type="button"
                        className={`site-header__nav-link site-header__drop-toggle${groupActive ? " site-header__nav-link--active" : ""}`}
                        onClick={() => setDropOpen((o) => !o)}
                        aria-expanded={dropOpen}
                      >
                        {item.label}
                        <ChevronDown />
                      </button>
                      <ul className="site-header__drop">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="site-header__drop-link">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`site-header__nav-link${normalizedPath === item.href ? " site-header__nav-link--active" : ""}`}
                      aria-current={normalizedPath === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <span className="site-header__spacer" />

          <a className="site-header__phone" href={LP_DATA.phoneHref}>
            <Phone />
            <span>{LP_DATA.phone}</span>
          </a>

          <Button
            variant="cta"
            size="sm"
            icon={<ArrowRight />}
            href={cta.href}
            className="site-header__cta"
          >
            {cta.label}
          </Button>

          <button
            className="site-header__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`site-header__mobile${menuOpen ? " site-header__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobilní navigace">
          <ul className="site-header__mobile-list">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <li key={item.href}>
                    <span className="site-header__mobile-group">{item.label}</span>
                    <ul className="site-header__mobile-sublist">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={`site-header__mobile-link site-header__mobile-link--sub${normalizedPath === c.href ? " site-header__mobile-link--active" : ""}`}
                            aria-current={normalizedPath === c.href ? "page" : undefined}
                            onClick={() => setMenuOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`site-header__mobile-link${normalizedPath === item.href ? " site-header__mobile-link--active" : ""}`}
                    aria-current={normalizedPath === item.href ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a className="site-header__mobile-phone" href={LP_DATA.phoneHref}>
          <Phone />
          <span>{LP_DATA.phone}</span>
        </a>
        <Button
          variant="cta"
          size="lg"
          icon={<ArrowRight />}
          href={cta.href}
          block
          onClick={() => setMenuOpen(false)}
        >
          {cta.label}
        </Button>
      </div>
    </>
  );
}
