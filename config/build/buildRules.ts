import { Configuration } from "webpack";

export function buildRules(): Configuration["module"] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };
  return {
    rules: [tsLoader, scssLoader],
  };
}
