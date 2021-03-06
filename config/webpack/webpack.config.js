const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPath = "/";
const BUILD_DIR = paths.appBuild;
const APP_DIR = paths.appSrc + "/index.tsx";

const config = {
  mode: "development",
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localIdentName: "[local]",
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: /assets/,
        use: [
          {
            loader: "file-loader",
          },
        ],
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.pdf$/],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Movies",
      inject: true,
      template: "public/index.html",
    }),
  ],
};

config.devServer = {
  port: 8080,
  historyApiFallback: true,
  open: true,
  hot: true,
  compress: true,
  stats: "errors-only",
  overlay: true,
};

module.exports = config;
