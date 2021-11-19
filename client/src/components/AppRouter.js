import React, {useContext} from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routs";
import Page404 from "../page/Page404";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (

        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<Page404/>} />
        </Routes>
    );
};

export default AppRouter;