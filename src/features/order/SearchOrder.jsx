import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`)
        setQuery("");
    }

    return (
       <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search order number #"
                onChange={e => setQuery(e.target.value)}
                value={query}    
            />
       </form>
    );
}