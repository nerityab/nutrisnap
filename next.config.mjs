/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: '/faq', destination: '/how-it-works/faq', permanent: true }]
  },
}

export default nextConfig
