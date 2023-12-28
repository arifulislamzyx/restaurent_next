/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   esmExternals: "loose",
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  env: {
    MONGODB_URI:
      "mongodb+srv://foodking:81dOaFqNrOFQY8Tf@cluster0.1m3fl9p.mongodb.net/?retryWrites=true&w=majority",
  },
};

// webpack: (config) => {
//   config.experiments = {
//     topLevelAwait: true,
//   };
//   return config;
// },
module.exports = nextConfig;
