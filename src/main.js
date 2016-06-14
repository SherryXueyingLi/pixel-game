import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, Link} from "react-router";


import Layout from "./Layout";
import SnameGame from "./Routes/SnakeGame";

ReactDOM.render(
    <Router history ={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={SnameGame}></IndexRoute>
            
            
        </Route>
    </Router>, 

document.getElementById("vertivalSpot"));