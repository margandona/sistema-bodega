// src/App.vue
<template>
  <div id="app">
    <Navbar @toggle-sidebar="toggleSidebar"/>
    <Sidebar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar"/>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
.main-content {
  margin-left: 250px;
  padding: 1rem;
  transition: margin-left 0.3s;
}
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
