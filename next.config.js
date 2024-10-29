/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cristianonew.ukrdevs.com", "images.remotePatterns"],
  },
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://foodking:81dOaFqNrOFQY8Tf@cluster0.1m3fl9p.mongodb.net/?retryWrites=true&w=majority",
    skbToken: "RWoEGeu5PmkDYRg5dDN9V6msANiqr1TrF9D1fQZY",
  },
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
