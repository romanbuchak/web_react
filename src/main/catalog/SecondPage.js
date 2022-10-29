import {Link, useParams} from "react-router-dom"
import "./secondPage.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Loader from "../../component/loader/Loader";

function SecondPage() {
    let {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [clothers, setClothers] = useState({id: 1, name: "not found", price: 0, image: '', description: ""})

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/clothes/get/${id}`).then(res => setClothers(res.data))
    }, [id])


    return (
        <>
            {loading ?
                <Loader/>
                :
                <div className="novelty">
                    <div className="page">
                        <img className="image" src={clothers.image}/>
                        <div className="content-novelty">
                            <h1>{clothers.name}</h1>
                            <p>{clothers.description}</p>
                        </div>
                    </div>
                    <div className="footer-page">
                        <h3>Ціна: {clothers.price} ₴</h3>
                        <Link to='/catalog'>
                            <button>Go back</button>
                        </Link>
                        <Link to='/cart'>
                            <button className="to-cart">Add to cart</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default SecondPage;