import React from "react";
import logotype from "./../../assets/icons/logo2.svg"
import facebook from "./../../assets/icons/facebook.png"
import instagram from "./../../assets/icons/instagram.png"
import "./footer.css"


function Footer() {
    return (
        <footer>
            <img src={logotype} className="logotype" />
            <div className="text">
                <p>© 2019 - 2022 «Goldi». Всі права захищенно</p>
            </div>
            <div className="social-networks">
                <a href="https://www.facebook.com/tovtstyle/"><img src={facebook} className="facebook" /></a>
                <a href="https://www.instagram.com/goldi.ukraine/"><img src={instagram} className="instagram" /></a>
            </div>
        </footer>
    )
}

export default Footer;