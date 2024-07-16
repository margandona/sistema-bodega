// src/App.vue
<template>
  <div id="app">
    <Navbar v-if="!isSmallScreen"/>
    <Sidebar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar"/>
    <main :class="{'main-content': isSidebarOpen, 'main-content--full': !isSidebarOpen}">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isSidebarOpen: false,
      isSmallScreen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
</script>

<style scoped>
.main-content {
  margin-left: 250px;
  padding: 1rem;
  transition: margin-left 0.3s;
}
.main-content--full {
  margin-left: 0;
}
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
