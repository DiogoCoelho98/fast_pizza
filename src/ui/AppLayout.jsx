import { Outlet, useNavigation } from "react-router";

import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import Loader from "./Loader.jsx";


export default function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="
            grid
            h-screen
            grid-rows-[auto_1fr_auto]
            "
        >
            {isLoading && <Loader/>}

            <Header/>
            <div className="
                overflow-auto
                "
            >
                <main className="
                    max-w-3xl
                    mx-auto
                    "
                >
                    <Outlet/>
                </main>
            </div>
            <CartOverview/>
        </div>
    );
} 