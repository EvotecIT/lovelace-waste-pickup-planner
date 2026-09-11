import esbuild from "esbuild";
const watch = process.argv.includes("--watch");
const context = await esbuild.context({
  entryPoints: ["src/waste-pickup-planner-card.ts"],
  outfile: "waste-pickup-planner-card.js",
  bundle: true,
  format: "esm",
  target: "es2021",
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  logLevel: "info",
});
if (watch) await context.watch();
else {
  await context.rebuild();
  await context.dispose();
}
