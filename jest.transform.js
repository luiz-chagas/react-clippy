module.exports = require("babel-jest").default.createTransformer({
  presets: ["@babel/env", "@babel/react"],
  plugins: ["@babel/proposal-class-properties"],
});
