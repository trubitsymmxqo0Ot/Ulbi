import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolves";
import { buildRules } from "./buildRules";
import { BuildOptions } from "./types/types";
import { buildDevServer } from "./buildDevServer";
export function buildWebpackPlugin(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, port, isDev } = options;
  return {
    entry: paths.entry,
    mode: mode,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildRules(),
    resolve: buildResolve(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
