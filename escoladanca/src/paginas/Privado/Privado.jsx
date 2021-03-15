import React from 'react';
import { Route, Switch,  useRouteMatch, } from "react-router-dom";
import Login from './Login/Login';


const Privado = () => {
    const {url, path} = useRouteMatch()

    return(
        <Switch>
            <Route path={`${path}/login`}>
                <Login/>
            </Route>
        </Switch>
    )
}

export default Privado;