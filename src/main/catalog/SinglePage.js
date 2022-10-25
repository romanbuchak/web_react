import {Link, useLocation} from "react-router-dom"
import "./singlePage.css"

function SinglePage() {
    const location = useLocation();
    const state = location.state;
    console.log(state)
    return (
        <div className="novelty">
            {state && (<><div className="page">
                    <div className="image"><img src={state.img} /></div>
                    <div className="content-novelty">
                        <h1>{state.name}</h1>
                        <p>{state.description}</p>
                    </div>
                </div>
                    <div className="footer-page">
                        <h3>Ціна: {state.price} ₴</h3>
                        <Link to='/catalog'> <button>Go back</button></Link>
                        <Link to='/cart'><button className="to-cart">Add to cart</button></Link>
                    </div>
                </>
            )}
        </div>

    )
}

export default SinglePage;