import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { Configuration } from "webpack";
import ProgressPlugin from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: isDev ? "index.html" : "[name].[contenthash].html",
    }),
    new webpack.ProgressPlugin(),
  ];
}
