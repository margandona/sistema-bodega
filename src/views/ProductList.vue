// src/views/ProductList.vue
<template>
  <div>
    <h2>Lista de Productos</h2>
    <button @click="showAddProductModal = true">Agregar Producto</button>
    <table>
      <thead>
        <tr>
          <th>SKU</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.sku }}</td>
          <td>{{ product.nombre }}</td>
          <td>{{ product.precio }}</td>
          <td>
            <button @click="editProduct(product)">Editar</button>
            <button @click="deleteProduct(product.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal v-if="showAddProductModal" @close="showAddProductModal = false" @refresh="fetchProducts"/>
    <EditProductModal v-if="showEditProductModal" :product="selectedProduct" @close="showEditProductModal = false" @refresh="fetchProducts"/>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';
import ProductModal from '../components/ProductModal.vue';
import EditProductModal from '../components/EditProductModal.vue';

export default {
  components: {
    ProductModal,
    EditProductModal
  },
  data() {
    return {
      products: [],
      showAddProductModal: false,
      showEditProductModal: false,
      selectedProduct: null
    }
  },
  methods: {
    async fetchProducts() {
      this.products = await ProductService.getAllProducts();
    },
    editProduct(product) {
      this.selectedProduct = product;
      this.showEditProductModal = true;
    },
    async deleteProduct(id) {
      await ProductService.deleteProduct(id);
      this.fetchProducts();
    }
  },
  created() {
    this.fetchProducts();
  }
}
</script>
