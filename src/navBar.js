import React from "react";
import {IndexLink, Link} from "react-router"

export default class navigationBar extends React.Component {
    constructor(){
        super()
        this.state = {collapsed: true};
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
        const {location} = this.props;
        const {collapsed} = this.state;
        const snakeClass = location.pathname === "/" ? "active":"";
        const othelloClass = location.pathname === "/othello" ? "active":"";
        const leetcodeClass = location.pathname === "/leetcode" ? "active":"";
        const navClass = collapsed ? "collapsed" : "";

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
             <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                </div>
                <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class={snakeClass}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Snake</IndexLink>
                        </li>
                        <li class={othelloClass}>
                            <Link to="/othello" onClick={this.toggleCollapse.bind(this)}>Othello</Link>
                        </li>
                        <li class={leetcodeClass}>
                            <Link to="/leetcode" onClick={this.toggleCollapse.bind(this)}>Leetcode</Link>
                        </li>
                    </ul>
                </div>
             </div>
            </nav>
        );
    }


}