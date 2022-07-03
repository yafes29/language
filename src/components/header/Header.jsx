
import "./Header.css";
import Logo from "../../assets/react.svg"; 


const Header = () => {
  return (
    <div className="header-container">
        <img className="header-logo" src={Logo} alt="" />
    </div>
  )
}

export default Header