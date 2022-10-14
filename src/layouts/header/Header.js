import React from "react";
import logotype from "../../assets/icons/logo.svg"
import cart from "../../assets/icons/Koshuk.png"
import user from "../../assets/icons/User.png"
import "./header.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logotype} className="logotype" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/cart">Cart</Link>
            </nav>

            <img src={cart} className="cart"/>
            <img src={user} className="user"/>
        </header>
    )
}

export default Header;