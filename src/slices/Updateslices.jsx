import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    name: "syed yunus.s",
     age: 26,
      city: "india"
}
const updateslice = createSlice({
    name:"update",
    initialState,
    reducers : {
        updateForm : (state,action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.city = action.payload.city;
            
        }
    }
})

export const {updateForm} = updateslice.actions;
export default updateslice.reducer;