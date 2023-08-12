module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    `airbnb`,
    `airbnb-typescript`,
    `airbnb/hooks`,
    `plugin:react/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: [`dist`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: `latest`,
    sourceType: `module`,
    project: `./tsconfig.json`,
  },
  plugins: [`react`, `@typescript-eslint`, `react-refresh`, `unused-imports`, `import`, `prettier`],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/quotes": [`error`, `backtick`],
    quotes: [`error`, `backtick`],
    "react-refresh/only-export-components": [`warn`, { allowConstantExport: true }],
    "unused-imports/no-unused-imports": `error`,
    "unused-imports/no-unused-vars": [
      `warn`,
      { vars: `all`, varsIgnorePattern: `^_`, args: `after-used`, argsIgnorePattern: `^_` },
    ],
  },
};
