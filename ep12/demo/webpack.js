const { join } = require("path");

/**
 * Generic configuration for Webpack.
 * @type import("webpack").Configuration
 */
module.exports = {
  entry: {
    PostFoosToSQSHandler: "./src/handlers/PostFoosToSQS.ts",
    ProcessFoosHandler: "./src/handlers/ProcessFoos.ts"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  target: "node",
  output: {
    libraryTarget: "commonjs",
    path: join(__dirname, "dist"),
    filename: "[name].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  externals: [/^aws-sdk/i],
  devtool: "inline-source-map",
};
