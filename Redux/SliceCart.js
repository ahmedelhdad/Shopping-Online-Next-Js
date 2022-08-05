import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const SliceCart = createSlice({
    name:'cart',
    initialState:{counter:0 ,productsCart:[] , TotalPrice:0},
    reducers:{
        addCart:(state,action) => 
        {
            const axios = state.productsCart.findIndex((item) => item.id === action.payload.id)
            if(axios >= 0)
            {
                toast.info(`${action.payload.title.substring(0,12)} Cart`,{
                    position: "bottom-left"
                })
            }else
            {
                state.productsCart = [...state.productsCart,{...action.payload,amount:1}]
                toast.success(`success ${action.payload.title.substring(0,12)} Cart`,{
                    position: "bottom-left"
                })
            }
        },
        getCartTotal:(state) => 
        {
            const {totalAmount,TotalPrice} = state.productsCart.reduce((cart,item) => {
                const {amount,price} = item
                cart.TotalPrice += amount * price
                cart.totalAmount += amount
                return cart
            },{
                totalAmount:0,
                TotalPrice:0
            })
            state.counter = totalAmount
            state.TotalPrice = Math.round(TotalPrice)
        },
        Dalet:(state,action) => 
        {
            state.productsCart =state.productsCart.filter((item) => item.id !== action.payload.id)
            toast.info(`Dalet ${action.payload.title.substring(0,12)} Cart`,{
                position: "bottom-left"
            })
        },
        increase:(state,action) => 
        {
            state.productsCart = state.productsCart.map((item) => item.id === action.payload.id ? {...item,amount:item.amount+1}: item)
            toast.success(`increase ${action.payload.title.substring(0,12)}`,{
                position: "bottom-left"
            })
        },
        decrease:(state,action) =>
        {
            state.productsCart = state.productsCart.map((item) => {
                return item.id === action.payload.id ? {...item,amount:item.amount-1}: item
            }).filter((item) => item.amount !== 0)
            
            if(action.payload.amount === 1)
            {
                toast.info(`Dalet ${action.payload.title.substring(0,12)} Cart`,{
                    position: "bottom-left"
                })
            }else
            {
                toast.info(`decrease ${action.payload.title.substring(0,12)}`,{
                    position: "bottom-left"
                })
            }
        },
        clearAll : (stata) => 
        {
            stata.productsCart = []
            toast.info(`clearAll Cart`,{
                position: "bottom-left"
            })
        }
        
    }
})

export const {addCart,getCartTotal,Dalet ,increase ,decrease ,clearAll} = SliceCart.actions
export default SliceCart.reducer