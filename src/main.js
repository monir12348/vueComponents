// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Productsdetails from './components/Productsdetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  {path:'/product/:id',component:Productsdetails}

]

const router = createRouter({
  history: createWebHistory(), // or use createWebHistory() for normal browser URL
  routes,
})


const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
