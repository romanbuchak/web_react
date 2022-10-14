import React from "react";
import "./catalog.css"
import {addmasuv} from "../../masuv";
import Item from "../../component/clother/Item";


function Catalog() {
    const clothers = addmasuv()
    return (
        <main className='main-content'>
            <aside>
                <div className="search">
                    <input type="text" id="search" placeholder="Search..."/>
                    <button onClick={() => null}>Search</button>
                </div>
                <h3 className='sorted'>Sort by:</h3>
                <div className="sort">
                    <input type="checkbox" id="name"/>
                    <label>name</label>
                </div>
                <div className="sort">
                    <input type="checkbox" id="price"/>
                    <label>price</label>
                </div>
                <p>Total price: <span id="totalPrice"></span></p>
            </aside>
            <div className='items'>
                {clothers.map(element => (<Item img={element.img} name={element.name} price={element.price}/>))}
            </div>
        </main>
    )
}

export default Catalog;