import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clothers: [],
    status: null
}

const clotherSlice = createSlice({
    name: "clother",
    initialState,
    reducers: {}
})

export default clotherSlice.reducer;