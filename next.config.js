const withSass = require('@zeit/next-sass');

const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
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

const fontsConfig = {
  enableSvg: true
};

const plugins = [
  [withSass, SassConfig],
  [withFonts, fontsConfig],
  [withOptimizedImage, optimizedImageConfig]
];

module.exports = withPlugins([...plugins], nextConfig);
