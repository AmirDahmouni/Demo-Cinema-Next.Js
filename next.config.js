/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
    env: {
      BASE_PATH:process.env.REACT_APP_BASE_PATH,
      BASE_URL:process.env.REACT_APP_BASE_URL,
      API_KEY:process.env.REACT_APP_API_KEY
      
    }
  }
}

module.exports = nextConfig
