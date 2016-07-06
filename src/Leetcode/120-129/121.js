// 121. Best Time to Buy and Sell Stock
`Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.`


import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Say you have an array for which the ith element is the price of a given stock on day i.\n

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.\n

__Example 1:__\n
    Input: [7, 1, 5, 3, 6, 4]\n
    Output: 5\n

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n
__Example 2:__\n
    Input: [7, 6, 4, 3, 1]\n
    Output: 0\n

In this case, no transaction is done, i.e. max profit = 0.`,
             code: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sofar = [0], min=prices[0], maxProfit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] - min > maxProfit) maxProfit = prices[i] - min;
        if(prices[i] < min) min = prices[i];
    }
    return maxProfit;
};`,
            explain:`This problem could be also descript as 'Find Max(n[i]-n[j]) where i>j.\n
So for each element i, what we need to know is to find min(n[j]) where j<i, so we keep a value 'min', which the min element from 0-i, and a value'maxProfit' which means the max profit from 0 to i.`          
        }
    }

    static title(){ return "121. Best Time to Buy and Sell Stock";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sofar = [0], min=prices[0], maxProfit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] - min > maxProfit) maxProfit = prices[i] - min;
        if(prices[i] < min) min = prices[i];
    }
    return maxProfit;
};