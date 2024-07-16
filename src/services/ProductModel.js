// src/models/ProductModel.js
class Product {
    constructor(id, sku, nombre, precio, activo, requiereReceta, precioPorFraccion, formaFarmaceutica, dosisPorForma, urlImagen, descripcion, conControlDeStock, precioPlus, enfermedades, esMedicamento, principioActivo, laboratorio, bioequivalente) {
      this.id = id;
      this.sku = sku;
      this.nombre = nombre;
      this.precio = precio;
      this.activo = activo;
      this.requiereReceta = requiereReceta;
      this.precioPorFraccion = precioPorFraccion;
      this.formaFarmaceutica = formaFarmaceutica;
      this.dosisPorForma = dosisPorForma;
      this.urlImagen = urlImagen;
      this.descripcion = descripcion;
      this.conControlDeStock = conControlDeStock;
      this.precioPlus = precioPlus;
      this.enfermedades = enfermedades;
      this.esMedicamento = esMedicamento;
      this.principioActivo = principioActivo;
      this.laboratorio = laboratorio;
      this.bioequivalente = bioequivalente;
    }
  }
  
  export default Product;
  