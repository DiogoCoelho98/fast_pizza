import { formatCurrency } from "../../utils/helpers.js";

export default function OrderItem({ item, ingredients, isLoadingIngredients }) {
    const { quantity, name, totalPrice } = item; 

    return (
        <li className="
                py-3
                space-y-1">
            <div className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-sm">
                <p><span>{quantity}&times;</span> {name}</p>
                <p className="font-semibold">{formatCurrency(totalPrice)}</p>
            </div>
            <p className="
                    text-sm
                    capitalize
                    italic
                    text-stone-500">
                {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}           
            </p>
        </li>
    );
}