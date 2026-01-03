import js from "@eslint/js";
import next from "eslint-config-next";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", ".next", "out", "dist", "coverage"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // ---- PRETTIER ALIGNMENT ----
      semi: "off",

      // ---- IMPORT ORDER (MATCHES PRETTIER) ----
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // ---- QUALITY ----
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },

  // ---- NEXT.JS RULES ----
  {
    ...next,
    files: ["**/*.{js,jsx,ts,tsx}"],
  },

  // ---- DISABLE RULES THAT CONFLICT WITH PRETTIER ----
  prettier,
];
