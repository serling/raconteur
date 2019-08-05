const withSass = require('@zeit/next-sass');

const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withSize = require('next-size');
const withProgressBar = require('next-progressbar');
const withOptimizedImage = require('next-optimized-images');

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

const optimizedImageConfig = {
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif']
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
  withSize,
  [withSass, SassConfig],
  [withProgressBar, progressBarConfig],
  [withFonts, fontsConfig],
  [withOptimizedImage, optimizedImageConfig]
];

module.exports = withPlugins([...plugins], nextConfig);
