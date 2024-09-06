export default function CartItem({ item }) {
    const { pizzaId, name, quantity, unitPrice, totalPrice } = item;


    return(
        <li>
            <p>{quantity}&times; {name}</p>
            <div>
                <p>{totalPrice}</p>
            </div>
        </li>
    )
}