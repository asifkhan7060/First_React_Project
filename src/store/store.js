import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

//redux toolkit is used for session handling purpose
//Store is created to store each features(reducers)
const store = configureStore({
    reducer: {
        auth : authSlice, //login and logout features
        //TODO : add more slices here for posts
    }
});


export default store;
