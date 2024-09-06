import { Link } from "react-router-dom";

export default function EmptyCart() {
    return (
        <div>
            <Link to={"/menu"}>&larr; Back to menu</Link>
            <p>
                Your cart still empty<br/>
                Order some pizzas
            </p>
        </div>
    );
}