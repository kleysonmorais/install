const path = require('path');
const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  webpack: config => {
    config.resolve.modules.push(path.resolve('.'));
    return config;
  },
});
