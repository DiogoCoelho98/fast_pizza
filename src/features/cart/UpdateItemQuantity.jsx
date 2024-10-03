import { incrementQuantity, decreaseQuantity } from "./Cartslice";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();

    return (
        <div className="
                flex 
                items-center 
                gap-2 
                md:gap-3">
            <Button 
                type="round"
                onClick={() => dispatch(decreaseQuantity(pizzaId))}>
                    -
            </Button>
            <span className="text-sm font-medium">
                {currentQuantity}
            </span>
            <Button 
                type="round"
                onClick={() => dispatch(incrementQuantity(pizzaId))}>
                    +
            </Button>
        </div>
    );
}