import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant.js";
import Button from "../../ui/Button.jsx";


// Validate phone number format (+1 (555) 555-5555 / 123-456-7890 / etc)
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];  

export default function CreateOrder() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const formErrors = useActionData();
    const cart = fakeCart;
    
    return ( 
        <div>
            <h2>Ready to order? Let's go</h2>
        
            <Form method="POST" action="/order/new">
                <div>
                    <label>First name</label>
                    <input 
                        type="text" 
                        name="customer"
                        required
                        className="input"
                    />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input 
                            type="tel" 
                            name="phone"
                            required 
                            className="input"   
                        />
                        {formErrors?.phone && <p>{formErrors.phone}</p>}
                    </div>
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input 
                            type="text"
                            name="address"
                            required 
                            className="input"
                        />
                    </div>
                </div>

                <div>
                    <input 
                        type="checkbox" 
                        name="priority"
                        id="priority"
                        className="
                            h-6
                            w-6
                            accent-yellow-400
                            focus:outline-none
                            focus:ring
                            focus:ring-yellow-400
                            focus:ring-offset-1
                            "
                    />
                    <label htmlFor="priority">
                        Do you want to add your order as priority?
                    </label>
                </div>

                <div>
                    <input 
                        type="hidden" 
                        name="cart" 
                        value={JSON.stringify(cart)}    
                    />
                    <Button disabled={isSubmitting}>
                        {isSubmitting ? "Placing order..." : "Order now"}
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
        priority: data.priority === "on",
    };

    const errors = {};
    if (!isValidPhone(order.phone)) {
        errors.phone = "Introduce correct phone number";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    const newOrder = await createOrder(order);
    
    return redirect(`/order/${newOrder.data.id}`);
}