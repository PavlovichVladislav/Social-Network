import c from "./Header.module.css"
import logo from '../../img/logo.svg' 
import { NavLink } from "react-router-dom";

const Header = ({email, signIn, isAuth, logOut}) => {
    return (
      <header className={c.header}>
        <div className={c.headerLeft}>
          <img className={c.headerLogo} src={logo} alt="icon" />

          <select className={c.headerLanguage} name="drop-down list">
            <option value="">Русский</option>
            <option value="">English</option>
          </select>
        </div>
  
        <div className={c.headerRight}>
          <input 
            placeholder='Search...' 
            type="text" 
            className={c.headerSearchPannel} 
          />
          {isAuth === false 
          ? <>
              <NavLink to={'/login'}>
                <button 
                  className={c.btn}
                  onClick={signIn}
                > SIGN IN</button>
              </NavLink>
              <NavLink to={'/signUp'}>
                <button className={c.btn}>CREATE ACCOUNT</button>
              </NavLink>
            </>
          : <button 
              className={c.btn}
              onClick={logOut}
              >{email}<br/>log out</button>}
          
        </div>
      </header>
    )
}

export default Header;