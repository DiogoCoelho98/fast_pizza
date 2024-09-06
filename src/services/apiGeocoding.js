const API_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

// User address information with reverse geocode
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