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
        <a href="https://www.nike.com/in/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16   max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat nav-link relative text-lg  transition-all duration-100 leading-normal hover:text-black text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
          <li className="font-montserrat text-xl font-bold">
            <a
              href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=f5a6470d2248496eb518237fb74a6ace&code_challenge=JyiyYrtc7-g8eRcfdY8NXgE6vOnQAqayhlRepzcGS7s&code_challenge_method=S256"
              className="hover:text-white rounded-full p-1 transition-all duration-300 hover:bg-black"
            >
              Sign in / Explore now{" "}
            </a>
          </li>
        </ul>
        <div
          className="lg:hidden p-1 cursor-pointer hover:border-2 border-2  hover:border-black rounded transition-all duration-100 "
          onClick={handleClick}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        {click && (
          <div
            data-aos="fade-right"
            className="bg-white w-full block lg:hidden  pt-10 "
          >
            <ul className="flex-1 flex-col  space-y-4 ">
              {navLinks.map((items) => (
                <li key={items.label}>
                  <a
                    href={items.href}
                    className="font-montserrat nav-link relative text-lg leading-normal  hover:text-black text-slate-gray"
                  >
                    {items.label}
                  </a>
                </li>
              ))}
              <li className="font-montserrat text-xl mt-3 font-bold">
                <a
                  href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=f5a6470d2248496eb518237fb74a6ace&code_challenge=JyiyYrtc7-g8eRcfdY8NXgE6vOnQAqayhlRepzcGS7s&code_challenge_method=S256"
                  className="hover:text-white rounded-full p-1 transition-all duration-300 hover:bg-black"
                >
                  Sign in / Explore now{" "}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
