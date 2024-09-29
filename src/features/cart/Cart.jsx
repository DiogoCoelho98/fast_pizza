import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32
    },
    {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
      },
      {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
];

export default function Cart() {
    const cart = fakeCart;

    return(
        <div>
            <LinkButton to={"/menu"}
            >
                &larr; Back to menu
            </LinkButton>
            <h2>Your name, %NAME%</h2>

            <div>
                <Button to={"/order/new"} type="primary">Order pizzas</Button>
                <button>Clear cart</button>
            </div>
        </div>
    )
}