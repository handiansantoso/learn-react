import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addCart(state, action) {
            state.items.push(action.payload);
            console.log(current(state));
        },
        clearCart(state) {
            state.items.length = 0;
        }
    }
})
export default cartSlice.reducer;
export const { addCart, clearCart} = cartSlice.actions;