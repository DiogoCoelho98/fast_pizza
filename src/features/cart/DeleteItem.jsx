import { useDispatch } from "react-redux"
import { deleteItem } from "./Cartslice";
import Button from "../../ui/Button"

export default function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();

    return <Button 
                type="small" 
                onClick={() => dispatch(deleteItem(pizzaId))}
            >
                Delete
            </Button>
}