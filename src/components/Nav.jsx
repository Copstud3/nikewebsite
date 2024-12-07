import { useState, useEffect, useRef } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown-menu");
      const hamburgerIcon = document.getElementById("hamburger-icon");
      if (
        isMenuOpen &&
        dropdown &&
        !dropdown.contains(event.target) &&
        !hamburgerIcon.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
          id="hamburger-icon"
          src={hamburger}
          width={25}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="Hamburger Icon"
        />
        </div>
        {/*Mobile*/}
        {isMenuOpen && (
          <ul
            id="dropdown-menu"
            className="max-lg:flex flex-col gap-4 bg-white shadow-lg p-4 absolute top-[70px] right-[30px] z-auto "
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
