import React from "react";
// import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
// import ChatWidget from "./ChatWidget/ChatWidget";
import { useAppSelector } from "../app/hooks";
// import PageLoader from "./PageLoader/Loader";
import Protected from "./Protected";
// import InitialLoader from "./PageLoader/InitialLoader";
import AuthProtected from "./AuthProtected";
import CircularProgress from '@mui/material/CircularProgress';
function Navigation() {
    const user = useAppSelector((state) => state.user);
    return (
        <>
            {/* <ToastContainer style={{ fontSize: "20px" }} /> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <p>Home</p>
                    }
                />
                <Route path="/auth" element={<AuthProtected />}>
                    {/* <Route
                        path="userlogin"
                        element={
                            <React.Suspense fallback={<InitialLoader />}>
                                <UserLogin />
                            </React.Suspense>
                        }
                    /> */}
                </Route>
                <Route path="/">
                    <Route path="test" element={<CircularProgress />}></Route>
                </Route>
                <Route path="/" element={<Protected />}>
                </Route>
            </Routes>
        </>
    );
}

export default Navigation;
