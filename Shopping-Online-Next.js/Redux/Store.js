
import { configureStore } from "@reduxjs/toolkit"
import SliceCart from './SliceCart'
const store = configureStore({
    reducer:{
        cart:SliceCart
    }
})

export default store