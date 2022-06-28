import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {LocalStore} from "../../utils/LocalStore";

export default ({ component: Component, ...rest }) => (
    <Route exact={true} {...rest} render={props => {
        return (
           <Component {...props} />
        )
    }} />
);