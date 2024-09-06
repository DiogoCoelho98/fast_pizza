import { formatCurrency, formatDate, calcMinutesLeft  } from "../../utils/helpers";

const order = {
    id: "ABCDEF",
    customer: "Diogo",
    phone: "938566848",
    address: "Odivelas, Lisbon, Portugal",
    priority: true,
    estimatedDelivery: "2027-04-25T10:00:00",
    cart: [
        {
            pizzaId: 7,
            name: "Napoli",
            quantity: 3,
            unitPrice: 16,
            totalPrice: 48,
          },
          {
            pizzaId: 5,
            name: "Diavola",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
          },
          {
            pizzaId: 3,
            name: "Romana",
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
          }
    ],
    position: "-9.000,38.000",
    orderPrice: 95,
    priorityPrice: 19 // 20% of the total amount
};

export default function Order() {
    const { 
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery
     } = order;

     const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>

            <div>
                <h2>Status</h2>

                <div>
                    {priority && <span>Priority</span>}
                    <span>{status} order</span>
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