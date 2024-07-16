// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ProductList from '../views/ProductList.vue'
import UserList from '../views/UserList.vue' // Crear este componente más adelante

const routes = [
  { path: '/', name: 'Home', component: ProductList },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/users', name: 'UserList', component: UserList }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
