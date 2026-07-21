/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so it deploys to Firebase Hosting (Spark / free plan).
  output: "export",
  images: {
    // Required for `output: export` — no server-side image optimization.
    unoptimized: true,
  },
  // Firebase Hosting `cleanUrls` serves /about from /about.html, so we keep
  // trailingSlash off and let Next emit `about.html`.
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
