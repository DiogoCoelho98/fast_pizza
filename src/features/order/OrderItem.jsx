import { formatCurrency } from "../../utils/helpers.js";

export default function OrderItem({ item }) {
    const { quantity, name, totalPrice } = item; 

    return (
        <li className="
                py-3"
        >
            <div className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-sm"
            >
                <p><span>{quantity}&times;</span> {name}</p>
                <p className="font-semibold">{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    );
}