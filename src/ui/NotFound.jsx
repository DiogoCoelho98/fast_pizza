import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton.jsx"

export default function NotFound() {
    const error = useRouteError();

    return (
        <div className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center">
            <h1>Something went wrong 😛</h1>
            <p className="mb-10">{error.data || error.message}</p>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}