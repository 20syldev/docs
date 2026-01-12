import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './main.css';

import Endpoint from './components/Endpoint.vue';
import Layout from './components/Layout.vue';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Endpoint', Endpoint);
    },
} satisfies Theme;