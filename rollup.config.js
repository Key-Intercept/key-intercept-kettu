import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

// A tiny custom plugin to scrub dynamic imports that crash Hermes
const scrubDynamicImports = () => ({
  name: "scrub-dynamic-imports",
  renderChunk(code) {
    // Replaces the fatal dynamic import with a safe, silent rejection
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
  // Ensure we don't bundle Node.js specific libraries into the mobile app
  external: (id) => id.startsWith("@vendetta") || id === "ws",
  plugins: [
    resolve({ preferBuiltins: false }),
    commonjs(),
    swc({
      jsc: {
        parser: { syntax: "typescript", tsx: true },
        target: "es2020",
      },
    }),
    scrubDynamicImports(), // <-- Add the scrubber here
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
};