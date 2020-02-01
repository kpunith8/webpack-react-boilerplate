const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["> 1%", "last 2 versions"]
      },
      corejs: 3,
      useBuiltIns: "entry"
    }
  ],
  "@babel/preset-react"
];

const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = api => {
  api.cache(true);

  return {
    presets: presets,
    plugins: plugins
  };
};
