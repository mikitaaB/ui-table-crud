import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

const eslintConfig = {
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        js.configs.recommended,
        "plugin:@typescript-eslint/recommended",
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
      ],
      parserOptions: {
        ecmaVersion: 2020,
      },
      globals: globals.browser,
    },
  ],
}

export default eslintConfig;