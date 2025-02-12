import mapa from '../../../public/8022f191ec75de6e31808d642490dd63.jpg';
import { Link } from 'react-router-dom';
function FooterApp() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Información de la Compañía */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Arte Ararat</h3>
            <p className="text-gray-400 text-sm">Ofrecemos artesanias innovadoras para todos nuestros clientes con el más alto nivel de calidad.</p>
            <p className="text-gray-400 text-sm">Palmira, Valle del Cauca</p>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Enlaces útiles</h3>
            <ul>
            <li><Link to="/" className="text-gray-400 hover:text-gray-300 text-sm">Inicio</Link></li>
              <li><Link to="/productos" className="text-gray-400 hover:text-gray-300 text-sm">Productos</Link></li>
              <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-gray-300 text-sm">Quienes Somos</Link></li>
            </ul>
          </div>

          {/* Imagen del mapa estático */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
            <div className="w-full h-35 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={mapa}
                alt="Ubicación de la compañía"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Mi Compañía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;

  