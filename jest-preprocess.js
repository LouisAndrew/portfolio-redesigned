//Copyjest-preprocess.js: copy code to clipboard
const babelOptions = {
      presets: ["babel-preset-gatsby"],
}
module.exports = require("babel-jest").createTransformer(babelOptions)