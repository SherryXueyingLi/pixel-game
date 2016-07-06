//122. Best Time to Buy and Sell Stock II


import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Say you have an array for which the ith element is the price of a given stock on day i.\n

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).\n

Subscribe to see which companies asked this question\n`,
             code: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <=1) return 0; 
    let s0=[0], s1=[-prices[0]];
    for(let i=1; i<prices.length; i++){
        s0[i] = Math.max(s0[i-1], s1[i-1] + prices[i]);
        s1[i] = Math.max(s1[i-1], s0[i-1] - prices[i]);
    }
    return Math.max(0, s0[prices.length-1]);
};`,
            explain:`We can draw a graph, indecating the status:\n 
![Status](src/Leetcode/src/122.png) \n 
On first day, if we are in status S0, we got profit of 0, if we are in status S1, we get profit of -prices[0].\n
On second day, what we need to do, is to update S0 and S1, for S0, it have two incoming arraw, so it's value should be the Max of the two, the fomular is:\n
    S0[i] = Math.max(s0[i-1], s1[i-1] + prices[i])

Same way to calculate S1[i]: \n
    s1[i] = Math.max(s1[i-1], s0[i-1] - prices[i]);
`          
        }
    }

    static title(){ return "122. Best Time to Buy and Sell Stock II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <=1) return 0; 
    let s0=[0], s1=[-prices[0]];
    for(let i=1; i<prices.length; i++){
        s0[i] = Math.max(s0[i-1], s1[i-1] + prices[i]);
        s1[i] = Math.max(s1[i-1], s0[i-1] - prices[i]);
    }
    return Math.max(0, s0[prices.length-1]);
};