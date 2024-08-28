import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: () => {
            
        },
        remove: () => {
           
        },
    },
})

export const { add, remove } = CreateSlice.actions;
export default CreateSlice.reducer;