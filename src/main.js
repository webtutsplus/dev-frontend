import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';

import AllArticlesView from './views/AllArticlesView.vue';
import TagsList from './views/TagsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/articles', component: AllArticlesView},
        { path: '/tags', component: TagsList}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

