const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
        generator: {
          filename: "assets/document/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      defaults: false,
    }),
    new ESLintPlugin(
      (options = {
        context: "/",
        eslintPath: "eslint",
        extensions: ["js", "jsx"],
        exclude: "node_modules",
        files: ["./src/**"] ,
        fix: false,
        formatter: "stylish",
        lintDirtyModulesOnly: false,
        threads: false,
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
        quiet: false,
        outputReport: false,
      })
    ),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    hot: "only",
  },
};
