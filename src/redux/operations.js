import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6620d4483bf790e070b0d47a.mockapi.io/api";

const myAxios = axios.create({
    baseURL: "https://6620d4483bf790e070b0d47a.mockapi.io/api",
})


export const getAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {


        try {
            const response = await myAxios.get("/adverts");
            console.log('response.data.refresh :>> ', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);