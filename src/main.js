import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';

import AllArticlesView from './views/AllArticlesView.vue';
import TagsList from './views/TagsList.vue';
import TagArticlesView from "@/views/TagArticlesView";
import Article from "@/components/Article";
import HomePageView from "@/views/HomePageView";
import FrontEndHomePage from "@/views/FrontendHomePage";
import BackendHomePage from "@/views/BackendHomePage";
import DevopsHomePage from "@/views/DevopsHomePage";
import AlgorithmsHomePage from "@/views/AlgorithmsHomePage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/articles', component: AllArticlesView},
        { path: '/tags', component: TagsList},
        { path: '/tags/:tag', component: TagArticlesView},
        { path: '/articles/:slug', component: Article},
        { path: '/', component: HomePageView},
        { path: '/frontend', component: FrontEndHomePage},
        { path: '/backend', component: BackendHomePage},
        { path: '/devops', component: DevopsHomePage},
        { path: '/algorithms', component: AlgorithmsHomePage}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

