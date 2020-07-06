import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./private_router";

import {
    Login,
    SignUp,
    Home,
    Profile
} from './../screens'

const RouterApp = (props) => {
    return <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path={routes.login} component={Login}/>
            <Route path={routes.signup} component={SignUp}/>
            <PrivateRoute path={routes.home} component={Home} />
            <PrivateRoute path={routes.profile} component={Profile} />
        </Switch>
    </Router>
}

export default RouterApp;