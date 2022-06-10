/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  
  reactStrictMode: true,

  api: {
    bodyParser: false,
  },

  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Voxel20',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/DevVoxel',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discordapp.com/users/153258046171119616/',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://twitch.tv/Mealtimez',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:aidensmith20@gmail.com',
        permanent: true,
      },
      {
        source: '/donate',
        destination: 'https://ko-fi.com/voxel20',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/aidensmithdev/',
        permanent: true,
      },
    ]
  },

  images: {
    domains: ["i.imgur.com", "images.ctfassets.net"],
  },
}

module.exports = nextConfig
