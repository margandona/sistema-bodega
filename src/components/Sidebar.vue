// src/components/Sidebar.vue
<template>
  <div :class="['sidebar', { 'sidebar--open': isOpen }]">
    <div class="sidebar__header">
      <button @click="toggleSidebar" class="sidebar__close-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="sidebar__content">
      <router-link to="/products">Administrar Productos</router-link>
      <router-link to="/users">Administrar Usuarios</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen'],
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: left 0.3s;
}
.sidebar--open {
  left: 0;
}
.sidebar__header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
.sidebar__close-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
.sidebar__content {
  padding: 1rem;
}
.sidebar__content a {
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
}
</style>
