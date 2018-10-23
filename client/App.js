import React from 'react'

import Navbar from "./components/Navbar";
import {connect} from 'react-redux';
import ImagesList from './components/ImagesList';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from 'react-grid-system';
import {routes} from './Navigation';
 

const App = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <Navbar/>
                    </Col>
                    <Col>
                        <Switch>
                            {routes.map(({path,exact=false,Component})=>
                                <Route path={path} exact={exact}  component={Component}/>
                            )}
                        </Switch> 
                    </Col>
                </Row>
            </Container>
                {/* <Navbar/>
                <Switch>
                    <Route exact path="/" component={() =><h2> Home </h2>}/>
                    <Route path="/images" component={ImagesList}/>
                </Switch> */}
        </BrowserRouter>
    )
}
export default App
