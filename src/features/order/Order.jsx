import { formatCurrency, formatDate, calcMinutesLeft  } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant.js"
import { useLoaderData } from "react-router";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import OrderItem from "./OrderItem.jsx";
import UpdatePriority from "./UpdatePriority.jsx";

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

     const fetcher = useFetcher();

     // Fetch data available on "/menu" without navigation
     useEffect(() => {
        if (!fetcher?.data && fetcher.state === "idle") {
            fetcher.load("/menu")
        }
     }, [fetcher])
    
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div className="
                py-6
                px-4
                space-y-8">

            <div className="
                    flex 
                    items-center
                    justify-between
                    flex-wrap
                    gap-2">
                <h2 className="
                        text-xl 
                        font-semibold">
                    Order Number: #{id}
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
                                    space-x-2">
                                        Priority
                                </span>
                    }
                    <span className="
                            text-green-600
                            font-semibold
                            uppercase
                            tracking-wide"> 
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
                        <OrderItem 
                            key={item.pizzaId} 
                            item={item}
                            ingredients={fetcher.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []}
                            isLoadingIngredients={fetcher.state === "loading"}/>
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

            {!priority && <UpdatePriority order={order.data}/>}
        </div>
    );
}

// Access req. params
export async function loader({ params }) {
    if (!params.orderId) throw new Error('orderId is missing in the parameter');
    
    const order = await getOrder(params.orderId);
    return order;
}
