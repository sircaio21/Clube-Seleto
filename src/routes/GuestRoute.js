import Home from "../pages/Home"
import React from "react";
import {Route} from "react-router-dom";
import authService from "../services/authService";

function GuestRoute({element: Component, ...rest}){
    const isAuthenticated = authService.isAuthenticated();
    
    return (
    <Route {...rest} element={(
        isAuthenticated
        ?<Home/>:Component

    )}/>
    )
    

}

export default GuestRoute;