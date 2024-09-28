import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
    const styles = "bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 focus:bg-yellow-300 disabled:cursor-not-allowed sm:px-6 sm:py-4"


    if (to) {
        return <Link className={styles} to={to}>{children}</Link>
    }

    return <button
                className={styles}
                disabled={disabled}
            >
            {children}
        </button>
}