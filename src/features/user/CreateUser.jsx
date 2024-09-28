import { useState } from "react";
import Button from "../../ui/Button.jsx";

export default function CreateUser() {
    const [fullName, setFullName] = useState("");

    return (
        <form>
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
                    input    
                    "
            />

            {fullName !== "" && (
                <div>
                    <Button>Start ordering</Button>
                </div>
            )}
        </form>
    );
}  