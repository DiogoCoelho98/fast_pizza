import { useSelector } from "react-redux";

export default function Username() {
    const username = useSelector(store => store.user.username);
    if (!username) return null; 

    return (
        <div className="
            text-sm
            font-semibold
            hidden
            md:block">
            <h3>{username}</h3>
        </div>
    );
}