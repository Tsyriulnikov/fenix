import {createSlice} from "@reduxjs/toolkit";

export interface LoadingQuotes {

}
const initialState: LoadingQuotes={}

export const loadingQuotesSlice = createSlice({
    name:'loadingQuotes',
    initialState,
    reducers:{}
})

export default loadingQuotesSlice.reducer
