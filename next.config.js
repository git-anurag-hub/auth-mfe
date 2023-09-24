const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "kaju",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./auth": "./src/components/Auth.js",
        },
        remotes: {},
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
