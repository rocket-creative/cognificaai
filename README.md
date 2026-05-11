This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## COGAI intro video setup

The `/intro-x7q9m2` page expects the intro video, poster image, and captions to live on a CDN. The app reads the public asset URLs from environment variables and renders the video through a native HTML5 `<video>` element.

Recommended host: Cloudflare R2 with a custom domain such as `video.cogai.health`.

Required files:

```bash
intro.mp4
intro-poster.jpg
intro.vtt
```

Optional file:

```bash
intro.webm
```

Upload notes:

1. Encode the primary video as H.264 MP4 for broad browser support.
2. Add an optional WebM VP9 file for modern browsers.
3. Set `Cache-Control` to `public, max-age=31536000, immutable` on uploaded video and poster objects.
4. Set `Content-Type` explicitly on each object: `video/mp4`, `video/webm`, `image/jpeg`, and `text/vtt`.
5. Use a 1920 by 1080 JPEG poster image around 150KB to 300KB.
6. Use WebVTT captions for the English baseline, then add more caption files as needed.

Cloudflare R2 CORS:

```json
[
  {
    "AllowedOrigins": ["https://cogai.health", "https://www.cogai.health"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["Range"]
  }
]
```

The `Range` header is required for mobile Safari seeking and scrubbing. If scrubbing fails on iOS, check the bucket CORS policy first.

Environment variables:

```bash
SLACK_WEBHOOK_URL=
RESEND_API_KEY=
FROM_EMAIL=hello@cogai.health
TEAM_EMAIL=team@cogai.health
VIDEO_MP4_URL=https://video.cogai.health/intro.mp4
VIDEO_WEBM_URL=https://video.cogai.health/intro.webm
POSTER_IMAGE_URL=https://video.cogai.health/intro-poster.jpg
CAPTIONS_VTT_URL=https://video.cogai.health/intro.vtt
ROUTE_PATH=/intro-x7q9m2
```

After the CDN files are live, update the environment variables in Vercel, redeploy, and test playback on iOS Safari, Android Chrome, desktop Chrome, desktop Safari, and Firefox.
