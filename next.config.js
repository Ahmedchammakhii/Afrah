/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = nextConfig;
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/sounds/',
        outputPath: 'static/sounds/',
        name: '[name].[ext]',
      },
    });

    return config;
  },
});
