import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let min = triangle[triangle.length-1];
    for(let i=triangle.length-2; i>=0; i--){
        let cur = triangle[i];
        for(let j=0; j<cur.length; j++){
            min[j] = Math.min(min[j+1], min[j]) + cur[j];
        }
    }
    return min[0];
};`,
            explain:`This subject has a very easy way to solve, which is do an DP research and find the shortest path, but it will spend O(N^2) space, wihch is not an optimized choice.\n
So instead of starting from top to bottom, let's think it in a reverse dirction, can we start from bottom? \n
The answer is yes. Suppose we start from level n to n, the min path is the level itself, \n
in the example given, \n
if we start fron level 4 to 4, use a number to mark the length we used, we find the result being min = [4,1,8,3].
Then we go to level n-1, we start from [6,5,7] to [4,1,8,3], 
let's see if we go from first element in n-1, which is __from 6 to the bottom__, the min length it will use is: __6+min(4,1) = 7__. \n
now we have:
     [6,5,7]  min=[7.]
    [4,1,8,3] min=[4,1,8,3] // => It is ok to let min = [7, 1, 8 ,3], since in next step, we dont need 4 anymore.
    
We could start dealing with 5, now we know that if we start from 5 to bottom, we have the min length as __5+min(1,8)=6__.
Now you find somthing? When we process the ith element in current level, we only care about i and i+1th element in min, so it doesn't matter if we replace the 4 with 7.
After process the third level, now we have: 

     [6,5,7]  min=[7, 6, 10, 3] //=> At this step, 3 is actually useless for us. In next step we only care about first three elements in min.
    [4,1,8,3]

Let's keep the loop go until we reach the top, we could ouput min[0] as our result.
`,
            subject:`Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
    [
         [2],
        [3,4],
       [6,5,7],
      [4,1,8,3]
    ]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.`
        }
    }

    static title(){ return "120. Triangle";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let min = triangle[triangle.length-1];
    for(let i=triangle.length-2; i>=0; i--){
        let cur = triangle[i];
        for(let j=0; j<cur.length; j++){
            min[j] = Math.min(min[j+1], min[j]) + cur[j];
        }
    }
    return min[0];
};