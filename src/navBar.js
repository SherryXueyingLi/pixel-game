import React from "react";
import {IndexLink, Link} from "react-router"

export default class navigationBar extends React.Component {
    constructor(){
        super()
        this.state = {collapsed: true, expand:{expanRelax: false, expandLeetcode: false}};
    }

    setExpand(val){ 
        let expand = {};
        Object.keys(this.state.expand).map(key =>expand[key] = val);
        return expand;
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;     
        this.setState({collapsed, expand: this.setExpand(false)});
    }

    toggleRelax(event){
        let toggled = !this.state.expand.expanRelax;
        let expand = this.setExpand(false);
        expand.expanRelax = toggled;
        this.setState({expand});
        event.stopPropagation();
    }
    toggleLeetcode(event){
        let toggled = !this.state.expand.expandLeetcode;
        let expand = this.setExpand(false);
        expand.expandLeetcode = toggled;
        this.setState({expand});
        event.stopPropagation();
    }
    closeSubMenu(){
        const collapsed = true;
        this.setState({collapsed,expand: this.setExpand(false)});
    }

    render(){
        const {location} = this.props;
        const {collapsed, expand} = this.state;
        const {expanRelax, expandLeetcode} = expand;
        const mainClass = location.pathname === "/" ? " active":"";
        const snakeClass = location.pathname === "/snake" ? " active":"";
        const othelloClass = location.pathname === "/othello" ? " active":"";
        const leetcodeClass = location.pathname.match(/^\/leetcode/) ? " active" : "";;
        const navClass = collapsed ? " collapse" : "";
        const collapsedClass = collapsed ? " collapsed" : "";
        const openRelax = expanRelax ? " open":"";
        const openLeetcode = expandLeetcode ? " open":"";

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
                    <Link class="navbar-brand" to="/">Sherry's Study Site</Link>
                </div>
                <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav" onClick={this.closeSubMenu.bind(this)}>
                        <li class={mainClass}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Main</IndexLink>
                        </li>
                        <li class={"dropdown "+openLeetcode + leetcodeClass}>
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={expandLeetcode} onClick={this.toggleLeetcode.bind(this)}>Leetcode <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" onClick={this.toggleLeetcode.bind(this)}>
                                <li><Link to="leetcode/90">90-99</Link></li>
                                <li><Link to="leetcode/100">100-109</Link></li>                              
                                <li class="divider"></li>
                                <li><Link to="leetcode/110">110-119</Link></li>    
                            </ul>
                        </li>
                        <li class={"dropdown "+openRelax + snakeClass + othelloClass}>
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={expanRelax} onClick={this.toggleRelax.bind(this)}>Relax <span class="caret"></span></a>
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