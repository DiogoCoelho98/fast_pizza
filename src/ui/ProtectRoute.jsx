import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";

export default function ProtectRoute({ children }) {
    const fullName = useSelector(state => state.user.username);

    if (!fullName) {
        return <Navigate to="/" />;
    }

    return children;
}
