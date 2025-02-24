import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
      exports: "named",
      name: "foundationUI",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react/jsx-runtime": "jsxRuntime",
        "@mui/material": "MaterialUI",
      },
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime", "@mui/material"], // ✅ Ensuring MUI is external
  plugins: [
    peerDepsExternal(), // ✅ Avoid bundling peer dependencies
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true, // Ensures .d.ts files are generated
    }),
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"], // ✅ Ensure Babel processes TS files
      exclude: "node_modules/**",
    }),
    resolve({
      preferBuiltins: true,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs({
      include: /node_modules/,
    }),
    postcss({
      extract: true,
      modules: true,
    }),
  ],
};
