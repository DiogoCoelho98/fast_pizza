// TO DO - FIX THE KEY OF THE API
const API_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export async function getAddress(latitude, longitude) {
    try {
        const res = await fetch(`${API_URL}?latitude=${latitude}&longitude=${longitude}`);
        if (!res.ok) throw new Error("Error fetching latitude and longitude");
        const data = await res.json();
        console.log(data)
        return data;
    } catch(err) {
        console.error(err.message);
        return null;
    }
}
// Test
const latitude = 37.7749;
const longitude = -122.4194;

getAddress(latitude, longitude).then(addressData => {
    if (addressData) {
        console.log("Address data:", addressData); // Or inspect parts of the data here
    } else {
        console.log("Failed to fetch address.");
    }
}); 