import React, { useState } from "react";
import sampleImage from '../../public/img10.jpeg';

const Productos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1", imagen: sampleImage },
  ]);

  const [productoEditado, setProductoEditado] = useState<any>(null);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState<number | null>(null);
  const [showAgregarFormulario, setShowAgregarFormulario] = useState(false);

  const [nuevoProducto, setNuevoProducto] = useState({ nombre: "", descripcion: "", imagen: "" });

  const handleEliminar = (id: number) => {
    setProductoAEliminar(id);
    setShowEliminarModal(true);
  };

  const confirmarEliminar = () => {
    setProductos(productos.filter((producto) => producto.id !== productoAEliminar));
    setShowEliminarModal(false);
    setProductoAEliminar(null);
  };

  const handleEditar = (producto: any) => setProductoEditado(producto);

  const handleGuardarEdicion = () => {
    setProductos(productos.map((producto) => (producto.id === productoEditado.id ? productoEditado : producto)));
    setProductoEditado(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductoEditado({ ...productoEditado, [e.target.name]: e.target.value });
  };

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProductoEditado({ ...productoEditado, imagen: file });
    }
  };

  const handleNuevoProductoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleNuevoProductoImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      setNuevoProducto({ ...nuevoProducto, imagen: file });
    }
  };

  const handleAgregarProducto = () => {
    setProductos([...productos, { ...nuevoProducto, id: productos.length + 1 }]);
    setNuevoProducto({ nombre: "", descripcion: "", imagen: "" });
    setShowAgregarFormulario(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#8B5A2B] ">Productos</h1>

      <button onClick={() => setShowAgregarFormulario(true)} className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition">
        Nuevo Producto
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-[#8B5A2B] p-4 rounded-lg shadow-lg">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white">{producto.nombre}</h3>
            <p className="text-gray-200">{producto.descripcion}</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => handleEditar(producto)} className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 transition">
                Editar
              </button>
              <button onClick={() => handleEliminar(producto.id)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Confirmación de Eliminación */}
      {showEliminarModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold">¿Eliminar este producto?</h3>
            <div className="flex justify-between mt-4">
              <button onClick={confirmarEliminar} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800">Aceptar</button>
              <button onClick={() => setShowEliminarModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario para Agregar Producto */}
      {showAgregarFormulario && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Agregar Nuevo Producto</h3>
            <input type="text" name="nombre" value={nuevoProducto.nombre} onChange={handleNuevoProductoChange} className="w-full p-2 border rounded-lg mb-3" placeholder="Nombre" />
            <input type="text" name="descripcion" value={nuevoProducto.descripcion} onChange={handleNuevoProductoChange} className="w-full p-2 border rounded-lg mb-3" placeholder="Descripción" />
            <input type="file" onChange={handleNuevoProductoImagenChange} className="w-full p-2 border rounded-lg mb-3" />
            {nuevoProducto.imagen && <img src={nuevoProducto.imagen} alt="Imagen producto" className="w-full h-32 object-cover rounded-lg mb-4" />}
            <div className="flex justify-between">
              <button onClick={handleAgregarProducto} className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800">Agregar</button>
              <button onClick={() => setShowAgregarFormulario(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario para Editar Producto */}
      {productoEditado && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Editar Producto</h3>
            <input type="text" name="nombre" value={productoEditado.nombre} onChange={handleChange} className="w-full p-2 border rounded-lg mb-3" />
            <input type="text" name="descripcion" value={productoEditado.descripcion} onChange={handleChange} className="w-full p-2 border rounded-lg mb-3" />
            <input type="file" onChange={handleImagenChange} className="w-full p-2 border rounded-lg mb-3" />
            <img src={productoEditado.imagen} alt="Imagen producto" className="w-full h-32 object-cover rounded-lg mb-4" />
            <div className="flex justify-between">
              <button onClick={handleGuardarEdicion} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">Guardar</button>
              <button onClick={() => setProductoEditado(null)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
