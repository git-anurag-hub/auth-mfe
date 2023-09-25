const NextFederationPlugin = require("@module-federation/nextjs-mf");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
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
        shared: {
          tailwindcss: {
            requiredVersion: false,
            singleton: true,
          },
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    // config.plugins.push(
    //   new MiniCssExtractPlugin({
    //     filename: "static/css/[name].css",
    //     chunkFilename: "static/css/[id].css",
    //     ignoreOrder: false, // Enable to remove warnings about conflicting order
    //   })
    // );
    return config;
  },
};

module.exports = nextConfig;
