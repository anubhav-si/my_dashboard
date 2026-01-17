import { createSlice } from "@reduxjs/toolkit"; 

const productSlice = createSlice({
    name:"product",
    initialState:{
        productlist:null,
    },
    reducers:{
        addProductList:(state,action)=>{
            state.productlist = action.payload;
        }

    }
})

export const {addProductList} = productSlice.actions
export default productSlice.reducer;