import { NavLink } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
       <div className="navbar">
         <IoLogoGoogle style={{fontSize: "50px"}} />
        <ul className="navbar__menu">
          <NavLink to={'/'}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/about'}>
            <li>About</li>
          </NavLink>
          <NavLink to={'/contact'}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={'/login'}>
            <li>Login</li>
          </NavLink>
        </ul>
       </div>
      </div>
    </nav>
  )
}

export default Navbar