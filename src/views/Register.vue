// src/views/Register.vue
<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        alert('Usuario registrado correctamente');
      } catch (error) {
        alert('Error en el registro: ' + error.message);
      }
    }
  }
}
</script>
