const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production", // or 'development' based on your environment
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Handle image files with file-loader
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/",
              publicPath:
                "https://sfbcarousel.s3.us-east-2.amazonaws.com/assets/",
            },
          },
        ],
      },
      ,
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle font files
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "https://sfbcarousel.s3.us-east-2.amazonaws.com/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
