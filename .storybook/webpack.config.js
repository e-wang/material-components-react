const getStorybookConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  const storybookConfig = getStorybookConfig(config, env);

  storybookConfig.module.loaders.push({
    test: /\.js$/,
    loader: 'eslint-loader',
  });

  return storybookConfig;
};

