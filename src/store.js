import { configureStore } from "@reduxjs/toolkit";
import updateslice from "./slices/Updateslices";
import userSlice from "./slices/UserSlice"

const store = configureStore({
    devTools:true,
    reducer : {
    update:updateslice,
    users:userSlice
    }
})
export default store;