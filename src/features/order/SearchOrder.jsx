import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
       <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search order number"
                onChange={e => setQuery(e.target.value)}
                value={query} 
                className="
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    bg-yellow-200
                    placeholder:text-stone-400
                    w-28
                    sm:w-64
                    focus:sm:w-72
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:ring
                    focus:ring-yellow-500"/>
       </form>
    );
}