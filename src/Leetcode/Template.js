import React from "react";

export default class SubsetII extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div class="row">     
            <div class="col-md-6">
                <pre>{
                    this.props.explain
                }</pre>
            </div>
            <div class="col-md-6">
                <pre><code>{
                    this.props.code
                }</code></pre>
            </div>
            </div>
        );
    }
}