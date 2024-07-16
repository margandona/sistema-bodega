// src/components/EditProductModal.vue
<template>
  <div>
    <h2>Editar Producto</h2>
    <form @submit.prevent="updateProduct">
      <input v-model="sku" type="text" placeholder="SKU" required />
      <input v-model="nombre" type="text" placeholder="Nombre" required />
      <input v-model="precio" type="number" placeholder="Precio" required />
      <button type="submit">Actualizar</button>
      <button @click="$emit('close')">Cancelar</button>
    </form>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  props: {
    product: Object
  },
  data() {
    return {
      sku: this.product.sku,
      nombre: this.product.nombre,
      precio: this.product.precio
    }
  },
  methods: {
    async updateProduct() {
      const updatedProduct = {
        sku: this.sku,
        nombre: this.nombre,
        precio: this.precio,
        activo: this.product.activo,
        requiereReceta: this.product.requiereReceta,
        // Otros campos que no cambian
      };
      await ProductService.updateProduct(this.product.id, updatedProduct);
      this.$emit('refresh');
      this.$emit('close');
    }
  }
}
</script>
