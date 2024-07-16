// src/components/Navbar.vue
<template>
  <nav class="navbar">
    <div class="navbar__brand">
      <router-link to="/">Sistema de Bodega</router-link>
    </div>
    <div class="navbar__toggle" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
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
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
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
.navbar__toggle {
  display: none;
  cursor: pointer;
}
.navbar__links a {
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
}
@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }
  .navbar__toggle {
    display: block;
  }
}
</style>
