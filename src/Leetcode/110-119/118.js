

import React from "react";
import Template from "../Template";
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rt = [];
    for(let i=0; i<numRows; i++){
        let level = [1];
        for(let j=1; j<=i; j++){ 
            level.push(rt[i-1][j-1] + (rt[i-1][j]?rt[i-1][j] :0));
        }
        rt.push(level);
    }
    return rt;
};
export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rt = [];
    for(let i=0; i<numRows; i++){
        let level = [1];
        for(let j=1; j<=i; j++){ 
            level.push(rt[i-1][j-1] + (rt[i-1][j]?rt[i-1][j] :0));
        }
        rt.push(level);
    }
    return rt;
};`,
            explain:`The formular is \n
    V(i, j) = V(i-1, j-1)+V(i-1, j)`,
            subject:`Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

    [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]`
        }
    }

    static title(){ return "118. Pascal's Triangle";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}