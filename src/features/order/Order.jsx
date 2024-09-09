import { formatCurrency, formatDate, calcMinutesLeft  } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant.js"
import { useLoaderData } from "react-router";

// test id's - IIDSAT/CQU92U

export default function Order() {
    const order = useLoaderData();
    const { 
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery
     } = order.data;

     const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>

            <div>
                <h2>Status</h2>
                <div>
                    {priority && <span>Priority</span>}
                    <span> {status} order</span>
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0 ?
                        `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                        :
                        "Order should have arrived"}
                </p>
                <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>

            <div>
                <p>Pizza price: {formatCurrency(orderPrice)}</p>
                {priority && 
                <p>Priority price: {formatCurrency(priorityPrice)}</p>}
                <p>Total: {formatCurrency(orderPrice + priorityPrice)}</p>
            </div>
        </div>
    );
}
// Access req. params in the URL
export async function loader({ params }) {
    if (!params.orderId) throw new Error('orderId is missing in the params');
    const order = await getOrder(params.orderId);
    return order;
}
