import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function Protected() {
    const user = useSelector((state) => state.user);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLoggedIn) {
            navigate("/")
        }
        setLoading(false);
    }, [user]);

    return loading ? <p>loading...</p> : <Outlet />;
}

export default Protected;
