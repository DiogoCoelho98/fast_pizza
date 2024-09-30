import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartTotalPizzas, getCartTotalPrice } from "./Cartslice";
import { formatCurrency } from "../../utils/helpers.js";

export default function CartOverview() {
    const totalNumberPizzas = useSelector(getCartTotalPizzas);
    const totalPrice = useSelector(getCartTotalPrice);
    
    if (!totalNumberPizzas) return null;
    
    return (
        <div className="
            bg-stone-800
             text-stone-200 
             uppercase
             px-4
             py-4
             sm:px-6
             text-sm
             md:text-base
             flex
             justify-between
             items-center
             "
        >
            <p className="
                text-stone-300
                font-semibold
                space-x-4 
                sm:space-x-6   
                "
            >
                <span>{totalNumberPizzas} pizzas</span>
                <span>Total price: {formatCurrency(totalPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>    
    )
}