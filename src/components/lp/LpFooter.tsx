"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { LpLogo } from "./LpLogo";

export function LpFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer__band">
        <div className="lp-footer__band-inner">
          <a className="lp-contact" href={LP_DATA.phoneHref}>
            <span className="lp-contact__icon">
              <Phone />
            </span>
            <span>
              <small>Zavolejte nám</small>
              <strong>{LP_DATA.phone}</strong>
            </span>
          </a>
          <a className="lp-contact" href={`mailto:${LP_DATA.email}`}>
            <span className="lp-contact__icon">
              <Mail />
            </span>
            <span>
              <small>Napište nám</small>
              <strong>{LP_DATA.email}</strong>
            </span>
          </a>
          <a
            className="lp-contact"
            href="#registrace"
            onClick={(e) => {
              e.preventDefault();
              scrollToRegistration();
            }}
          >
            <span className="lp-contact__icon">
              <MapPin />
            </span>
            <span>
              <small>Najdete nás</small>
              <strong>{LP_DATA.address}</strong>
            </span>
          </a>
        </div>
      </div>
      <div className="lp-footer__main">
        <div className="lp-footer__top">
          <div className="lp-footer__brand">
            <LpLogo inverse height={40} />
            <p>
              Středisko profesního vzdělávání v elektrotechnice. Výcvik, ne
              škola. Praxe, zkoušky a státní osvědčení Elektrikář.
            </p>
          </div>
          <Button
            variant="cta"
            size="lg"
            icon={<ArrowRight />}
            onClick={scrollToRegistration}
          >
            Rezervovat termín
          </Button>
        </div>
        <div className="lp-footer__legal">
          <span>
            © 2026 Voltimo · Středisko profesního vzdělávání · Přeštice
          </span>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/gdpr/`}>
            Zásady ochrany osobních údajů
          </a>
        </div>
      </div>
    </footer>
  );
}
