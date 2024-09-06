import { useState } from "react";

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
    const [priority, setPriority] = useState(false);
    const cart = fakeCart;


    return ( 
        <div>
            <h2>Ready to order? Let's go</h2>

            <form>
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
                        onChange={e => setPriority(e.target.value)}
                        value={priority}    
                    />
                    <label htmlFor="priority">
                        Do you want to add your order as priority?
                    </label>
                </div>

                <div>
                    <button>Order now</button>
                </div>
            </form>
        </div>
    )
}