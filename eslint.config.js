import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import typescript from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  ...typescript.configs.recommended,
  {
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'], // Required for React 17+
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      // Disable default unused vars to use unused-imports plugin instead
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'vendor',
      'node_modules',
      'public',
      'bootstrap/ssr',
      'tailwind.config.js',
    ],
  },
  prettier, // Turn off all rules that might conflict with Prettier
  {
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': 'error',
      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
