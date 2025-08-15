export type Mode = "development" | "production";

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
}

export interface EnvMode {
  port: number;
  mode: Mode;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: Mode;
  port: number;
  isDev: boolean;
}
