import { useSelector, useDispatch } from "react-redux";
import { getCart, clearCart, getCartTotalPrice } from "./Cartslice.js";
import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import { formatCurrency } from "../../utils/helpers.js";
 
export default function Cart() {
    const cart = useSelector(getCart);
    const username = useSelector(store => store.user.username);
    const totalPrice = useSelector(getCartTotalPrice);
    const dispatch = useDispatch();

    if (!cart.length) return <EmptyCart />

    function handleClearCart() {
        dispatch(clearCart());
    }

    return ( 
        <div className="
                px-4
                py-3">
            <LinkButton to={"/menu"}>
                &larr; Back to menu
            </LinkButton>
            <h2 className="
                    mt-7 
                    text-xl 
                    font-semibold">
                Your cart, {username}
            </h2>

            <ul className="
                    divide-y
                    divide-stone-200
                    border-b
                    mt-3">
                {
                cart.map(item => (
                    <CartItem key={item.pizzaId} item={item} />
                ))
                }
            </ul>

            <div className="my-10">
                <h1 className="
                        text-lg
                        font-bold
                        uppercase">
                    Total Price: {formatCurrency(totalPrice)}
                </h1>
            </div>

            <div className="
                    mt-6 
                    space-x-6
                    flex
                    justify-between">
                <Button 
                    to={"/order/new"} 
                    type="primary">
                        Order pizzas
                </Button>
                <Button 
                    type="secondary" 
                    onClick={handleClearCart}>
                        Clear cart
                </Button>
            </div>
        </div>
    )
}