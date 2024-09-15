import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant/index";
import { useState } from "react";

const Nav = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <header className="padding-x py-8 w-full z-10  ">
      <nav className="flex flex-wrap justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16   max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
          <li className="font-montserrat text-xl font-bold ">
            Sign in / Explore now
          </li>
        </ul>
        <div
          className="lg:hidden p-1 cursor-pointer hover:border-2 border-2  hover:border-coral-red rounded transition-all duration-100 "
          onClick={handleClick}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        {click && (
          <div className="bg-white w-full block lg:hidden  pt-10 ">
            <ul className="flex-1 flex-col  space-y-4 ">
              {navLinks.map((items) => (
                <li key={items.label}>
                  <a
                    href={items.href}
                    className="font-montserrat text-lg leading-normal text-slate-gray"
                  >
                    {items.label}
                  </a>
                </li>
              ))}
              <li className="font-montserrat text-xl font-bold">
                Sign in / Explore now
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
