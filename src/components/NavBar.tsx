import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "portfolio",
    },
    {
      id: 4,
      name: "experience",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature">Kento</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {name}
            </li>
          );
        })}
      </ul>

      <div
        className="cursol-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, name }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
