/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const baseConfig = {
	env: {
		SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
	},
};

module.exports = withPlugins([[withOptimizedImages({ optimizeImagesInDev: true })]], baseConfig);
