const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withProgressBar = require('next-progressbar');

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

const progressBarConfig = {
  progressBar: {
    // profile: true
  }
};

const fontsConfig = {
  enableSvg: true
};

const plugins = [
  withImages,
  [withSass, SassConfig],
  [withProgressBar, progressBarConfig],
  [withFonts, fontsConfig]
];

module.exports = withPlugins([...plugins], nextConfig);
