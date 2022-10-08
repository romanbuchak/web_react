import React from "react";
import "./clother.css";

function Clother(props) {
    return(
        <div className="clother">
            <img src={props.image}/>
            <h2>{props.name}</h2>
            <p>{props.price} ₴</p>
        </div>
    );
}

export default Clother;