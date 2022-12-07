/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
 module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  serverDependenciesToBundle: [/^marked.*/],
  serverBuildTarget: "vercel",
  devServerPort: 8002
};