import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './main.css';

import Method from './components/Method.vue';
import Endpoint from './components/Endpoint.vue';
import Request from './components/Request.vue';
import Terminal from './components/Terminal.vue';
import Layout from './components/Layout.vue';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('HBadge', Method);
        app.component('HEndpoint', Endpoint);
        app.component('HRequest', Request);
        app.component('HTerminal', Terminal);
    },
} satisfies Theme;