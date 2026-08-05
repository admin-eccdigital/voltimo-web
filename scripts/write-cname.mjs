// Zapíše out/CNAME jen pro PRODUKČNÍ build (SITE_ENV=production).
// Drží custom doménu voltimo.cz v artefaktu GitHub Pages a přiměje GitHub
// vyžádat HTTPS certifikát. Na stagingu se ZÁMĚRNĚ nespustí, aby si staging
// nepřevzal produkční doménu.
import { writeFileSync } from "node:fs";

const DOMAIN = "www.voltimo.cz";

if (process.env.SITE_ENV === "production") {
  writeFileSync("out/CNAME", DOMAIN + "\n");
  console.log(`[write-cname] out/CNAME = ${DOMAIN}`);
} else {
  console.log("[write-cname] přeskočeno (není produkční build)");
}
