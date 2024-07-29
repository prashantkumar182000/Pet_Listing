const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
    },
  },
  // Other webpack configuration...
};
