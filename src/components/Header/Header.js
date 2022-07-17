import c from "./Header.module.css"
import logo from '../../img/logo.svg' 

const Header = () => {
    return (
      <header className={c.header}>
        <div className={c.header__left}>
          <img className={c.header__logo} src={logo} alt="icon" />

          <select className={c.header__language} name="" id="">
            <option value="">Русский</option>
            <option value="">English</option>
          </select>
        </div>
  
        <div className={c.header__right} value="Search...">
          <input 
            placeholder='Search...' 
            type="text" 
            className={c.header__searchPannel} 
          />
          <button className={c.btn}> SIGN IN</button>
          <button className={c.btn}> CREATE ACCOUNT</button>
        </div>
      </header>
    )
}

export default Header;