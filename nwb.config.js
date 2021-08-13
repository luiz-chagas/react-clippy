module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "clippy-react",
      entry: "./src/clippy.js",
      externals: {
        react: "React",
      },
    },
  },
};
