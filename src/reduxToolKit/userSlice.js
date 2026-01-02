import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        islogedin:false,
        profile: null
    },
    reducers:{
        userLogin:(state,action)=>{
            state.islogedin = true;
            state.profile = action.payload;
        },
        userLogout:(state,action)=>{
            state.islogedin = false;
            state.profile = null;
        }
    }
})

export const  {userLogin,userLogout} = userSlice.actions
export default userSlice.reducer;