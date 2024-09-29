import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
    const basedStyles = "bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 focus:bg-yellow-300 disabled:cursor-not-allowed ";

    const typeStyles = {
        primary: basedStyles + "px-4 py-3 sm:px-6 sm:py-4",
        small: basedStyles + "px-4 py-2 md:px-5 md:py-2.5 text-sm"

    };

    if (to) {
        return <Link className={typeStyles[type]} to={to}>{children}</Link>
    }

    return <button
                className={typeStyles[type]}
                disabled={disabled}
            >
            {children}
        </button>
}