
const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}