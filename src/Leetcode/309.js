//309.Best Time to Buy and Sell Stock with Cooldown

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. 
//You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:

// prices = [1, 2, 3, 0, 2]
// maxProfit = 3
// transactions = [buy, sell, cooldown, buy, sell]

import React from "react";
import Template from "./Template";
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=1) return 0
    let s0=[0], s1=[-prices[0]], s2=[-Infinity];
    for(let i=1; i<prices.length; i++){
        s0[i] = Math.max(s2[i-1], s0[i-1]);
        s1[i] = Math.max(s0[i-1] - prices[i], s1[i-1]);
        s2[i] = s1[i-1] + prices[i];
    }
    return Math.max(s0[prices.length-1], s2[prices.length-1]);
};

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: ``,
            explain:``
        }
    }

    static title(){ return "309.Best Time to Buy and Sell Stock with Cooldown";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium"/>
    }
}