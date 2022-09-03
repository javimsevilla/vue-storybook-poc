const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ['../src/assets', '../src/styles'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        require.resolve("vue-style-loader"),
        require.resolve("css-loader"),
        require.resolve("sass-loader"),
      ],
    });

    config.resolve.alias['@'] = path.join(__dirname, '..', 'src');

    return config;
  }
}
