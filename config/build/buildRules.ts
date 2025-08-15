import { Configuration } from "webpack";

export function buildRules(): Configuration["module"] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return {
    rules: [tsLoader],
  };
}
