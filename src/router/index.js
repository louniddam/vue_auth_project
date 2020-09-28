import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import store from '../store/store.js';


Vue.use(VueRouter);


const routes = 
     [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        }
    ];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next)=>{
    if(to.matched.some(record => record.meta.requiresAuth == true)){
        if(store.state.tokens == null){
            next({
                path: '/',
            });
        } else {
            next();
        }
    }
    next();
});

export default router;