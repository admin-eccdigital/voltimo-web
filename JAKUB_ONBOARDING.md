# Onboarding — Voltimo web

Ahoj Jakube! Vítej v projektu Voltimo. Tento dokument tě provede setupem a běžnými úkony.

## 🎯 O projektu

**Voltimo s.r.o.** — Středisko profesního vzdělávání v elektrotechnice (Přeštice, Plzeňsko). Klient ECC Digital. Web migruje z WordPressu na Next.js 15 statický export.

**Dva repa:**
- `voltimo-staging` — preview pro klienta, vývoj
- `voltimo-web` — produkce, později voltimo.cz

**Hosting:** GitHub Pages (statický build)  
**URL staging:** https://admin-eccdigital.github.io/voltimo-staging/  
**URL produkce:** https://admin-eccdigital.github.io/voltimo-web/ (zatím, později voltimo.cz)

**Tvoje role:** Maintainer obou repos. Můžeš push do `main`, mergovat PR, editovat workflow files. Nemůžeš smazat repo nebo měnit visibility.

---

## ⚙️ Setup tvého prostředí (Mac)

### 1. Nainstaluj nástroje

```bash
# Homebrew (pokud ještě nemáš)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Git, GitHub CLI, Node.js
brew install git gh node@20

# Claude Code desktop app
# Stáhni z https://claude.com/download
```

### 2. Přihlas se do GitHubu přes CLI

```bash
gh auth login
# Vyber: GitHub.com → HTTPS → Yes (authenticate Git) → Login with web browser
```

### 3. Klonuj repa

```bash
mkdir -p ~/Projekty
cd ~/Projekty

gh repo clone admin-eccdigital/voltimo-staging
gh repo clone admin-eccdigital/voltimo-web
```

### 4. Nastav Git identitu (DŮLEŽITÉ)

V obou klonovaných adresářích nastav:

```bash
cd ~/Projekty/voltimo-staging
git config user.name "Jakub Tykal"
git config user.email "jakub.tykal@gmail.com"

cd ~/Projekty/voltimo-web
git config user.name "Jakub Tykal"
git config user.email "jakub.tykal@gmail.com"
```

### 5. Test build lokálně

```bash
cd ~/Projekty/voltimo-staging
npm install
npm run dev
# Otevři http://localhost:3000
```

Pokud se otevře web → setup je hotový.

---

## 🚀 Běžné úkony přes Claude Code

Otevři Claude Code desktop app, vyber projekt `voltimo-staging` nebo `voltimo-web`, a ptej se česky:

### Příklady promptů

#### Úprava textu na stránce
```
Změň text v sekci "Cena" na stránce /elektrikar-za-10-dni/ z 
"AKČNÍ SLEVA 20 %" na "AKČNÍ SLEVA 25 % do 31. 7. 2026".
```

#### Přidání nové sekce
```
Na homepage přidej za sekci "Proč si vybrat naši školu" nový blok 
s referencí absolventa. Použij existující komponentu z brand systému.
```

#### Aktualizace termínů kurzu
```
V souboru src/lib/lp-data.ts aktualizuj termíny kurzu:
- Smaž "Letní běh A" (proběhl)
- Přidej nový "Říjnový běh": 19.10. — 23.10. + 26.10. — 30.10. 2026, 
  kapacita "Volných míst: 6"
```

#### Commit + deploy
```
Commitni a pushni změny. Použij commit message: 
"feat: Add Říjnový běh kurzu"
```

Claude Code vše udělá za tebe — provede změnu, commitne, pushne na GitHub. GitHub Actions pak deploy automaticky.

---

## ⚠️ Co dělat opatrně

### Push do `voltimo-web` jde rovnou na produkci

Cokoliv pushneš do `main` na `voltimo-web` se objeví na produkci (`voltimo.cz` později). Proto:

1. **Vždy nejdřív testuj na `voltimo-staging`** (preview repo)
2. **Před pushem do `voltimo-web` zkontroluj** s Petrem
3. **Velké změny** dej raději přes Pull Request (i když máš Maintain access)

### Tajné údaje NIKDY do repa

- ❌ API klíče (Anthropic, Raynet, Google ...)
- ❌ Hesla
- ❌ Tokeny

Vše do `.env.local` (gitignored) nebo GitHub Secrets.

### `package.json` zmeny

Pokud měníš dependencies (`npm install ...`), vždy řekni Petrovi. Mohou ovlivnit build na CI.

---

## 📞 Kontakt na Petra

Při čemkoliv nezvyklém (build se rozbil, podivný error, klient něco chce přes tebe) → Petr.

- Email: admin@eccdigital.cz

---

## 📚 Reference

- **Brand guidelines:** `Voltimo Design System` v Claude Design
- **Pattern library:** `/src/components/brand/` (atomické primitives)
- **Tokens:** `/src/styles/tokens.css`
- **Klient produkt:** Kurz „Elektrikář za 10 dní" — viz `/elektrikar-za-10-dni/`

---

## ✅ Hotov?

Po úspěšném setupu:
1. Klon repos hotový ✅
2. `npm run dev` funguje ✅
3. První testovací commit (např. uprav drobnost v README.md a pushni) ✅

Welcome aboard! 🚀
