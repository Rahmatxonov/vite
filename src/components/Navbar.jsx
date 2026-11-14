import { FiMoon, FiSun } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiFillDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`container  ${theme === "light" ? "bg-amber-100 text-black" : "bg-gray-600 text-white"} transition-all duration-300`}
    >
      <div className="px-5 flex items-center justify-between py-4">
        <AiFillDollarCircle className="text-5xl" />

        <ul className="flex items-center gap-x-5">
          {[
            { path: "/", title: "Home" },
            { path: "/about", title: "About" },
            { path: "/contact", title: "Contact" },
            { path: "/login", title: "Login" },
          ].map((item) => {
            return (
              <>
                <li>
                  <NavLink className="uppercase" to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <button onClick={toggleTheme} className={``}>
          {theme === "light" ? (
            <FiMoon className="text-5xl" />
          ) : (
            <FiSun className="text-5xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
