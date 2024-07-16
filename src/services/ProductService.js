// src/services/ProductService.js
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const productCollectionRef = collection(db, 'products');

class ProductService {
  addProduct(product) {
    return addDoc(productCollectionRef, product);
  }

  updateProduct(id, updatedProduct) {
    const productDoc = doc(db, 'products', id);
    return updateDoc(productDoc, updatedProduct);
  }

  deleteProduct(id) {
    const productDoc = doc(db, 'products', id);
    return deleteDoc(productDoc);
  }

  async getAllProducts() {
    const querySnapshot = await getDocs(productCollectionRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

export default new ProductService();
