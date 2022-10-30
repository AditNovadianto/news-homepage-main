import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconMenuClose from "../images/icon-menu-close.svg";
import { useState } from "react";

const navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarHandlerTrue = () => {
    setNavbar(true);
  };

  const navbarHandlerFalse = () => {
    setNavbar(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" />
        <button className="md:hidden block" onClick={navbarHandlerTrue}>
          <img src={iconMenu} alt="icon-menu" />
        </button>

        <div className="flex items-center gap-10 md:scale-100 md:relative scale-0 absolute">
          <a
            className="font-Inter hover:text-Soft-orange text-Very-dark-blue transition-all"
            href="#"
          >
            Home
          </a>
          <a
            className="font-Inter hover:text-Soft-orange text-Very-dark-blue transition-all"
            href="#"
          >
            New
          </a>
          <a
            className="font-Inter hover:text-Soft-orange text-Very-dark-blue transition-all"
            href="#"
          >
            Popular
          </a>
          <a
            className="font-Inter hover:text-Soft-orange text-Very-dark-blue transition-all"
            href="#"
          >
            Trending
          </a>
          <a
            className="font-Inter hover:text-Soft-orange text-Very-dark-blue transition-all"
            href="#"
          >
            Categories
          </a>
        </div>
      </div>

      <div
        className={`${
          navbar
            ? "bg-Very-dark-blue bg-opacity-60 right-0 left-0"
            : "bg-opacity-0"
        } transition-all md:hidden block duration-300 top-0 fixed bottom-0`}
      >
        <div
          className={`${
            navbar ? "right-0" : "right-[-500px]"
          } transition-all duration-300 w-[70%] min-h-screen flex flex-col fixed top-0 bg-Off-white`}
        >
          <button
            className="absolute right-5 top-5"
            onClick={navbarHandlerFalse}
          >
            <img src={iconMenuClose} alt="icon-menu-close" />
          </button>

          <div className="flex flex-col items-start p-10 mt-20 gap-5">
            <a
              className="font-Inter w-full hover:text-Soft-orange transition-all text-Very-dark-blue"
              href="#"
            >
              Home
            </a>
            <a
              className="font-Inter w-full hover:text-Soft-orange transition-all text-Very-dark-blue"
              href="#"
            >
              New
            </a>
            <a
              className="font-Inter w-full hover:text-Soft-orange transition-all text-Very-dark-blue"
              href="#"
            >
              Popular
            </a>
            <a
              className="font-Inter w-full hover:text-Soft-orange transition-all text-Very-dark-blue"
              href="#"
            >
              Trending
            </a>
            <a
              className="font-Inter w-full hover:text-Soft-orange transition-all text-Very-dark-blue"
              href="#"
            >
              Categories
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
