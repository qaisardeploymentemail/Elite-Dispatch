/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone mode for Docker runtime; Vercel handles serverless deployment natively
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
  reactStrictMode: true,
  poweredByHeader: false, // don't advertise Next.js
  // Disable the server-side Image Optimizer: removes the sharp/libvips attack
  // surface + the image-optimizer SSRF/DoS advisories. Images are pre-sized, so
  // next/image just serves them directly.
  images: { unoptimized: true },
};

export default nextConfig;
