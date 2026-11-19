# Testovací portál Voltimo (online procvičování)

Stručný rozcestník pro každého, kdo otevře tenhle repozitář a ptá se, co znamenají
commity „testy" a kde se vzaly testové otázky. (Doplněno 11/2026.)

## Co to je

Voltimo spustilo online portál na procvičování testových otázek (princip jako
autoškola) na vlastní subdoméně **https://testy.voltimo.cz**. Běží na samostatném
serveru a **není součástí tohoto repozitáře**: tenhle web je statický export na
GitHub Pages, takže přihlašování uživatelů, časově omezený přístup ani evidenci
výsledků sám neumí. Proto samostatný server.

- Nástroj: **Moodle** (open-source LMS) na samostatném VPS.
- Přístup jen po přihlášení, zásobník otázek je neveřejný (vyžaduje to vyhláška
  243/2023 Sb.). Účty se zakládají ručně platícím kurzantům, žádná veřejná registrace.

## Co je na portálu hotové (k 11/2026)

- Kurz **F-plyny – příprava na zkoušku (A1)**.
- **262 otázek** v bance: 250 teoretických (výběrové A/B/C, u každé vysvětlení) + 12
  praktických úloh. Zdroj: oficiální přílohy od Hostovského (Příloha č. 4 = teorie,
  Příloha č. 5 = praktické úlohy).
- Procvičovací test (30 náhodných otázek, okamžitá zpětná vazba, neomezené pokusy).
- Další obory (elektro § 6 a § 7, chlazení) se budou přidávat postupně.

## Jak to souvisí s tímhle webem

- Stránka **`/testy`** (`src/app/testy/`) je rozcestník: vysvětlí, pro koho portál je,
  a pošle na přihlášení na testy.voltimo.cz. Má `noindex` a není v sitemap.
- V hlavičce (`src/components/site/SiteHeader.tsx`) je odkaz **Online testy** —
  na desktopu vpravo vedle CTA, na mobilu v sekci „Pro studenty".

## Kde žije administrace (mimo tenhle repozitář)

- Server, Moodle, obsah otázek i účty kurzantů spravuje Voltimo mimo git. Přístupové
  údaje (hesla, tokeny) nejsou a nesmí být v repozitáři.
- Zakládání přístupů kurzantům běží z Google Sheetu (přihlášky) přes Apps Script do
  Moodle (web services). Taky mimo tenhle repozitář.
- DNS `testy.voltimo.cz` je u správce domény voltimo.cz (ECC Digital).

Tenhle soubor je jen orientační, ne provozní dokumentace serveru.
