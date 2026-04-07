/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './main.css';

import Endpoint from './components/Endpoint.vue';
import Try from './components/Try.vue';
import Examples from './components/Examples.vue';
import Banner from './components/Banner.vue';
import Layout from './components/Layout.vue';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Banner', Banner);
        app.component('Endpoint', Endpoint);
        app.component('Examples', Examples);
        app.component('Try', Try);
    },
} satisfies Theme;
