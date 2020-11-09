import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/home';
import { isAuthenticated } from './auth';
import { Login } from './pages/login';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;