# Above The Stack — Website (Next.js / Tailwind)

Vendor-neutral insights, playbooks, and community for MSPs.
MVP built with the App Router, Tailwind CSS, and a Discourse integration for the latest topics.

## Quick start

```bash
pnpm i # or npm i / yarn
pnpm dev # or npm run dev
```

Open http://localhost:3000.

## Environment variables

Create `.env.local` with:

```
NEXT_PUBLIC_PORTAL_URL=https://portal.abovethestack.com
DISCOURSE_URL=https://portal.abovethestack.com
DISC_API_KEY= # optional (read access)
DISC_API_USERNAME=system
```

> Without an API key the widget falls back to dummy data.

## Deploy

- Push to GitHub and import the repo in Vercel.
- Configure the `.env` variables in your Vercel Project Settings.
- (Optional) Add Vercel Analytics or PostHog.

## Next steps

- Move content to MDX + Contentlayer (to be added later).
- Implement DiscourseConnect SSO via `/api/auth/discourse` (stub still pending).
- Power the Events page with a CMS or MDX.
- Newsletter: replace `YOUR_WEB3FORMS_KEY` or connect to your provider.

## License
MIT
