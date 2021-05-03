import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AllArticlesView from './views/AllArticlesView.vue';
import TagsList from './views/TagsList.vue';
import TagArticlesView from "@/views/TagArticlesView";
import Article from "@/components/Article";
import HomePageView from "@/views/HomePageView";
// import SignUp from "@/views/SignUp";
import ChromeExtensionPage from "@/views/ChromeExtensionPage";
import OpenSourcePage from "@/views/OpenSourcePage";
import ExploreCoursesPage from "@/views/ExploreCoursesPage";
// import SignIn from "@/views/SignIn";
import AndroidHomePage from "@/views/AndroidHomePage";

// import BackendElastic from "@/views/Elastic/BackendElastic";
// import FrontendElastic from "@/views/Elastic/FrontendElastic";
// import DevopsElastic from "@/views/Elastic/DevopsElastic";
// import AlgorithmsElastic from "@/views/Elastic/AlgorithmsElastic";

import BackendHomePage from "@/views/Database/BackendHomePage";
import FrontendHomePage from "@/views/Database/FrontendHomePage";
import DevopsHomePage from "@/views/Database/DevopsHomePage";
import AlgorithmsHomePage from "@/views/Database/AlgorithmsHomePage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/articles', component: AllArticlesView},
        {path: '/tags', component: TagsList},
        {path: '/tags/:tag', component: TagArticlesView},
        {path: '/articles/:slug', component: Article},
        {path: '/', component: HomePageView},
        // {path: '/signup', component: SignUp},
        {path: '/chrome-extension', component: ChromeExtensionPage},
        {path: '/opensource', component: OpenSourcePage},
        {path: '/explore-courses', component: ExploreCoursesPage},
        // {path: '/signin', component: SignIn},
        {path: '/backend', component: BackendHomePage},
        {path: '/frontend', component: FrontendHomePage},
        {path: '/devops', component: DevopsHomePage},
        {path: '/algorithms', component: AlgorithmsHomePage},
        {path: '/articles/:writer/:slug', component: Article},
        {path: '/android', component: AndroidHomePage}
        // {path: '/signin', component: SignIn}
    ]
});
router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.name || 'Home';
    next();
})
const app = createApp(App);
app.use(router);
app.mount('#app');

