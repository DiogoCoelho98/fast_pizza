import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username.jsx"; 

export default function Header() {
    return (
        <header 
            className="
                bg-yellow-400
                uppercase
                px-4
                sm:px-6
                py-3
                border-b
                border-stone-200
                flex
                items-center
                justify-between
                "
        >
            <Link 
                to="/" 
                className="tracking-widest"
                >
                    Go to Homepage
            </Link>
            <Username />
            <SearchOrder/>
        </header>
    );
}