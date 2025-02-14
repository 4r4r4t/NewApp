// src/services/product.service.ts
import axios from 'axios';

// URL de tu backend
const API_URL = 'http://localhost:3000/products';

// Definir una interfaz para el Producto (opcional)
export interface Product {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
}

// Obtener todos los productos
export const getAllProducts = async () => {
    const response = await fetch("http://localhost:3000/product");
  
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
  
    return await response.json();
  };
  



// Crear un nuevo producto
export const createProduct = async (productoData: { nombre: string; descripcion: string; precio: number; imageUrl: string }) => {
    const response = await fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Asegúrate de que el contenido sea JSON
      },
      body: JSON.stringify(productoData), // Convertir los datos en un string JSON
    });
  
    if (!response.ok) {
      throw new Error("Error al agregar producto");
    }
  
    return response.json(); // Devuelve el producto creado
  };
  
  
// Actualizar un producto

export const updateProduct = async (id: string, updatedProductData: Partial<Product>) => {
    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProductData)
      });
  
      if (!response.ok) {
        throw new Error(`Error en la actualización: ${response.statusText}`);
      }
  
      return await response.json(); // Devolvemos el producto actualizado
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      throw error;
    }
  };



  
  
  

// Eliminar un producto
export const deleteProduct = async (id: string) => {
    const response = await fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error("Error al eliminar producto");
    }
  };
  
