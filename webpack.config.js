const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
                transpileOnly: true,
              compiler: "ts-patch/compiler",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
