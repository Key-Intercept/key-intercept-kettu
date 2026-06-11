import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

// 1. SHIM WEBSOCKETS: Tricks Supabase into using the mobile phone's native WebSocket
const shimWS = () => ({
  name: "shim-ws",
  resolveId(id) {
    if (id === "ws") return "\0ws"; // The \0 tells Rollup this is a fake virtual module
    return null;
  },
  load(id) {
    if (id === "\0ws") {
      // Replaces the entire 'ws' package with the phone's native WebSocket
      return "export default window.WebSocket;"; 
    }
    return null;
  }
});

// 2. SCRUBBER: Removes the Hermes-crashing dynamic import
const scrubDynamicImports = () => ({
  name: "scrub-dynamic-imports",
  renderChunk(code) {
    return code.replace(/import\(['"]@opentelemetry\/api['"]\)/g, "Promise.reject()");
  }
});

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "default",
  },
  // Keep @vendetta external, but let Rollup process our fake 'ws' module
  external: (id) => id.startsWith("@vendetta") || id === "react" || id === "react-native",
  plugins: [
    shimWS(), // <-- Added the WebSocket shim here
    resolve({ 
      preferBuiltins: false,
      browser: true
    }),
    commonjs(),
    swc({
      jsc: {
        parser: { syntax: "typescript", tsx: true },
        target: "es2020",
      },
    }),
    scrubDynamicImports(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
};