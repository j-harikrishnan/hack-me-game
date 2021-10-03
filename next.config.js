const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const OptimizedImages = require('next-optimized-images');
const withSourceMaps = require( '@zeit/next-source-maps' );
const withOffline = require('next-offline');

const customConfig = {
    // for turning of dev indicators
    devIndicators: {
        autoPrerender: false,
    }
};

module.exports = withPlugins([
    [withSourceMaps],
    [withOffline],
    [css],
    [OptimizedImages],
], customConfig);