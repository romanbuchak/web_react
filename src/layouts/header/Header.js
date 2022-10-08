import React from "react";
import logotype from "./../../assets/icons/logo.svg"
import cart from "../../assets/icons/Koshuk.png"
import user from "./../../assets/icons/User.png"
import "./header.css"

function Header() {
    return (
        <header>
            <img src={logotype} className="logotype" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Catalog</a>
                <a href="#">Cart</a>
            </nav>

            <img src={cart} className="cart"/>
            <img src={user} className="user"/>
        </header>
    )
}

export default Header;