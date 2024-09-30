import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [] 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        incrementQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity ++;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        decreaseQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity --;
            item.totalPrice = item.unitPrice * item.quantity;

        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, incrementQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export function getCart(store) {
    return store.cart.cart;
}

export function getCartTotalPizzas(store) {
    return store.cart.cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0)
}

export function getCartTotalPrice(store) {
    return store.cart.cart.reduce((acc, curr) => {
       return acc + curr.totalPrice;  
    }, 0)
}