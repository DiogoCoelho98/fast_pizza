import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getQuantityById, getCartTotalPrice } from "./Cartslice.js";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";


export default function CartItem({ item }) {
    const { pizzaId, name, quantity, unitPrice, totalPrice } = item;
    
    const currentQuantity = useSelector(getQuantityById(pizzaId));
    const totalPriceCart = useSelector(getCartTotalPrice);

    return (
        <>
            <li className="
                    py-3
                    sm:flex
                    sm:items-center
                    sm:justify-between"
            >
                <p className="
                        mb-1
                        sm:mb-0"
                >
                    {quantity}&times; {name}
                </p>
                <div className="
                        flex
                        items-center
                        justify-between
                        sm:gap-6"
                    >
                    <p className="
                            text-sm
                            font-bold"
                    >
                        {formatCurrency(totalPrice)}
                    </p>
                    <UpdateItemQuantity 
                        pizzaId={pizzaId} 
                        currentQuantity={currentQuantity}
                        />
                    <DeleteItem 
                        type="small"
                        pizzaId={pizzaId}
                    >
                        Delete
                    </DeleteItem>
                </div>
            </li>
        </>
    )
}   