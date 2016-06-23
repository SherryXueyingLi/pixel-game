//96. Unique Binary Search Trees
// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

// For example,
// Given n = 3, there are a total of 5 unique BST's.

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

import React from "react";
import Template from "./Template";

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n<=1) return 1;
    let g = [1,1];
    for(let i=2; i<=n; i++){
        g[i] = 0;
        for(let j=0; j<i; j++) {
            g[i] += g[j] * g[i-1-j];
        }
    }
    return g[n];
};


export default class UniqueTreesII extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var numTrees = function(n) {
    if(n<=1) return 1;
    let g = [1,1];
    for(let i=2; i<=n; i++){
        g[i] = 0;
        for(let j=0; j<i; j++) {
            g[i] += g[j] * g[i-1-j];
        }
    }
    return g[n];
}

            `,
            explain:`To solve this problem, we need to claim the following facts: \n
1. the number of BST tree of [1,2,3,4] is same as number of BST tree of [5,6,7,8].\n
2. P[n]means the BST numbers for range [1...n]. P[n,x] means when x is root node. the BST number is __P[n, x] = P[x-1]*P[x+1...n]__\n
\n
With condition 2, We could know:\n
\n
    P[n] = P[n, 1] + P[n, 2]  + ... + P[n, n];
    P[n] = P[0]*P[2..n] + P[1]*P[3..n] + ... + P[n-1]*P[n+1..n]; 
    //Note: P[n+1..n] = P[0] = 1, which is an empty tree;\n
\n
With condition 1, we could conclude that P[j...n] = P[1...n-j+1] =  P[n-j+1];\n
\n
    In conclusion: BST tree number are equal when first number and last number's interval are equal, in formular above, n-j = (n-j+1)-1;\n
\n
SO the final formular is:\n
    P[1...n] = P[0]*P[n-1] + P[1]*P[n-2] + ... + P[n-1]*P[0]; And P[0] = P[1] = 1;\n
            `
        }
    }

    render(){
        const {code, explain} = this.state;
        return (
            <Template code={code} explain={explain} title="96. Unique Binary Search Trees" id={this.props.id}/>
        );
    }
}