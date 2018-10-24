import React from 'react'

import Navbar from "./components/Navbar";
import {connect} from 'react-redux';
import ImagesList from './components/ImageList';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from 'react-grid-system';
import {routes} from './Routes';

const App = (props) => {
    console.log(props)

    return (
        <BrowserRouter>
        <div className="container is-fluid"> 
            <div className="columns">
                <div className="column is-3">
                    <Navbar/>
                </div>
                <div className="column">
                    <Switch>
                        {routes.map(({
                            path,
                            exact = false,
                            Component
                        }) => <Route path={path} exact={exact} component={Component}/>)}
                    </Switch>
                </div>
            </div>
        </div>
           

        </BrowserRouter>
    )
}
export default App
