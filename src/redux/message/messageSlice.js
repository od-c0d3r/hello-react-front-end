import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
    'message/fetchMessage',
    async (thunkAPI) => {
        // Relplace it with your localhost rails server host url
        const response = await fetch('http://localhost:3000/api/greeting'); 
        return response.json();
    }
)

export const messageSlice = createSlice({
    name: 'message',
    initialState: { message: {} },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default messageSlice.reducer;
