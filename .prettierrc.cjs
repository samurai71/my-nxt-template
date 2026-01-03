module.exports = {
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,

  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],

  // ---- IMPORT SORTING ----
  importOrder: [
    "^react$",
    "^react/(.*)$",
    "^next$",
    "^next/(.*)$",

    "<THIRD_PARTY_MODULES>",

    "^@/components/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",

    "^@/(.*)$",

    "^[./]",
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
