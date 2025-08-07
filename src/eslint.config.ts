import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import prettier from "eslint-plugin-prettier"; // Optional

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "../tsconfig.json",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      // prettier, // Optional
    },
    rules: {
      // --- Type Safety ---
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/consistent-type-imports": "error",

      // --- JS Best Practices ---
      eqeqeq: ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      "no-empty": "error",

      // --- Style & Readability ---
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],

      // --- Prettier (optional) ---
      // "prettier/prettier": "error",
    },
  },
];
