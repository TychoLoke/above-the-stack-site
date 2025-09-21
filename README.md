# Above The Stack — Website (Next.js / Tailwind)

Vendor‑neutrale inzichten, playbooks en community voor MSP’s.  
MVP met App Router, Tailwind, en Discourse integratie (laatste topics).

## Snel starten

```bash
pnpm i # of npm i / yarn
pnpm dev # of npm run dev
```

Open http://localhost:3000

## Omgevingsvariabelen

Maak `.env.local` met:

```
NEXT_PUBLIC_PORTAL_URL=https://portal.abovethestack.com
DISCOURSE_URL=https://portal.abovethestack.com
DISC_API_KEY= # optioneel (leesrechten)
DISC_API_USERNAME=system
```

> Zonder API key valt de widget terug op dummy data.

## Deploy

- Push naar GitHub en importeer in Vercel.
- Zet `.env` variabelen in Vercel Project Settings.
- (Optioneel) Vercel Analytics/PostHog toevoegen.

## Verder bouwen

- Content als MDX + Contentlayer (later toevoegen).
- SSO met Discourse (DiscourseConnect) via `/api/auth/discourse` (stub nog toevoegen).
- Events pagina koppelen aan een CMS of MDX.
- Nieuwsbrief: vervang `YOUR_WEB3FORMS_KEY` of koppel aan je provider.
```

## Licentie
MIT
