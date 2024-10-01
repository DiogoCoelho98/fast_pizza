import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [] 
};


// Slice 
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload - pizza object
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload - ID
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        incrementQuantity(state, action) {
            // payload - ID
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity ++;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        decreaseQuantity(state, action) {
            // payload - ID
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity --;
            item.totalPrice = item.unitPrice * item.quantity;

            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action);
            }
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, incrementQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;



// Selectors functions 
export function getCart(state) {
    return state.cart.cart;
}

export function getCartTotalPizzas(state) {
    return state.cart.cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0)
}

export function getQuantityById(id) {
    return function(state) {
        return state.cart.cart.find(function(item) {
            return item.pizzaId === id;
        })?.quantity ?? 0;
    };
}

export function getCartTotalPrice(state) {
    return state.cart.cart.reduce((acc, curr) => {
        return acc + curr.totalPrice;  
    }, 0)
}
