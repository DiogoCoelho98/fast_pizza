import { formatCurrency, formatDate, calcMinutesLeft  } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant.js"
import { useLoaderData } from "react-router";
import OrderItem from "./OrderItem.jsx";

// test id's - IIDSAT/CQU92U

export default function Order() {
    const order = useLoaderData();
    const { 
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart
     } = order.data;
    
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div className="
                py-6
                px-4
                space-y-8"
        >
            <div className="
                    flex 
                    items-center
                    justify-between
                    flex-wrap
                    gap-2"
            >
                <h2 className="
                        text-xl 
                        font-semibold">
                    Order #{id}
                </h2>
                <div className="space-x-2 mt-4 sm:mt-0">
                    {priority && <span className="
                                    text-red-50
                                    bg-red-500
                                    rounded-full
                                    px-3
                                    py-1 
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    space-x-2"
                                >
                                    Priority
                                </span>
                    }
                    <span className="
                            text-green-600
                            font-semibold
                            uppercase
                            tracking-wide"
                    > 
                        {status} order
                    </span>
                </div>
            </div>

            <div className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-2
                    bg-stone-200
                    px-6
                    py-5">
                <p className="font-medium">
                    {deliveryIn >= 0 ?
                        `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                        :
                        "Order should have arrived"}
                </p>
                <p className="
                    text-xs
                    text-stone-500">
                    (Estimated delivery: {formatDate(estimatedDelivery)})
                </p>
            </div>

            <ul className="
                    divide-y 
                    divide-stone-200
                    border-b
                    border-t">
                {
                    cart.map(item => (
                        <OrderItem key={item.pizzaId} item={item}/>
                    ))
                }
            </ul>

            <div className="
                    space-y-2
                    bg-stone-200
                    px-6
                    py-5">
                <p className="
                        text-sm
                        font-medium
                        text-stone-600">
                    Pizza price: {formatCurrency(orderPrice)}
                </p>
                {
                    priority && 
                    <p className="
                        text-sm
                        font-medium
                        text-stone-600">
                        Priority price: {formatCurrency(priorityPrice)}
                    </p>
                }
                <p className="
                        font-bold
                        text-lg
                        uppercase">
                    Total Price: {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
}

// Access req. params in the URL
export async function loader({ params }) {
    if (!params.orderId) throw new Error('orderId is missing in the parameter');
    
    const order = await getOrder(params.orderId);
    return order;
}
