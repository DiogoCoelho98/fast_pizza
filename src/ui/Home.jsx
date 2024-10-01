import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser.jsx";
import Button from "../ui/Button.jsx";

export default function Home() {
    const username = useSelector(store => store.user.username);

    return (
        <div className="
            my-10
            px-4
            sm:my-16
            text-center
            "
        >
            <h1 className="
                text-xl
                md:text-3xl 
                font-semibold
                mb-8
                "
                 
            >
                The Best Pizza <br/>
                <span className="
                    text-yellow-500
                    "
                >
                    Straight out of the Oven to you
                </span>
            </h1>

            {
                username.length > 0 ? 
                    <Button 
                        to="/menu" 
                        type="primary"
                    >
                        Continue ordering, {username}
                    </Button> 
                        : 
                    <CreateUser />
            }
        </div>
    );
}