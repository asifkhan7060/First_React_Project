import { createSlice } from "@reduxjs/toolkit";

//Here we code for login and logout features using redux toolkit (session handling purpose)

const initialState = {  //creating initial state
    status : false, 
    userData: null
}

const authSlice = createSlice({ 
    name: "auth",  //Specific name is given to each slice
    initialState,
    reducers: {
        login: (state, action) => {  //action is used to get the data from payload & state is used to update the state
            state.status = true; 
            state.userData = action.payload.userData; //due to payload user entered data is accessed which we get via action 
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions; 

export default authSlice.reducer; 