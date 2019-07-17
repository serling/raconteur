const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
  webpack: (config, options) => {
    return config;
  }
};

const SassConfig = {
  cssModules: false,
  sassLoaderOptions: {
    includePaths: ['./scss']
  },
  postcssLoaderOptions: {
    sourcemaps: true
  }
};

const plugins = [withImages, [withSass, SassConfig]];

module.exports = withPlugins([...plugins], nextConfig);
