import { Configuration as ConfigruationDevServer } from "webpack-dev-server";
export function buildDevServer(port: number): ConfigruationDevServer {
  return {
    port: port,
    open: true,
  };
}
