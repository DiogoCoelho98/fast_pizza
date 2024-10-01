import { useState } from "react";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant.js";
import { useSelector } from "react-redux";
import { clearCart, getCart, getCartTotalPrice } from "../cart/Cartslice.js";
import Button from "../../ui/Button.jsx";
import EmptyCart from "../cart/EmptyCart.jsx";
import store from "../../store.js";
import { formatCurrency } from "../../utils/helpers.js";


// Validate phone number format (e.g, +1 (555) 555-5555 / 123-456-7890 / etc)
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);
 
export default function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const formErrors = useActionData();
    
    const cart = useSelector(getCart);
    const username = useSelector(store => store.user.username);

    const totalCartPrice = useSelector(getCartTotalPrice);
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priorityPrice;

    if (!cart.length) {
        return <EmptyCart />
    }
    
    return ( 
        <div className="
                px-4
                py-6">
            <h2 className="
                text-xl
                font-semibold
                mb-8">
                Ready to order? Let's go
            </h2>
        
            <Form method="POST" action="/order/new">
                <div className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    mb-5
                    space-y-4">
                    <label className="sm:basis-40">First name</label>
                    <input 
                        type="text" 
                        name="customer"
                        // defaultValue allows to change the value input, contraty to value
                        defaultValue={username}  
                        required
                        className="input grow"/>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    mb-5
                    space-y-4">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input 
                            type="tel" 
                            name="phone"
                            required 
                            className="input w-full"   
                        />
                        {formErrors?.phone && <p className="
                        text-xs
                        mt-2
                        text-red-500"
                        >
                            {formErrors.phone}
                        </p>}
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    mb-5
                    space-y-4">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input 
                            type="text"
                            name="address"
                            required 
                            className="input w-full"
                        />
                    </div>
                </div>

                <div className="
                        mb-12
                        flex
                        gap-5
                        items-center">
                    <input 
                        type="checkbox" 
                        name="priority"
                        id="priority"
                        onChange={(e) => setWithPriority(e.target.checked)}
                        value={withPriority}
                        className="
                            h-6
                            w-6
                            accent-yellow-400
                            focus:outline-none
                            focus:ring
                            focus:ring-yellow-400
                            focus:ring-offset-1"/>
                    <label 
                        htmlFor="priority"
                        className="font-medium">
                            Do you want to add your order as priority?
                    </label>
                </div>

                <div>
                    <input 
                        type="hidden" 
                        name="cart" 
                        value={JSON.stringify(cart)}/>

                    <Button 
                        disabled={isSubmitting} 
                        type="primary">
                            {isSubmitting ? 
                                    "Placing order..." 
                                    : 
                                    `Order now for ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export async function action({ request }) { 
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "true",
    };

    const errors = {};
    if (!isValidPhone(order.phone)) {
        errors.phone = "Introduce a correct phone number (e.g, +1 (555) 555-5555 )";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    const newOrder = await createOrder(order);
    // Dispatch action directly to clear cart
    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.data.id}`);
}