import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartClothers: localStorage.getItem("cartClothers") ? JSON.parse(localStorage.getItem("cartClothers")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const clotherIndex = state.cartClothers.findIndex(
                clother => clother.id === action.payload.id
            );

            if (clotherIndex >= 0) {
                state.cartClothers[clotherIndex].cartQuantity += 1
            } else {
                const tempClother = { ...action.payload, cartQuantity: 1 }
                state.cartClothers.push(tempClother)
            }

            localStorage.setItem("cartClothers", JSON.stringify(state.cartClothers))
        },

        removeFromCart(state, action) {
            const nextCartClothers = state.cartClothers.filter(
                cartClother => cartClother.id !== action.payload.id
            )

            state.cartClothers = nextCartClothers;
            localStorage.setItem("cartClothers", JSON.stringify(state.cartClothers))
        },

        decreaseCart(state, action) {
            const clotherIndex = state.cartClothers.findIndex(
                cartClother => cartClother.id === action.payload.id
            )

            if (state.cartClothers[clotherIndex].cartQuantity > 1) {
                state.cartClothers[clotherIndex].cartQuantity -= 1
            } else if (state.cartClothers[clotherIndex].cartQuantity === 1) {
                const nextCartClothers = state.cartClothers.filter(
                    cartClother => cartClother.id !== action.payload.id
                )
                state.cartClothers = nextCartClothers;
            }
            localStorage.setItem("cartClothers", JSON.stringify(state.cartClothers))
        },

        clearCart(state) {
            state.cartClothers = [];
            localStorage.setItem("cartClothers", JSON.stringify(state.cartClothers));
        },

        getTotals(state) {
            let {total, quantity} = state.cartClothers.reduce(
                (cartTotal, cartClother) => {
                    const { price, cartQuantity } = cartClother
                    const clotherTotal = price * cartQuantity

                    cartTotal.total += clotherTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal;
                }, {
                    total: 0,
                    quantity: 0
                })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;