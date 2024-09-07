import { Outlet, useNavigation } from "react-router";

import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import Loader from "./Loader.jsx";


export default function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">
            {isLoading && <Loader/>}

            <Header/>

            <main>
                <Outlet/>
            </main>
        
            <CartOverview/>
        </div>
    );
}