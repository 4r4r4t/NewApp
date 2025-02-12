import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-[#8B5A2B]"> {/* Fondo blanco y texto color madera */}
      {/* Sección de bienvenida */}
      <section className="flex flex-col items-center py-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Bienvenidos a Arte Ararat
        </h1>
        <p className="text-xl text-center max-w-3xl px-4 mb-8">
          Somos una empresa dedicada a la creación de piezas artesanales únicas, hechas a mano con el
          mejor cuidado y detalle. Nuestros productos reflejan la tradición y el arte de nuestra tierra, combinando técnicas ancestrales con toques contemporáneos.
        </p>
      </section>

      {/* Sección sobre nosotros */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-semibold text-center text-[#8B5A2B] mb-6"> {/* Título color madera */}
          Nuestra Misión
        </h2>
        <p className="text-lg text-center text-[#8B5A2B] max-w-3xl mx-auto">
          En Arte Ararat, buscamos preservar y promover la rica tradición de la artesanía local, al
          mismo tiempo que ofrecemos productos que resalten por su calidad y diseño único. Cada pieza
          que creamos tiene una historia que contar, y nos enorgullece compartirla con el mundo.
        </p>
      </section>

     
        </div>
    );
}
    
export default Home;
