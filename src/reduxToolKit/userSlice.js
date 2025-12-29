import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        islogedin:false,
        userName:""
    },
    reducers:{
        userLogin:(state,action)=>{
            state.islogedin = true;
        },
        userLogout:(state,action)=>{
            state.islogedin = false;
        }
    }
})

export const  {userLogin,userLogout} = userSlice.actions
export default userSlice.reducer;