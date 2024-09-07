import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">Go to Homepage</Link>
            <h2>%USERNAME%</h2>
        </header>
    );
}