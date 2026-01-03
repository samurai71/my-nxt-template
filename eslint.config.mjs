import js from "@eslint/js"
import next from "eslint-config-next"

export default [
  {
    ignores: ["node_modules", ".next", "out", "dist", "coverage"],
  },

  js.configs.recommended,

  {
    ...next,
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      semi: "off",
    },
  },
]
