import React from "react";
import Template from "./Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: ``,
            explain:``
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="" id={this.props.id} difficulty=""/>
    }
}