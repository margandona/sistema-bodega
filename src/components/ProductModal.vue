// src/components/ProductModal.vue
<template>
  <div>
    <h2>Agregar Producto</h2>
    <form @submit.prevent="addProduct">
      <input v-model="sku" type="text" placeholder="SKU" required />
      <input v-model="nombre" type="text" placeholder="Nombre" required />
      <input v-model="precio" type="number" placeholder="Precio" required />
      <button type="submit">Agregar</button>
      <button @click="$emit('close')">Cancelar</button>
    </form>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  data() {
    return {
      sku: '',
      nombre: '',
      precio: 0
    }
  },
  methods: {
    async addProduct() {
      const newProduct = {
        sku: this.sku,
        nombre: this.nombre,
        precio: this.precio,
        activo: true,  // Por defecto
        requiereReceta: false,  // Por defecto
        // Otros campos por defecto
      };
      await ProductService.addProduct(newProduct);
      this.$emit('refresh');
      this.$emit('close');
    }
  }
}
</script>
