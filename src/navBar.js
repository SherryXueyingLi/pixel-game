import React from "react";
import {IndexLink, Link} from "react-router"

export default class navigationBar extends React.Component {
    constructor(){
        super()
        this.state = {collapsed: true, expand:{expanRelax: false, expandLeetcode: false, expandLeetcode0: false, expandLeetcode1: false, expandLeetcode2: false, expandLeetcode3: false}};
    }

    setExpand(val){ 
        let expand = {};
        Object.keys(this.state.expand).map(key =>expand[key] = val);
        return expand;
    }

    toggleDropDown(dropDownKey){ 
        let expand = this.setExpand(false);
        for(let key in this.state.expand){
            if(key === dropDownKey) expand[key] = !this.state.expand[key];
        }
        this.setState({expand});
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;     
        this.setState({collapsed, expand: this.setExpand(false)});
    }


    closeAll(event){   
        let expand = this.setExpand(false);
        this.setState({expand});
    }

    getDropdownElements(begin){
        const {pathname} = this.props.location;
        if(begin === 0) begin="";
        return Array.apply(null, Array(11)).map((v,i)=>{
            let index = i<=4?i:i-1;
            let path = `leetcode/${begin}${index}0`;
            if(i===5) return <li class="divider" key={path}></li>;
            let text = `${begin}${index}0-${begin}${index}9`;
            if(begin==="" && i===0) text = '1-9';
            return  <li class={pathname.endsWith(path)?"active":""} key={path+i}><Link to={path}>{text}</Link></li>;
        });
    }

    generateLeetcodeDropDown(){
        const {expand} = this.state;
        const {pathname} = this.props.location;
        return Array.apply(null, Array(4)).map((v,i)=>{
             let key = "expandLeetcode"+i;
             if(i===0) i="";
             let regex = "/leetcode/"+i+"[0-9]{2}$";
             let pattern =  new RegExp(regex,"g");
             let text = i===""?"" : (i+"00");
             return (<li className={"dropdown "+ (expand[key]?'open':'') + (pathname.match(pattern) ? " active" : "")} key={text}>
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={expand[key]} onClick={this.toggleDropDown.bind(this,key)}>Leetcode {text}<span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" onClick={this.closeAll.bind(this)}>                  
                               { this.getDropdownElements(i)}
                            </ul>
              </li>)
        });


        
    }

    render(){
        const {pathname} = this.props.location;
        const {collapsed, expand} = this.state;
        const {expanRelax, expandLeetcode0, expandLeetcode1, expandLeetcode2, expandLeetcode3} = expand;
        const snakeClass = pathname === "/snake" ? " active":"";
        const othelloClass = pathname === "/othello" ? " active":"";
        const navClass = collapsed ? " collapse" : "";
        const collapsedClass = collapsed ? " collapsed" : "";
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
                    <ul class="nav navbar-nav">
                        <li class={pathname === "/" ? " active":""}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Main</IndexLink>
                        </li>
                         {this.generateLeetcodeDropDown()}
                        <li class={"dropdown " + (expanRelax?"open":"") + (pathname.startsWith("relax")?" active":"")}>
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={expanRelax} onClick={this.toggleDropDown.bind(this,'expanRelax')}>Relax <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" onClick={this.closeAll.bind(this)}>
                                <li class={pathname.endsWith("relax/snake")?"active":""}><Link to="relax/snake">Snake</Link></li>
                                <li class={pathname.endsWith("relax/othello")?"active":""}><Link to="relax/othello">Othello</Link></li>                              
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