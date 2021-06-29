const path = require("path");

module.exports = (env, { mode = "development" }) => {
  const cwd = process.cwd();
  return {
    mode,
    context: path.resolve(cwd),
    entry: {
      main: [
        path.resolve(__dirname, "version.js"),
        path.resolve(__dirname, "index.js"),
      ],
    },
    output: {
      library: { type: "system" },
      libraryTarget: "system",
      path: path.resolve(cwd, "dist"),
    },
    externals: ["react"],
    resolve: {
      modules: [path.resolve(cwd, "node_modules")],
    },
  };
};
