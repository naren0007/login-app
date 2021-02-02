import React from 'react'
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const loggedIn = useSelector((state) => state.login.loggedIn);
    if (loggedIn) {
        localStorage.setItem('login', true);
    }
    return (
        <Route
            {...rest}
            render={(props) => localStorage.getItem('login')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

export default PrivateRoute;