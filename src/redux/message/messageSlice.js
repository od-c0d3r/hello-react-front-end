import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
    'message/fetchMessage',
    async (thunkAPI) => {
        // Relplace it with your localhost rails server url endpoint
        const response = await fetch('LOCALHOST/api/greeting'); 
        return response.json();
    }
)

export const messageSlice = createSlice({
    name: 'message',
    initialState: { message: {}, status: [] },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state, action) => {
            state.status.push('pending');
        });
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            return {...action.payload, status: ['fulfilled']};
        });
        builder.addCase(fetchMessage.rejected, (state, action) => {
            state.status.push('rejected');
        });
    }
});

export default messageSlice.reducer;
