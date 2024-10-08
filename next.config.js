/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/_text.scss"; @import "./src/styles/_breakpoints.scss";`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/Henrique0498/Henrique0498'
      }
    ]
  }
}

module.exports = nextConfig
