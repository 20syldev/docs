/// <reference types="vite/client" />
import './main.css';

import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Banner from './components/Banner.vue';
import Endpoint from './components/Endpoint.vue';
import Examples from './components/Examples.vue';
import Features from './components/Features.vue';
import Layout from './components/Layout.vue';
import Playground from './components/Playground.vue';
import Try from './components/Try.vue';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Banner', Banner);
        app.component('Endpoint', Endpoint);
        app.component('Examples', Examples);
        app.component('Features', Features);
        app.component('Playground', Playground);
        app.component('Try', Try);
    },
} satisfies Theme;
