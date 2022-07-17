import classes from "./Navbar.module.css"

import { NavLink } from "react-router-dom";

const setActiveClass = ({ isActive }) => 
  isActive ? classes.active : undefined 

const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li className={classes.nav_item}>
            <NavLink 
              to="/profile"
              className={setActiveClass}>
                Profile
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink 
              to="/messages"
              className={setActiveClass}>
                Messages
              </NavLink>
          </li>  
          <li className={classes.nav_item}>
            <NavLink 
              className={setActiveClass} 
              to="/#">
                News
            </NavLink>
          </li>
          <li className={classes.nav_item}>
            <NavLink 
              to="/#"
              className={setActiveClass}>
                Music
            </NavLink>
          </li>
          <div className={classes.divider}></div>
          <li className={classes.nav_item}>
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