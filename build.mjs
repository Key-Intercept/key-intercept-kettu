import { build } from "esbuild";

// This safely replaces the Node.js 'ws' package with the mobile phone's built-in WebSocket
const shimWsPlugin = {
  name: "shim-ws",
  setup(build) {
    build.onResolve({ filter: /^ws$/ }, () => ({ path: "ws", namespace: "ws-shim" }));
    build.onLoad({ filter: /.*/, namespace: "ws-shim" }, () => ({
      contents: "module.exports = window.WebSocket;",
    }));
  },
};

build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  format: "cjs", 
  target: "es2020", // Forces esbuild to downgrade EVERYTHING, including Supabase, to safe syntax
  external: [
    "@vendetta/*", 
    "react", 
    "react-native"
  ],
  plugins: [shimWsPlugin],
}).catch(() => process.exit(1));