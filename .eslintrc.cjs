const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            typescript: true,
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'react',
        'import',
        'react-hooks',
        'unused-imports',
        'jsx-a11y',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            files: ['*.ts', '*.tsx', '*.cjs', '*.mjs'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
    rules: {
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true,
            },
        ],
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'error',
        'no-console': 'off',
        'no-unused-vars': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};

module.exports = config;
