# Dinesh Soni — Personal Brand Website

A cinematic, animated personal website for **Dinesh Soni** — Anchor, Emcee, Artist & Writer.
Built as a static-exported Next.js app, deployable free on Firebase Hosting (Spark plan).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll · Firebase (Firestore + Hosting).

---

## ✍️ Editing content (the easy part)

**All copy, links, lists, testimonials, services, etc. live in one file:**

```
src/lib/site.ts
```

Change text there and everything updates. Search that file for `▸ REPLACE` to
find every placeholder that needs a real value (city, languages, email, phone,
social links, showreel URL, etc.).

---

## 🖼️ Where to drop real assets

Create a `public/` folder (already present) and drop files at these paths.
Until you do, elegant on-brand placeholder tiles show automatically — nothing
looks broken.

| What | Put it here | Referenced in `site.ts` |
|------|-------------|--------------------------|
| Main portrait | `public/images/dinesh-portrait.jpg` | `about.portrait` |
| Showreel poster still | `public/images/showreel-poster.jpg` | `showreel.poster` |
| Portfolio photos | `public/images/portfolio/p1.jpg` … `p9.jpg` | `portfolio.items[].src` |
| Video thumbnails | `public/images/videos/v1.jpg` … `v6.jpg` | `videos.items[].poster` |
| Self-hosted video | `public/videos/sample.mp4` | `videos.items[].url` (type `mp4`) |
| Brand logos (optional) | `public/images/brands/` | `brands.names` (wordmarks by default) |
| Favicon (optional) | `src/app/icon.png` (or `favicon.ico`) | auto |

**Videos:** each item in `videos.items` can be `youtube`, `vimeo`, or `mp4`.
YouTube/Vimeo just need the normal share URL. Self-hosted mp4s play in the
on-site theatre lightbox.

---

## 🧑‍💻 Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

---

## 🔐 Environment / Firebase config

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
2. In the [Firebase Console](https://console.firebase.google.com) → **Project
   settings** → your **Web app** → *SDK setup and configuration* → copy the
   config values into `.env.local`.
3. (Optional) For **email alerts** on new enquiries, get a free key at
   [web3forms.com](https://web3forms.com) and paste it as
   `NEXT_PUBLIC_WEB3FORMS_KEY`. Leave blank to disable — enquiries still save
   to Firestore.

> `.env.local` is gitignored and must **never** be committed.

---

## 📨 Contact / Booking form

Submissions are written to the Firestore collection **`enquiries`**.
Security rules (`firestore.rules`) allow `create` only (with validation) and
**deny all client reads** — view enquiries in the Firebase Console.

Deploy the rules whenever they change:

```bash
npm run deploy:rules
```

---

## 🚀 Deploy to Firebase Hosting

One-time setup:

```bash
npm i -g firebase-tools
firebase login
# Tell the project which Firebase project to use (creates .firebaserc):
firebase use --add        # pick your project, alias it "default"
```

Then, any time:

```bash
npm run deploy            # builds + deploys hosting
npm run deploy:all        # builds + deploys hosting AND firestore rules
```

Hosting config (`firebase.json`) serves the static export from `out/` with
`cleanUrls` (so `/about` works without `.html`).

---

## 💾 Backup to GitHub

```bash
npm run backup
```

This stages everything, commits with a timestamp, `pull --rebase`es, and
pushes. Run it whenever you want a checkpoint. First-time git setup:

```bash
git init
git branch -M main
git remote add origin <your-repo-url>
npm run backup
```

---

## 📁 Project structure

```
src/
  app/              # App Router pages (home, about, services, portfolio,
                    #   videos, writing, contact) + layout + globals.css
  components/
    home/           # Home page sections
    layout/         # Navbar, Footer
    ui/             # Reusable animated primitives (Reveal, MaskedHeadline,
                    #   Counter, Marquee, Particles, VideoLightbox, buttons…)
    portfolio/      # Filterable gallery grid
    videos/         # Filterable video grid
    contact/        # Booking form (Firestore + Web3Forms)
    providers/      # Lenis smooth-scroll provider
  lib/
    site.ts         # ← ALL CONTENT lives here
    firebase.ts     # Firebase init (lazy, safe if unconfigured)
    utils.ts        # helpers (video URL parsing, cn)
    icons.tsx       # SVG icon map (lucide) — no emojis
firebase.json       # Hosting + Firestore config
firestore.rules     # enquiries: create-only, no client reads
scripts/backup.mjs  # npm run backup
```

---

Built with care for the stage. 🎙️
