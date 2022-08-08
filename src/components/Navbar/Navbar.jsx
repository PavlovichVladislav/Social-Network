import c from "./Navbar.module.css"

import { NavLink } from "react-router-dom";

const setActiveClass = ({ isActive }) => 
  isActive ? c.active : undefined 

const Navbar = () => {
    return (
        <nav className={c.nav}>
        <ul>
          <li className={c.navItem}>
            <NavLink 
              to="/profile/3"
              className={setActiveClass}>
                Profile
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink 
              to="/users"
              className={setActiveClass}>
                Users
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink 
              to="/messages"
              className={setActiveClass}>
                Messages
              </NavLink>
          </li>  
          <li className={c.navItem}>
            <NavLink 
              className={setActiveClass} 
              to="/#">
                News
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink 
              to="/#"
              className={setActiveClass}>
                Music
            </NavLink>
          </li>
          <div className={c.divider}></div>
          <li className={c.navItem}>
            <NavLink 
              to="/#"
              className={setActiveClass}>
                Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;