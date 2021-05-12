import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Homechild from '../views/Homechild.vue' //在根路由的组件不能动态import
import User from '../views/User.vue'
import User2 from '../views/User2.vue'
const routes = [{
        path: '/',
        name: 'Home',
        alias: '/home',
        component: Home,
        children: [{
            path: '/homechild',
            name: 'Homechild',
            component: Homechild
        }]
    },
    {
        path: '/user/:username',
        name: 'user',
        component: User
    },
    {
        path: '/about',
        name: 'About',
        children: [{
            path: 'child',
            name: 'Aboutchild',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Aboutchild.vue')
        }],
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user2/:id',
        name: 'user2',
        component: User2,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router