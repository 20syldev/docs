import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default [
    {
        ignores: ['node_modules/**', 'src/.vitepress/cache/**', 'src/.vitepress/dist/**'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: { parser: tseslint.parser },
        },
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        languageOptions: {
            globals: { ...globals.browser },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
    {
        files: ['**/*.{ts,vue}'],
        rules: {
            'no-undef': 'off',
        },
    },
    prettier,
];
