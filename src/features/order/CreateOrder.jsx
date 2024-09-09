import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant.js";
 
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
                    />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input 
                            type="tel" 
                            name="phone"
                            required    
                        />
                    </div>
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input 
                            type="text"
                            name="address"
                            required 
                        />
                    </div>
                </div>

                <div>
                    <input 
                        type="checkbox" 
                        name="priority"
                        id="priority"
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
                    <button>Order now</button>
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
    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.data.id}`);
}