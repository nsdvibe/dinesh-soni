/* ==========================================================================
   SITE CONTENT — single source of truth.
   Dinesh, edit EVERYTHING here: text, links, lists, testimonials, etc.
   No need to touch any component files for copy changes.

   Placeholders are marked with  ▸ REPLACE  in comments. Search for that.
   ========================================================================== */

export const site = {
  // ── Identity ────────────────────────────────────────────────────────────
  name: "Dinesh Soni",
  roles: ["Anchor", "Emcee", "Artist", "Writer"],
  // Short tag shown under the name in the hero
  tagline: "Anchor · Emcee · Artist · Writer",
  city: "Mumbai, India", // ▸ REPLACE with his city
  languagesHosted: ["Hindi", "English", "Rajasthani"], // ▸ REPLACE
  yearsExperience: 12, // ▸ REPLACE
  eventsHosted: 850, // ▸ REPLACE (used in stat counter)

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    // The headline is split into words; the {italic} word is the gold accent.
    // Keep the {curly} braces around the one word you want emphasised.
    headlineWords: ["Every", "stage", "deserves", "a", "{voice}"],
    subhead:
      "I turn events into experiences — commanding the room, reading the crowd, and giving every moment on stage the energy it deserves.",
    primaryCta: { label: "Book Me", href: "/contact" },
    secondaryCta: { label: "Watch Showreel", href: "/videos" },
    // Optional showreel video used by the hero "Watch Showreel" lightbox.
    // Use a YouTube/Vimeo URL or a local mp4 in /public/videos/.
    showreelUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // ▸ REPLACE
  },

  // ── Showreel section (home) ───────────────────────────────────────────────
  showreel: {
    eyebrow: "On Stage",
    title: "The Showreel",
    description:
      "A ninety-second cut of the rooms, the crowds, and the nights that made them.",
    // Poster image behind the play button (drop a still into /public/images/)
    poster: "/images/showreel-poster.jpg", // ▸ REPLACE
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // ▸ REPLACE
  },

  // ── What I Do (home) ──────────────────────────────────────────────────────
  whatIDo: {
    eyebrow: "What I Do",
    title: "One host. Every kind of night.",
    items: [
      {
        icon: "mic",
        title: "Emcee & Anchoring",
        text: "Weddings, corporate galas, concerts, award nights and virtual events — hosted with warmth, wit and precision.",
      },
      {
        icon: "audio-lines",
        title: "Voiceover",
        text: "A trained, versatile voice for ads, films, IVR and brand narration across languages.",
      },
      {
        icon: "pen-line",
        title: "Scriptwriting",
        text: "Show flows, award-night scripts and stage segments written to land every beat.",
      },
      {
        icon: "palette",
        title: "Art & Writing",
        text: "Poetry, articles and visual art — the quieter craft behind the man on the mic.",
      },
    ],
  },

  // ── Stats (home) ──────────────────────────────────────────────────────────
  stats: [
    { value: 850, suffix: "+", label: "Events Hosted" },
    { value: 12, suffix: "+", label: "Years on Stage" },
    { value: 3, suffix: "", label: "Languages" },
    { value: 40, suffix: "+", label: "Brands & Clients" },
  ],

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow: "About",
    title: "The man behind the microphone",
    // Full bio — a few paragraphs.
    bio: [
      "Dinesh Soni is an anchor, emcee, artist and writer who has spent over a decade turning ordinary gatherings into unforgettable events. From intimate weddings to arena-scale concerts and boardroom award nights, he brings a rare mix of command, spontaneity and genuine warmth to every stage.",
      "Fluent across languages and equally at home in front of a live crowd or a camera, Dinesh reads a room instantly and gives it exactly what it needs — a laugh, a pause, a burst of energy, or a moment of stillness.",
      "Off stage, he writes. Poetry, articles and scripts pour into the same craft that shapes his hosting: rhythm, timing and the belief that words, delivered right, can move anyone.",
    ],
    portrait: "/images/dinesh-portrait.jpg", // ▸ REPLACE with a real portrait
    values: [
      {
        icon: "sparkles",
        title: "Presence",
        text: "The room feels it the moment the mic goes live.",
      },
      {
        icon: "heart-handshake",
        title: "Warmth",
        text: "Every guest, client and crew member is treated like the star.",
      },
      {
        icon: "timer",
        title: "Precision",
        text: "Cues hit, run-sheets are honoured, nothing runs late.",
      },
      {
        icon: "flame",
        title: "Energy",
        text: "From the first word to the last, the room stays alive.",
      },
    ],
    journey: [
      { year: "2013", title: "First stage", text: "Hosted his first college festival and never looked back." },
      { year: "2016", title: "Going pro", text: "Full-time emcee for weddings and corporate events across the region." },
      { year: "2019", title: "On the big stage", text: "Anchored his first arena concert and national award night." },
      { year: "2023", title: "Voice & pen", text: "Expanded into voiceover, scriptwriting and published writing." },
    ],
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    title: "Book the right kind of magic",
    intro:
      "Whatever the room, the format or the language — there's a way I can make your event land. Here's what I bring.",
    items: [
      {
        icon: "mic",
        title: "Emcee & Anchoring",
        text: "Live hosting that keeps the room in the palm of your hand — from the first welcome to the final toast.",
        features: [
          "Weddings & sangeets",
          "Corporate events & conferences",
          "Concerts & live shows",
          "Award nights & galas",
          "Virtual & hybrid events",
        ],
      },
      {
        icon: "audio-lines",
        title: "Voiceover",
        text: "A trained, expressive voice for brands, films and broadcast — recorded to spec, delivered fast.",
        features: [
          "Commercials & radio spots",
          "Corporate & explainer films",
          "IVR & on-hold",
          "Documentary narration",
          "Multi-language delivery",
        ],
      },
      {
        icon: "pen-line",
        title: "Scriptwriting",
        text: "Show flows and scripts engineered for timing, laughs and seamless transitions.",
        features: [
          "Award-night scripts",
          "Event show flows & run sheets",
          "Anchor links & segments",
          "Brand & product launches",
          "Punch-ups & rewrites",
        ],
      },
      {
        icon: "palette",
        title: "Art & Writing",
        text: "Original poetry, articles and visual art for publications, collaborations and commissions.",
        features: [
          "Poetry & spoken word",
          "Articles & columns",
          "Original artwork",
          "Creative collaborations",
          "Commissioned pieces",
        ],
      },
    ],
  },

  // ── Portfolio / Gallery ───────────────────────────────────────────────────
  portfolio: {
    eyebrow: "Portfolio",
    title: "Nights worth remembering",
    intro: "A look at the stages, crowds and moments. Filter by the kind of event.",
    // categories power the filter chips (order matters). "All" is added automatically.
    categories: ["Weddings", "Corporate", "Concerts", "Award Nights", "Virtual"],
    // ▸ REPLACE the `src` paths — drop photos into /public/images/portfolio/
    // Aspect: "tall" | "wide" | "square" controls the masonry cell size.
    items: [
      { title: "Grand Sangeet Night", category: "Weddings", src: "/images/portfolio/p1.jpg", aspect: "tall" },
      { title: "Annual Leadership Summit", category: "Corporate", src: "/images/portfolio/p2.jpg", aspect: "wide" },
      { title: "Live in Concert", category: "Concerts", src: "/images/portfolio/p3.jpg", aspect: "square" },
      { title: "National Excellence Awards", category: "Award Nights", src: "/images/portfolio/p4.jpg", aspect: "tall" },
      { title: "Global Product Launch", category: "Corporate", src: "/images/portfolio/p5.jpg", aspect: "square" },
      { title: "Beachside Wedding", category: "Weddings", src: "/images/portfolio/p6.jpg", aspect: "wide" },
      { title: "Music Festival Main Stage", category: "Concerts", src: "/images/portfolio/p7.jpg", aspect: "tall" },
      { title: "Virtual Town Hall", category: "Virtual", src: "/images/portfolio/p8.jpg", aspect: "square" },
      { title: "Fashion Gala", category: "Award Nights", src: "/images/portfolio/p9.jpg", aspect: "wide" },
    ],
  },

  // ── Videos / Showreel page ────────────────────────────────────────────────
  videos: {
    eyebrow: "Showreel & Videos",
    title: "See it live",
    intro:
      "Full performances, highlight reels and clips. Tap any thumbnail to play in the on-site theatre.",
    // Supports YouTube, Vimeo, and self-hosted mp4 (drop into /public/videos/).
    // `type`: "youtube" | "vimeo" | "mp4". For mp4 also set `poster`.
    items: [
      { title: "Signature Showreel 2025", type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", poster: "/images/videos/v1.jpg", category: "Showreel" },
      { title: "Corporate Award Night", type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", poster: "/images/videos/v2.jpg", category: "Corporate" },
      { title: "Concert Hosting Highlights", type: "vimeo", url: "https://vimeo.com/76979871", poster: "/images/videos/v3.jpg", category: "Concerts" },
      { title: "Wedding Anchoring Moments", type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", poster: "/images/videos/v4.jpg", category: "Weddings" },
      // Example of a self-hosted mp4 — put the file at /public/videos/sample.mp4
      { title: "Behind the Mic", type: "mp4", url: "/videos/sample.mp4", poster: "/images/videos/v5.jpg", category: "Showreel" },
      { title: "Voiceover Reel", type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", poster: "/images/videos/v6.jpg", category: "Voiceover" },
    ],
  },

  // ── Writing ───────────────────────────────────────────────────────────────
  writing: {
    eyebrow: "Writing",
    title: "Words, off the stage",
    intro:
      "Poetry, articles and published work. The same rhythm that fills a room, on the page.",
    // type: "Poetry" | "Article" | "Published" | "Prose"
    pieces: [
      {
        type: "Poetry",
        title: "Under the Spotlight",
        excerpt:
          "They see the light, the poise, the ease — / but not the silence before the roar, / the breath I hold behind the door, / the years it took to look this free.",
        date: "2025",
        href: "#", // ▸ REPLACE with a link if published online
      },
      {
        type: "Article",
        title: "What a Room Really Wants",
        excerpt:
          "Every audience is a single, living thing. The job of a host is not to perform at it, but to listen to it — and then give it the exact thing it didn't know it needed.",
        date: "2024",
        href: "#",
      },
      {
        type: "Poetry",
        title: "Green Room, 11:58 PM",
        excerpt:
          "Two minutes. A mirror. A borrowed calm. / The night outside is a held breath / waiting for a name — mine — / and the small, electric yes of the crowd.",
        date: "2024",
        href: "#",
      },
      {
        type: "Published",
        title: "The Art of the Pause",
        excerpt:
          "Featured essay on comic timing and stagecraft — why the space between words often carries more than the words themselves.",
        date: "2023",
        href: "#",
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Kind Words",
    title: "What clients say",
    items: [
      {
        quote:
          "Dinesh didn't just host our event — he carried it. The energy in the room never dropped for a second. Effortlessly professional.",
        author: "Priya Malhotra",
        role: "Head of Events, Aurora Group",
      },
      {
        quote:
          "We've worked with many anchors. None read the crowd like Dinesh. Our award night ran like clockwork and felt like a celebration.",
        author: "Rahul Verma",
        role: "Marketing Director, Lumen Events",
      },
      {
        quote:
          "Our wedding felt personal, warm and beautifully paced. Guests are still talking about the emcee. Worth every rupee.",
        author: "Ananya & Karan",
        role: "Wedding, Udaipur",
      },
      {
        quote:
          "A rare host who is as sharp with a script as he is on his feet. Total pro, zero drama, unforgettable show.",
        author: "Sana Kapoor",
        role: "Producer, StageCraft Live",
      },
    ],
  },

  // ── Brands / Clients strip ────────────────────────────────────────────────
  brands: {
    eyebrow: "Trusted By",
    title: "Brands & clients",
    // ▸ REPLACE names (and optionally add logo SVGs to /public/images/brands/).
    // These render as elegant wordmark tiles until you add real logos.
    names: [
      "Aurora Group",
      "Lumen Events",
      "StageCraft Live",
      "Vertex Corp",
      "Marigold Weddings",
      "Nova Motors",
      "Zenith Media",
      "The Grand Palace",
    ],
  },

  // ── Contact / Booking ─────────────────────────────────────────────────────
  contact: {
    eyebrow: "Booking",
    title: "Let's make your event unforgettable",
    intro:
      "Tell me about your event and I'll get back within 24 hours. For urgent bookings, call or WhatsApp directly.",
    email: "hello@dineshsoni.com", // ▸ REPLACE
    phone: "+91 90000 00000", // ▸ REPLACE
    whatsapp: "+919000000000", // ▸ REPLACE (digits only, with country code)
    location: "Mumbai, India · Available worldwide", // ▸ REPLACE
    // Event types offered in the booking form dropdown
    eventTypes: [
      "Wedding / Sangeet",
      "Corporate Event",
      "Concert / Live Show",
      "Award Night / Gala",
      "Virtual / Hybrid Event",
      "Voiceover Project",
      "Other",
    ],
  },

  // ── Socials ───────────────────────────────────────────────────────────────
  // ▸ REPLACE hrefs. Leave href empty ("") to hide an icon.
  socials: [
    { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { name: "YouTube", href: "https://youtube.com/", icon: "youtube" },
    { name: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  ],

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Videos", href: "/videos" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ],

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    title: "Dinesh Soni — Anchor, Emcee, Artist & Writer",
    description:
      "Dinesh Soni is a professional anchor and emcee for weddings, corporate events, concerts and award nights — plus voiceover, scriptwriting and writing. Book a host who makes every stage come alive.",
    url: "https://dinesh-soni.web.app", // ▸ REPLACE with a custom domain later
    keywords: [
      "Dinesh Soni",
      "emcee",
      "anchor",
      "event host",
      "wedding emcee",
      "corporate anchor",
      "voiceover artist",
      "master of ceremonies",
    ],
  },
} as const;

export type Site = typeof site;
