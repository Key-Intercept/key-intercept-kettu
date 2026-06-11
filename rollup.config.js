import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "KeyInterceptPlugin",
    globals: {
      "@vendetta/patcher": "vendetta.patcher",
      "@vendetta/metro": "vendetta.metro",
      "@vendetta/storage": "vendetta.storage",
      "@supabase/supabase-js": "supabase",
      "react": "window.React",
      "react-native": "window.ReactNative"
    }
  },
  external: (id) => {
    return (
      id.startsWith("@vendetta") || 
      id === "react" || 
      id === "react-native" ||
      id === "@supabase/supabase-js" ||
      id === "ws"
    );
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: false,
          dynamicImport: true,
        },
        target: "es2020",
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
      module: {
        type: "es6",
      },
      minify: true,
    }),
  ],
};