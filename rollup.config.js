import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

// 1. NUCLEAR SCRUBBER: Physically rips out all modern syntax that crashes Hermes
const scrubHermesIncompatibilities = () => ({
  name: "scrub-hermes",
  renderChunk(code) {
    return code
      // Turns fatal dynamic imports into safe rejected promises: import("xyz") -> Promise.reject("xyz")
      .replace(/\bimport\s*\(/g, "Promise.reject(") 
      // Strips import.meta environment checks
      .replace(/\bimport\.meta\b/g, "({})");
  }
});

// 2. WEBSOCKET SHIM: Tricks Supabase into using the mobile native WebSocket
const shimWS = () => ({
  name: "shim-ws",
  resolveId(id) {
    if (id === "ws") return "\0ws";
    return null;
  },
  load(id) {
    if (id === "\0ws") return "export default window.WebSocket;";
    return null;
  }
});

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs", // <-- CJS is 100% correct!
    exports: "default",
    inlineDynamicImports: true, // <-- CRITICAL: Prevents Rollup from leaving import() in the code
  },
  external: (id) => id.startsWith("@vendetta") || id === "react" || id === "react-native",
  plugins: [
    shimWS(),
    resolve({ 
      preferBuiltins: false,
      browser: true
    }),
    commonjs(),
    swc({
      jsc: {
        parser: { syntax: "typescript", tsx: true },
        target: "es5", // <-- CRITICAL: Downgrades classes so Hermes doesn't crash on '#'
      },
    }),
    scrubHermesIncompatibilities(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
};