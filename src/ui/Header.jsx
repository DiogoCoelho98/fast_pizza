import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
    return (
        <header>
            <Link to="/">Go to Homepage</Link>
            <h2>%USERNAME%</h2>
            <SearchOrder/>
        </header>
    );
}