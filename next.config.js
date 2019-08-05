const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withSize = require('next-size');
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

const bundleAnalyzerConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
};

const plugins = [
  withImages,
  withSize,
  [withSass, SassConfig],
  [withProgressBar, progressBarConfig],
  [withFonts, fontsConfig],
  [withBundleAnalyzer, bundleAnalyzerConfig]
];

module.exports = withPlugins([...plugins], nextConfig);
