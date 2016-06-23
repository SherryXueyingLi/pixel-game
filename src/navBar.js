import React from "react";
import {IndexLink, Link} from "react-router"

export default class navigationBar extends React.Component {
    constructor(){
        super()
        this.state = {collapsed: true, expanRelax: false};
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        const expanRelax = false;
        this.setState({collapsed, expanRelax});
    }

    toggleRelax(){
        const expanRelax = !this.state.expanRelax;
        this.setState({expanRelax});
    }

    render(){
        const {location} = this.props;
        const {collapsed, expanRelax} = this.state;
        const mainClass = location.pathname === "/" ? " active":"";
        const snakeClass = location.pathname === "/snake" ? " active":"";
        const othelloClass = location.pathname === "/othello" ? " active":"";
        const leetcodeClass = location.pathname.match(/^\/leetcode/) ? " active" : "";;
        const navClass = collapsed ? " collapse" : "";
        const collapsedClass = collapsed ? " collapsed" : "";
        const openRelax = expanRelax ? " open":"";

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
             <div class="container">
                <div class="navbar-header">
                    <button type="button" class={"navbar-toggle "+collapsedClass} onClick={this.toggleCollapse.bind(this)} >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" to="/" onClick={this.toggleRelax.bind(this)}>Sherry's Study Site</a>
                </div>
                <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class={mainClass}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Main</IndexLink>
                        </li>
                        <li class={leetcodeClass}>
                            <Link to="/leetcode" onClick={this.toggleCollapse.bind(this)}>Leetcode</Link>
                        </li>
                        <li class={"dropdown "+openRelax + snakeClass + othelloClass}>
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={expanRelax} onClick={this.toggleRelax.bind(this)} onfocusout={this.toggleRelax.bind(this)}>Relax <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" onClick={this.toggleRelax.bind(this)}>
                                <li class={snakeClass}><Link to="snake">Snake</Link></li>
                                <li  class={othelloClass}><Link to="othello">Othello</Link></li>                              
                                <li class="divider"></li>
                            </ul>
                        </li>
                    </ul>
                </div>
             </div>
            </nav>
        );
    }


}