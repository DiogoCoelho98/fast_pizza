import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./UserSlice.js";
import { useNavigate } from "react-router";
import Button from "../../ui/Button.jsx";

export default function CreateUser() {
    const [fullName, setFullName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!fullName) return null;
        dispatch(updateName(fullName));
        navigate("/menu");
    }

    return (
        <form onSubmit={handleSubmit}>
            <p
                className="
                    mb-4
                    text-sm
                    text-stone-600
                    md:text-base
                    "
            >
            👋 Welcome! Please start by telling us your name
            </p>

            <input 
                type="text" 
                placeholder="Full name"    
                onChange={e => setFullName(e.target.value)}
                value={fullName}
                required
                className="
                    w-72
                    mb-8
                    input"
            />

            {fullName !== "" && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    );
}  