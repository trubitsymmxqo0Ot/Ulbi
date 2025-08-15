import webpack from "webpack";
import { buildWebpackPlugin } from "./config/build/buildWebpackConfig";
import path from "path";
import {
  BuildOptions,
  BuildPaths,
  EnvMode,
  Mode,
} from "./config/build/types/types";

export default (env: EnvMode) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "build"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";
  const config: webpack.Configuration = buildWebpackPlugin({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
