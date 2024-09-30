import { getAddress } from "../../services/apiGeocoding.js";
import { createSlice } from "@reduxjs/toolkit";

// User current geographical location (lat/lng)
function getPosition() {
    return new Promise(function(resolve, reject) {
        // Browser API to access geographical position
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}

async function fetchAddress() {
    // User geolocation position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude
    };
    // Reverse geocoding to access address description
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return {position, address};
}

const initialState = {
    username: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        } 
    }
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;