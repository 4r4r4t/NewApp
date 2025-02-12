import React, { useState } from "react";

// Imagen de ejemplo
import sampleImage from '../../public/img10.jpeg'

const Productos = () => {
  // Estado para manejar la lista de productos
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Descripción del producto 1",
      imagen: sampleImage,
    },
    
  ]);

  // Estado para el producto seleccionado para editar
  const [productoEditado, setProductoEditado] = useState<any>(null);

  // Estado para el modal de confirmación de eliminación
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState<number | null>(null);

  // Estado para controlar si mostrar el formulario de agregar nuevo producto
  const [showAgregarFormulario, setShowAgregarFormulario] = useState(false);

  // Estado para el nuevo producto a agregar
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  // Manejar la eliminación del producto
  const handleEliminar = (id: number) => {
    setProductoAEliminar(id);
    setShowEliminarModal(true);
  };

  const confirmarEliminar = () => {
    setProductos(productos.filter((producto) => producto.id !== productoAEliminar));
    setShowEliminarModal(false);
    setProductoAEliminar(null);
  };

  const cancelarEliminar = () => {
    setShowEliminarModal(false);
    setProductoAEliminar(null);
  };

  // Manejar el formulario de edición
  const handleEditar = (producto: any) => {
    setProductoEditado(producto);
  };

  const handleGuardarEdicion = () => {
    setProductos(
      productos.map((producto) =>
        producto.id === productoEditado.id ? productoEditado : producto
      )
    );
    setProductoEditado(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductoEditado({
      ...productoEditado,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProductoEditado({
        ...productoEditado,
        imagen: file,
      });
    }
  };

  // Manejar los cambios en el formulario de agregar nuevo producto
  const handleNuevoProductoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  const handleNuevoProductoImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      setNuevoProducto({
        ...nuevoProducto,
        imagen: file,
      });
    }
  };

  const handleAgregarProducto = () => {
    const nuevoProductoConId = {
      ...nuevoProducto,
      id: productos.length + 1, // Generamos un ID único
    };
    setProductos([...productos, nuevoProductoConId]);
    setNuevoProducto({ nombre: "", descripcion: "", imagen: "" }); // Limpiar formulario
    setShowAgregarFormulario(false); // Cerrar formulario de agregar
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Productos</h1>

      {/* Botón para agregar un nuevo producto */}
      <button
        onClick={() => setShowAgregarFormulario(true)}
        className="px-4 py-2 bg-cyan-500 text-white rounded-full mb-4 hover:bg-cyan-900"
      >
        Nuevo Producto
      </button>

      {/* Mostrar los productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-[#8B5A2B] p-4 rounded-lg shadow-xl">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEditar(producto)}
                className="px-4 py-2 bg-teal-800 text-white rounded-full hover:bg-teal-950"
              >
                Editar
              </button>
              <button
                onClick={() => handleEliminar(producto.id)}
                className="px-4 py-2 bg-red-800 text-white rounded-full hover:bg-red-950"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de confirmación de eliminación */}
      {showEliminarModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-10">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h3 className="text-xl mb-4">¿Seguro que quieres eliminar este producto?</h3>
            <div className="flex justify-between">
              <button
                onClick={confirmarEliminar}
                className="px-4 py-2 bg-red-400 text-white rounded-full"
              >
                Aceptar
              </button>
              <button
                onClick={cancelarEliminar}
                className="px-4 py-2 bg-gray-500 text-white rounded-full"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario para agregar un nuevo producto */}
      {showAgregarFormulario && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-1/3">
            <h3 className="text-xl mb-4">Agregar Nuevo Producto</h3>
            <div>
              <label className="block mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={nuevoProducto.nombre}
                onChange={handleNuevoProductoChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Descripción</label>
              <input
                type="text"
                name="descripcion"
                value={nuevoProducto.descripcion}
                onChange={handleNuevoProductoChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Imagen</label>
              <input
                type="file"
                onChange={handleNuevoProductoImagenChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              {nuevoProducto.imagen && (
                <img
                  src={nuevoProducto.imagen}
                  alt="Imagen producto"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAgregarProducto}
                className="px-4 py-2 bg-teal-900 text-white rounded-full"
              >
                Agregar
              </button>
              <button
                onClick={() => setShowAgregarFormulario(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-full"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario para editar un producto */}
      {productoEditado && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h3 className="text-xl mb-4">Editar Producto</h3>
            <div>
              <label className="block mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={productoEditado.nombre}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Descripción</label>
              <input
                type="text"
                name="descripcion"
                value={productoEditado.descripcion}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Imagen</label>
              <input
                type="file"
                onChange={handleImagenChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <img
                src={productoEditado.imagen}
                alt="Imagen producto"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleGuardarEdicion}
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Guardar
              </button>
              <button
                onClick={() => setProductoEditado(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-full"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
