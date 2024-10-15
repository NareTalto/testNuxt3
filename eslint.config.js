import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {files: ['**/*.{js,mjs,cjs,ts,vue}']},
    {languageOptions: { globals: {...globals.browser, ...globals.node} }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/strongly-recommended'],
    {
      ignores: ['node_modules', 'dist', 'public', '.nuxt']
    },
    eslintConfigPrettier,
    {files: ['**/*.vue'], languageOptions: {parserOptions: {parser: tseslint.parser}}},

    {rules: {
        'no-param-reassign': 'off',
            'vue/multi-word-component-names': ['error', {
                'ignores': ['index']
            }],

        // TypeScript
        quotes: ['warn', 'single', { avoidEscape: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html' : 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },
            multiline: {
                max: 1
            }
        }],
        'linebreak-style': ['error', 'unix'],
      }
    }
];