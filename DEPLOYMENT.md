# Deployment Guide

This site should be deployed through the existing GitHub + Vercel workflow.

## Recommended Flow

1. Create a branch from `main`.
2. Commit the website changes.
3. Push the branch to `lcy8562375/snake-jam-website`.
4. Open a pull request.
5. Review the Vercel Preview deployment.
6. Merge to `main` after approval.

## Vercel Settings

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: default Next.js output

## Production Domain

Use `https://www.timeaccel.com` as the primary production domain.

Required public URLs:

- `https://www.timeaccel.com/`
- `https://www.timeaccel.com/about`
- `https://www.timeaccel.com/games`
- `https://www.timeaccel.com/support`
- `https://www.timeaccel.com/privacy`
- `https://www.timeaccel.com/terms`
- `https://www.timeaccel.com/robots.txt`
- `https://www.timeaccel.com/sitemap.xml`

## Apple Review URLs

- Website: `https://www.timeaccel.com/`
- Support URL: `https://www.timeaccel.com/support`
- Privacy Policy URL: `https://www.timeaccel.com/privacy`
- Terms URL: `https://www.timeaccel.com/terms`

## Notes

- Do not add placeholder App Store links.
- Do not describe an account system unless the game actually adds one.
- Keep `contact@timeaccel.com` as the public support and privacy contact.
