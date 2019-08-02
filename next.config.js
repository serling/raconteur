const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer');

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

const progressBarConfig = {
  progressBar: {
    // profile: true
  }
};

const fontsConfig = {
  enableSvg: true
};

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true'
};

const optimizedImageConfig = {
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  defaultImageLoader: 'responsive-loader',
  responsive: {
    // https://github.com/herrstucki/responsive-loader
    optimizeImagesInDev: false,
    sizes: [600, 1200]
  }
};

const plugins = [
  withSize,
  [withSass, SassConfig],
  [withProgressBar, progressBarConfig],
  [withFonts, fontsConfig],
  [withBundleAnalyzer, bundleAnalyzerConfig],
  [withOptimizedImage, optimizedImageConfig]
];

module.exports = withPlugins([...plugins], nextConfig);
