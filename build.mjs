import { build } from "esbuild";

const shimWsPlugin = {
  name: "shim-ws",
  setup(build) {
    build.onResolve({ filter: /^ws$/ }, () => ({ path: "ws", namespace: "ws-shim" }));
    build.onLoad({ filter: /.*/, namespace: "ws-shim" }, () => ({
      // Safely check if WebSocket exists before assigning
      contents: "module.exports = typeof WebSocket !== 'undefined' ? WebSocket : null;",
    }));
  },
};

build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  format: "cjs", 
  platform: "browser", 
  target: "es2015", 
  external: [
    "@vendetta/*", 
    "react", 
    "react-native"
  ],
  define: {
    // These polyfills prevent Supabase from crashing React Native
    "process.env.NODE_ENV": '"production"',
    "process": JSON.stringify({ env: {} }),
    "global": "window"
  },
  plugins: [shimWsPlugin],
}).catch(() => process.exit(1));