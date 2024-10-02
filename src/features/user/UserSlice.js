import { getAddress } from "../../services/apiGeocoding.js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// User current geographical location (lat/lng)
function getPosition() {
    return new Promise(function(resolve, reject) {
        // Browser API to access geographical position
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async function() {
    // User geolocation position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude
    };
    // Reverse geocoding to access address description
    const address = await getAddress(position);

    return {position, address};
})

const initialState = {
    username: "",
    status: "idle",
    position: {},
    address: "",
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            // payload - username
            state.username = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.status = "idle";
                state.position = action.payload.position;
                state.address = action.payload.address;
            })
            .addCase(fetchAddress.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchAddress.rejected, (state) => {
                state.status = "error";
                state.error = "There was a problem getting your address. Make sure to fill this field";
            })
    }
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;