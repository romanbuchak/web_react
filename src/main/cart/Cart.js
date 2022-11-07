import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from "../../component/slice/cartSlice";
import "./cart.css";

function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])

    const handleRemoveFromCart = (cartClother) => {
        dispatch(removeFromCart(cartClother))
    };

    const handleDecreaseCart = (cartClother) => {
        dispatch(decreaseCart(cartClother))
    };

    const handleIncreaseCart = (cartClother) => {
        dispatch(addToCart(cartClother))
    };

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="cart-container">
            {cart.cartClothers.length === 0 ? (
                <div className="cart-empty">
                    <p>Твій кошик все ще пустий</p>
                    <div className="start-shopping">
                        <Link to="/catalog">
                            <span>Почати покупки</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="clother-title">Одяг</h3>
                        <h3 className="price">Ціна</h3>
                        <h3 className="quantity">Кількість</h3>
                        <h3 className="total">Загальна сума</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartClothers?.map(cartClother => (
                            <div className="cart-item" key={cartClother.id}>
                                <div className="cart-clother">
                                    <img src={cartClother.image} alt={cartClother.name} />
                                    <div>
                                        <h3>{cartClother.name}</h3>
                                        <p>{cartClother.desc}</p>
                                        <button onClick={() => handleRemoveFromCart(cartClother)}>Видалити</button>
                                    </div>
                                </div>
                                <div className="cart-clother-price">{cartClother.price} ₴</div>
                                <div className="cart-clother-quantity">
                                    <button onClick={() => handleDecreaseCart(cartClother)}>-</button>
                                    <div className="count">{cartClother.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCart(cartClother)}>+</button>
                                </div>
                                <div className="cart-clother-total-price">
                                    {cartClother.price * cartClother.cartQuantity} ₴
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <button className="clear-cart" onClick={() => handleClearCart()}>Очистити кошик</button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Загальна сума</span>
                                <span className="amount">{cart.cartTotalAmount} ₴</span>
                            </div>
                            <div className="continue-shopping">
                                <Link to="/catalog">
                                    <span>Продовжити покупки</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Cart;