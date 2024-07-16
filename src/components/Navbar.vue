// src/components/Navbar.vue
<template>
  <nav class="navbar">
    <div class="navbar__brand">
      <router-link to="/">Sistema de Bodega</router-link>
    </div>
    <div class="navbar__links">
      <router-link to="/register">Registro</router-link>
      <router-link to="/login">Inicio de Sesión</router-link>
      <router-link to="/products">Productos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}
.navbar__brand {
  font-size: 1.5rem;
}
.navbar__links a {
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
}
@media (max-width: 768px) {
  .navbar {
    display: none;
  }
}
</style>
