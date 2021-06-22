import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Hub from './Hub'
import Inicio from './Inicio/Inicio'
import MainHome from './Home/MainHome'
import MainTech from './Tech/MainTech'

import './assets/styles.css'

const routes = [
    { path: '/', name: 'inicio', component: Inicio},
    { path: '/home', name: 'home', component: MainHome},
    { path: '/tech', name: 'tech', component: MainTech},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(Hub).use(router).mount('#hub')