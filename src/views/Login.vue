// src/views/Login.vue
<template>
  <div>
    <h2>Inicio de Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <button @click="loginWithGoogle">Iniciar con Google</button>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert('Inicio de sesión exitoso');
      } catch (error) {
        alert('Error en el inicio de sesión: ' + error.message);
      }
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert('Inicio de sesión con Google exitoso');
      } catch (error) {
        alert('Error en el inicio de sesión con Google: ' + error.message);
      }
    }
  }
}
</script>
