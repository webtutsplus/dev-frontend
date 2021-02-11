import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';

import ArticlesList from './views/ArticlesList.vue';
import TagsList from './views/TagsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/articles', component: ArticlesList},
        { path: '/tags', component: TagsList}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

