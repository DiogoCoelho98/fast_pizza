import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router";

import MenuItem from "./MenuItem.jsx";

export default function Menu() {
    // Receives data from createBrowserRouter() -> loader property
    const menu = useLoaderData();

    return (
        <ul>
            {menu.map(pizza => (
                <MenuItem 
                    pizza={pizza} 
                    key={pizza.id}
                />
            ))}
        </ul>
    );
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}