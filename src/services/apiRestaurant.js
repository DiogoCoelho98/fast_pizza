const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// GET - Pizzas menu
export async function getMenu() {
    try {
        const res = await fetch(`${API_URL}/menu`);
        if (!res.ok) throw new Error("Failed fetching menu");
        const data = await res.json();
        if (data.status !== "success") throw new Error("Data not available");
        return data.data;
    } catch(err) {
        console.error(err.message);
        return null;
    }
};

// GET - Order by ID
export async function getOrder(id) {
   try {
        const res = await fetch(`${API_URL}/order/${id}`);
        if (!res.ok) throw new Error(`Failed fetching order #${id}`);
        const data = await res.json();
        if (data.status !== "success") throw new Error(data.message);
        return data
   } catch(err) {
        console.error(err.message);
        return null;
   }
}

// POST - Create a order
export async function createOrder(newOrder) {
    try {
        const res = await fetch(`${API_URL}/order`, {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if(!res.ok) throw new Error("Error sending data");
        const data = await res.json();
        if (data.status !== "success") throw new Error("Order creation failed");
        return data;
    } catch(err) {
        console.error(err.message);
        return null;
    } 
}

// PATCH - Update order
export async function updateOrder(id, updatedOrder) {
    try {
        const res = await fetch(`${API_URL}/order/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedOrder),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) throw new Error("Error updating order");
        const data = await res.json();
        if (data.status !== "success") throw new Error(data.message || "Failed to update the order");
        return data;
    } catch(err) {
        console.error(err.message);
        return null;
    }
}
