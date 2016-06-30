//122. Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// Subscribe to see which companies asked this question

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