import React from "react";
import { Link } from "react-router-dom";
import miembroImg from '../../public/115.png'; 

const QuienesSomos= () => {
  //const teamMembers = [
    //{ name: "Raul Ararat", photo: "juan.jpg", keyWord: "SON OF GOD" },
    //{ name: "Ana López", photo: "ana.jpg", keyWord: "Innovación" },
    //{ name: "Carlos García", photo: "carlos.jpg", keyWord: "Pasión" },
  //];

  return (
    
    
        <div className="bg-white text-[#8B5A2B]">
          
    
          <section className="py-12">
            <h2 className="text-4xl font-semibold text-center text-[#8B5A2B] mb-8">Conoce a Nuestro Integrante</h2>
    
            {/* Card del integrante */}
            <div className="flex flex-col items-center">
            <div className="bg-[#8B5A2B] w-80 h-80 rounded-lg shadow-xl text-center p-2 transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center items-center h-40 mb-4">
              <img 
                src={miembroImg} 
                alt="Integrante del equipo" 
                className="w-full h-full object-cover rounded-lg" 
              />
              </div>
              <h3 className="text-xl text-amber-50 font-bold font-mono">Raul Daniel Ararat Leon</h3>
              <p className="text-md text-white mt-2 font-bold">HIJO DE DIOS</p>
              <p className="text-md text-white mt-2">Gracias al Pio por esta oportunidad</p>
            </div>
            </div>
                <Link to="/">
                <button className="bg-[#8B5A2B] text-white px-4 py-2 rounded-lg ml-8 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg">Volver al inicio</button>
                </Link>
            </section>
            </div>

            
        );
        };

export default QuienesSomos;