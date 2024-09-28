import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
    const navigate = useNavigate();
    const styles = "text-blue-500 hover:text-blue-700";


    if (to === "-1") {
        return <button className={styles} onClick={() => navigate(-1)}>{children}</button>
    }

    return <Link 
        to={to}
        className={styles}
    >
        { children }
    </Link>
}