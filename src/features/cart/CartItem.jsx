import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button.jsx";


export default function CartItem({ item }) {
    const { pizzaId, name, quantity, unitPrice, totalPrice } = item;

    return (
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
                <Button type="small">Delete</Button>
            </div>
        </li>
    )
}   