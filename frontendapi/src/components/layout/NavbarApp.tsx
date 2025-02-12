import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';



const NavbarApp = () => {
  const [menuItems] = useState([
    { name: "Inicio", link: "/" },
    { name: "Quienes somos", link: "/sobre-nosotros" },
    { name: "Productos", link: "/productos" },
  ]);
  


  return (
    <nav className="flex items-center justify-between p-4 text-white bg-gradient-to-b from-yellow-900">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
               <a
                href={item.link}
                className="relative px-4 py-2 text-lg font-semibold text-white transition duration-300 ease-in-out 
                           hover:text-[#FFD700] hover:underline underline-offset-4"
              >
                {item.name}
              </a>


            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarApp;
