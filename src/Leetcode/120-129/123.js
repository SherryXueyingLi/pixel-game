

import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Say you have an array for which the ith element is the price of a given stock on day i.\n

Design an algorithm to find the maximum profit. You may complete at most two transactions.\n

__Note:__
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).\n`,
             code: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=1) return 0;
    let max=2, B = [[]], S=[[]];
    for(let k=1; k<=max; k++){
        B[k] = [-prices[0]];
        S[k] = [0];
        for(let i=1; i<prices.length; i++){
            B[k][i] = Math.max((k>1?S[k-1][i-1]:0)-prices[i], B[k][i-1]);
            S[k][i] = Math.max(B[k][i-1]+prices[i], S[k][i-1]);
        }
    }
    return Math.max(S[1][prices.length-1], S[2][prices.length-1]);
};`,
            explain:`Though it is for 2 transactions, we could actually think it as k, if given at most k times of transaction, how should we solve this problem? 
Like solution in 122, let's draw a status graph, but this time, we use 
    B1 represent we bought one time, B2 represent we bought 2 times, Bk represent we bought k times. 
    S1 represent we sold one time, S2 represent we sold 2 times, Sk represent we sold k times.

Check the graph here:
![Status](src/Leetcode/src/123.png) \n
We could extend this graph until it reach k. 

Know from observing the graph, we found that we have K status of B ,and K status of S.\n
For  0<=x<=k, in day i  \n

    B[x][i] = Math.max(S[x-1][i-1]-price[i], B[x][i-1]);
    S[x][i] = Math.max(B[x][i-1]+price[i], S[x][i-1]);

Then for any status, ending with sell must be bigger than endding with buy, so in the end, we only need to calculate all status of S.
`          
        }
    }

    static title(){ return "123. Best Time to Buy and Sell Stock III";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=1) return 0;
    let max=2, B = [[]], S=[[]];
    for(let k=1; k<=max; k++){
        B[k] = [-prices[0]];
        S[k] = [0];
        for(let i=1; i<prices.length; i++){
            B[k][i] = Math.max((k>1?S[k-1][i-1]:0)-prices[i], B[k][i-1]);
            S[k][i] = Math.max(B[k][i-1]+prices[i], S[k][i-1]);
        }
        console.log(B[k], S[k]);
    }
    return Math.max(S[1][prices.length-1], S[2][prices.length-1]);
};