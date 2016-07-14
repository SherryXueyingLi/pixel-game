import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.\n

For example, given the following matrix:\n

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

Return 4.\n`,
             code: `/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let max = 0, vecotr=[];
    for(let i=0; i<matrix.length; i++){
        let row = matrix[i];
        let pre = vecotr[0] || 0;
        for(let j=0; j<row.length; j++){
            let tmp = vecotr[j];
            if(i===0 || j===0 || row[j] ==='0'){
                vecotr[j] = row[j]-'0';
            }else{
                vecotr[j] = Math.min(vecotr[j-1], vecotr[j], pre)+1;
            }        
            pre = tmp;
            max = Math.max(max, vecotr[j]);
            
        }
    }
    return max*max;
};`,
            explain:`Reference to [leetcode forum](https://discuss.leetcode.com/topic/15328/easy-dp-solution-in-c-with-detailed-explanations-8ms-o-n-2-time-and-o-n-space)`          
        }
    }

    static title(){ return "221. Maximal Square";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}