/** @type {import('@previewjs/config').PreviewConfig} */
module.exports = {
  publicDir: "public",
  include: ["src/**/*"],
  exclude: [
    "crimson-hill-9302/**/*",
    ".next/**/*",
    ".open-next/**/*",
    ".wrangler/**/*",
    "open-next.config.ts"
  ],
  vite: {
    resolve: {
      alias: {
        path: "path-browserify",
      },
    },
  },
};
