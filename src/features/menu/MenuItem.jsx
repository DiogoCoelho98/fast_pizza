import { formatCurrency } from "../../utils/helpers.js"
import { useDispatch, useSelector } from "react-redux";
import { addItem, getQuantityById } from "../cart/Cartslice.js";
import Button from "../../ui/Button.jsx";
import DeleteItem from "../cart/DeleteItem.jsx";

export default function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const dispatch = useDispatch();
    // Check if the item it's in the arr
    const currentQuantity = useSelector(getQuantityById(id));
    const isInCart = currentQuantity > 0;

    function handleAddCart() {
        const newItem = {
            pizzaId : id,
            name: name,
            quantity: 1,
            unitPrice: unitPrice,
            totalPrice: 1 * unitPrice
        };

        dispatch(addItem(newItem));
    }

    return (
        <li className="flex gap-4 py-2">
            <img 
                src={imageUrl} 
                alt={name} 
                className={`
                    h-24 
                    ${soldOut ? "grayscale opacity-70" : ""}`
                }
            />

            <div className="
                    flex 
                    flex-grow
                    flex-col
                    pt-0.5"
            >
                <p className="font-medium">
                    {name}
                </p>
                <p className="
                    text-sm italic
                     text-stone-500
                     capitalize"
                >
                    {ingredients.join(",")}
                </p>
                
                <div className="
                        mt-auto 
                        flex
                        items-center
                        justify-between"
                >
                    {
                        !soldOut ? 
                            <p 
                                className="text-sm"
                            >
                                {formatCurrency(unitPrice)}
                            </p> 
                            : 
                            <p className="
                                text-sm
                                uppercase
                                font-medium
                                text-stone-500"
                            >
                                Sold out
                            </p>
                    }
                    <div className="flex gap-4">
                        {
                            !soldOut && 
                                <Button 
                                    type="small"
                                    onClick={handleAddCart}
                                >
                                    Add to cart
                                </Button>
                        }
                        {
                            isInCart && 
                                <DeleteItem 
                                    pizzaId={id}
                                >
                                    -
                                </DeleteItem>
                        }
                    </div>
                </div>
            </div>
        </li>
    );
}