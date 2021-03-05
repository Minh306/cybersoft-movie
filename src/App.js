// import { Dialog } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";

// core components
import Admin from "layouts/Admin.js";
import Login from "./views/Login"
// import RTL from "layouts/RTL.js";
//
import { IS_LOGIN, SET_LOGIN } from "./redux/Constants/UserConstants";
import { useDispatch } from "react-redux";
import createAction from "redux/Actions";
// import ShowtimeMovie from "views/ShowTimeManager";


function App() {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    useEffect(() => {
        dispatch(createAction(SET_LOGIN, currentUser))
        dispatch(createAction(IS_LOGIN, false))
        if (currentUser) {
            dispatch(createAction(IS_LOGIN, true))
        }
    }, [currentUser, dispatch])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                {/* <Route path="/admin/showtime/:id" component={ShowtimeMovie} /> */}
                {/* <Route path="/rtl" component={RTL} /> */}
                <Redirect from="/" to="/admin/user" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
