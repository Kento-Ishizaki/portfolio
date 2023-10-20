const NavBar = () => {
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
      <ul className="flex">
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
    </div>
  );
};

export default NavBar;
