import "./Header.css";
import HeaderData from "./data.json";
import cart_icon from "../../svg/cart-icon.svg";
import profile_icon from "../../svg/profile-icon.svg";
import logo from "../../logo.svg";
import burger_icon from "../../svg/burger-icon.svg";
import burger_close from "../../svg/burger-close.svg";
import { useState } from "react";

const Header = () => {

    const [showMobNav, setShowMobNav] = useState(false);

    // render menu  
    const renderedNav = () => {
        return (
            <ul className={showMobNav ? "nav-menu open" : "nav-menu"}>
               { HeaderData.menuItems.map((navItem, index) => (
                    <li key={index}>
                        {navItem.itemDropdown ?
                            <>
                            {navItem.itemTitle}{<span className="caret"></span>}
                                <ul>
                                    {navItem.itemDropdown.map((list) => (
                                        <li key={list}><a href="#" onClick={() => setShowMobNav(false)}>{list}</a></li>
                                    ))}
                                </ul>
                            </>
                            : <a href="#" onClick={() => setShowMobNav(false)}>{navItem.itemTitle}</a>
                        }
                    </li>
                ))}
            </ul>
        )
    }

    // open nav in mob 
    const handleOpenNav = () => {
        setShowMobNav(!showMobNav)
    }

    return ( 
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-9 col-5">
                        <div className="h-left">
                            <div className="logo"><a href="#"><img src={logo} alt="" /></a></div>
                            {renderedNav()}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-7">
                        <div className="h-right">
                            <div className="cart-box">
                                <a href="#"><img src={cart_icon} alt="" /></a>
                            </div>
                            <div className="profile-box">
                                <a href="#"><img src={profile_icon} alt="" /></a>
                            </div>
                            <button className="btn mob-burger" onClick={handleOpenNav}>{showMobNav ? <img src={burger_close} alt="" /> : <img src={burger_icon} alt="" />}</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;