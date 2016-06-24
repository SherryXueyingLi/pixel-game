import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, Link} from "react-router";


import Layout from "./Layout";
import SnameGame from "./Routes/SnakeGame";
import OthelloGame from "./Routes/OthelloGame";
import Leetcode from "./Routes/Leetcode";

ReactDOM.render(
    <Router history ={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={SnameGame}></IndexRoute>
            <Route path="snake" name="snake" component={SnameGame}></Route>
            <Route path="othello" name="othello" component={OthelloGame}></Route>
            <Route path="leetcode(/:subjects)(/:subject)" name="leetcode" component={Leetcode}></Route>
        </Route>
    </Router>, 

document.getElementById("vertivalSpot"));