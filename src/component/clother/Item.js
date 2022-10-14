import React from "react";
import "./item.css"

function Item(props){
        return (
            <div className="item">
                <img src={props.img} />
                <h2>{props.name}</h2>
                <div className="info">
                    <b>ціна: {props.price} ₴</b>
                </div>
            </div>
        )
}

export default Item;