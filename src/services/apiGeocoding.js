const API_URL = "https://api.opencagedata.com/geocode/v1/json";
const API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY; 

export async function getAddress({ latitude, longitude }) {
    try {
        const res = await fetch(`${API_URL}?q=${latitude}+${longitude}&key=${API_KEY}`);
        if (!res.ok) {
            const errorDetails = await res.text();
            console.error("Error details:", errorDetails);
            throw new Error(`Error fetching latitude and longitude: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        const address = data.results[0]?.formatted || "Address not found";
        return address;
    } catch(err) {
        console.error(err.message);
        return null;
    }
}
     