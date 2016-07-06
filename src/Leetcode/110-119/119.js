import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let level = [1],  rt=[1];
    for(let i=1; i<=rowIndex+1; i++){
        for(let j=1; j<i; j++){
            rt[j] = (level[j]?level[j]:0) + level[j-1];
        }
        level = rt.concat();
    }
    return rt;
};`,
            explain:`In this subject, when we calculate level n, we just need temp data of level n-1.`,
            subject:`Given an index k, return the kth row of the Pascal's triangle.\n

For example, given k = 3,\n
Return \`[1,3,3,1]\`.\n

__Note:__
Could you optimize your algorithm to use only O(k) extra space?`
        }
    }

    static title(){ return "119. Pascal's Triangle II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let level = [1],  rt=[1];
    for(let i=1; i<=rowIndex+1; i++){
        for(let j=1; j<i; j++){
            rt[j] = (level[j]?level[j]:0) + level[j-1];
        }
        level = rt.concat();
    }
    return rt;
};