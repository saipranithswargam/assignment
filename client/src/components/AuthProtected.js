import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";

function AuthProtected() {
    const location = useLocation();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        if (user.isLoggedIn) {
            navigate("/");
        }
        setLoading(false);
    }, []);

    return loading ? <p>Loading</p> : <Outlet />;
}

export default AuthProtected;
