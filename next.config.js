/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cristianonew.ukrdevs.com", "images.remotePatterns"],
  },
  reactStrictMode: true,

  env: {
    MONGODB_URI: process.env.MONGO_URI,
    skbToken: process.env.TOKEN,
  },
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
};
webpack: (config) => {
  config.experimental = {
    topLevelAwait: true,
  };
  return config;
},
  (module.exports = nextConfig);
