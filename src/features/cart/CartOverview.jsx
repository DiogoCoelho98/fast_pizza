import { Link } from "react-router-dom";

export default function CartOverview() {
    return(
        <div className="
            bg-stone-800
             text-stone-200 
             uppercase
             px-4
             py-4
             sm:px-6
             text-sm
             md:text-base
             flex
             justify-between
             items-center
             "
        >
            <p className="
                text-stone-300
                font-semibold
                space-x-4 
                sm:space-x-6   
                "
            >
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>    
    )
}