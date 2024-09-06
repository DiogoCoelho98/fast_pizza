import { useState } from "react";

export default function CreateUser() {
    const [fullName, setFullName] = useState("");

    return (
        <form>
            <p>👋 Welcome! Please start by telling us your name</p>

            <input 
                type="text" 
                placeholder="Your full name"    
                onChange={e => setFullName(e.target.value)}
                value={fullName}
                required
            />

            {fullName !== "" && (
                <div>
                    <button>Start ordering</button>
                </div>
            )}
        </form>
    );
}