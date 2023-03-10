import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
const vip = import.meta.glob('./pages/vip/*.vue');
const admin = import.meta.glob('./pages/admin/*.vue');
const adminRoute = Object.keys(admin).map((path)=>{
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    return {
        path: name == '/admin/index' ? '/admin/' : name,
        component: admin[path], // () => import('./pages/*.vue')
    }
});

const route = [
    {path:'/',component: Index},
    ...adminRoute
]
export function _createRouter(){
    return createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: route
    })
}