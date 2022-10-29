import React from "react";
import "./item.css"
import {Link} from "react-router-dom";


function Item(props){
    console.log(props)
    return (
        <div className="item">
            <img src={props.img} alt={props.alt}/>
            <h2>{props.name}</h2>
            <div className="info">
                <b>ціна: {props.price} ₴</b>
                {/*<Link className="button-link" to='/novelty' state={{img: props.img, name: props.name,*/}
                {/*    price: props.price, description: props.description}}>*/}
                {/*    <button className='button-near-photo'>Більше...</button></Link>*/}

                <Link className="button-link" to={`/novelty/${props.id}`}>
                    <button className="button-near-photo">Більше...</button></Link>
            </div>
        </div>
    )
}

export default Item;