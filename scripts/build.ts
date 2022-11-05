import esbuild, { BuildOptions } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const config: BuildOptions = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/primer-live.js",
  external: ["/images/*"],
  plugins: [sassPlugin()],
};

esbuild.build(config);

const minifyConfig: BuildOptions = {
  ...config,
  minify: true,
  target: ["es2020", "chrome58", "edge18", "firefox57", "node12", "safari11"],
  outfile: "dist/primer-live.min.js",
};

esbuild.build(minifyConfig);
