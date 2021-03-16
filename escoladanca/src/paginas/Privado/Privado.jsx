import React from 'react';
import { Route, Switch,  useRouteMatch, } from "react-router-dom";
import Login from './Login/Login';


const Privado = (props) => {
    var setEstado = props.setEstado;
    
    const {url, path} = useRouteMatch()
    console.log(url)

    return(
        <Switch>
            <Route path={`${path}/login`}>
                <Login setEstado={setEstado} />
            </Route>
        </Switch>
    )
}

export default Privado;