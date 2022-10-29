import React, {useEffect, useState} from "react";
import "./catalog.css"
import Item from "../../component/clother/Item";
import axios from "axios";
import Loader from "../../component/loader/Loader";


function Catalog() {

    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [clothers, setClothers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/clothes/get').then(res => {
            setClothers(res.data)
        })
    }, [])

    const sortByPrice = (arr) => {
        return arr.sort((a, b) =>
            a.price > b.price ? 1 : -1
        );
    };

    const handleSortByPrice = () => {
        document.querySelector('#name').checked = false;
        setClothers(prevClothers => sortByPrice([...prevClothers])
        )
    };

    const sortByName = (arr) => {
        return arr.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );
    };

    const handleSortByName = () => {
        document.querySelector('#price').checked = false;
        setClothers(prevClothers => sortByName([...prevClothers])
        )
    };

    const filteredClothers = clothers.filter(clothers => {
        return clothers.name.toLowerCase().includes(value.toLowerCase())
    })

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return (
        <>
            {loading ?
                <Loader/>
                :
                <main className="main-content">
                    <aside>
                        <div className="search">
                            <input type="text" id="search" placeholder="Пошук..."
                                   onChange={(event) => setValue(event.target.value)}/>
                        </div>
                        <h3 className="sorted">Сортувати за:</h3>
                        <div className="sort">
                            <input type="checkbox" id="name" onClick={handleSortByName}/>
                            <label htmlFor="name">назвою</label>
                        </div>
                        <div className="sort">
                            <input type="checkbox" id="price" onClick={handleSortByPrice}/>
                            <label htmlFor="price">ціною</label>
                        </div>
                        {/*<p>Загальна сума: <span id="totalPrice"></span></p>*/}
                    </aside>
                    <div className="items">
                        {filteredClothers.map((element, index) => (
                            <Item id={element.id} img={element.image} name={element.name} price={element.price}
                                  description={element.description} alt={element.name} key={index}/>))}
                    </div>
                </main>
            }
        </>
    )
}

export default Catalog;