import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-full py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" />
      {/* menu for sm and above */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-white text-[16px] cursor-pointer ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* menu for mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="h-[28px] w-[28px] cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 rounded-xl sidebar min-w-[140px] `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-white text-[16px] cursor-pointer ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-10"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
