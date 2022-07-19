import c from "./Header.module.css"
import logo from '../../img/logo.svg' 

const Header = () => {
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
          <button className={c.btn}> SIGN IN</button>
          <button className={c.btn}> CREATE ACCOUNT</button>
        </div>
      </header>
    )
}

export default Header;