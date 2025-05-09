// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends      : ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files        : ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',   // haha eslint
        '@typescript-eslint/no-unsafe-call'      : 'off',   // haha eslint
        '@typescript-eslint/no-unsafe-argument'  : 'off',   // haha eslint
        '@typescript-eslint/no-unsafe-return'    : 'off',   // haha eslint
        '@typescript-eslint/no-explicit-any'     : 'off',   // I hate myself
        "@next/next/no-img-element"              : "off",   // fk next/image
      },
    },
  ],
  parser       : '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer  : 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars'      : ['warn', { argsIgnorePattern: '^_' }],
    '@next/next/no-html-link-for-pages'      : 'off',
    'react/jsx-key'                          : 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',                                   // haha eslint
    '@typescript-eslint/no-unsafe-call'      : 'off',                                   // haha eslint
    '@typescript-eslint/no-unsafe-argument'  : 'off',                                   // haha eslint
    '@typescript-eslint/no-unsafe-return'    : 'off',                                   // haha eslint

  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config : './tailwind.config.ts',
    },
    next: {
      rootDir: ['./'],
    },
  },
}

module.exports = config
