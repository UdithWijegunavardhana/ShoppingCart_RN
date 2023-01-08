import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState: {
        isLoggedIn: false,
        userData:[],
        token: [],
    },
    reducers:{
        logIn(state, action ){
            const user = action.payload;
            state.isLoggedIn = true;
            state.userData.push({
                userID: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                gender: user.gender,
                image: user.image,
                token: user.token,
            })
            console.log('user data received : '+firstName+' '+lastName)
        },

        logOut(state){
            const user = action.payload;
            state.isLoggedIn = false;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;
