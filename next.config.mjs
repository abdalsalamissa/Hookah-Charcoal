/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The site lives under /en and /ar. Send the bare domain to English.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
