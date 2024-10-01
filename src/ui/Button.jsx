import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
    const basedStyles = " text-center text-sm bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 focus:bg-yellow-300 disabled:cursor-not-allowed ";

    const typeStyles = {
        primary: basedStyles + "px-4 py-3 sm:px-6 sm:py-4",
        secondary: "text-xs bg-transparent border-2 border-stone-300 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-1 focus:bg-stone-300 focus:text-stone-800 disabled:cursor-not-allowed px-4 py-2px.5 sm:px-6 sm:py-3.5",
        small: basedStyles + "px-4 py-2 md:-5 md:py-2.5 text-sm",
        round: basedStyles + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
    };

    if (to) {
        return <Link 
                    className={typeStyles[type]} 
                    to={to}
                    >
                        {children}
                </Link>
    }

    if (onClick) {
        return <button 
                    className={typeStyles[type]}
                    disabled={disabled}
                    onClick={onClick}
                    >
                        {children}
                </button>
    }

    return <button
                className={typeStyles[type]}
                disabled={disabled}
                >
                    {children}
        </button>
}