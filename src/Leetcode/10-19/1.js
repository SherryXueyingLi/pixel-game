import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.`,
             code: `/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0, right=height.length-1, result=0;
    while (left<right){
        result=Math.max(result,(right-left)*Math.min(height[left],height[right]))
        if(height[left]<height[right])
            left+=1
        else
            right-=1
    }
    return result;
};`,
            explain:`From @Shangrila  in [leetcode forum](https://discuss.leetcode.com/topic/503/anyone-who-has-a-o-n-algorithm/2):
            Here is the proof.\n
Proved by contradiction:\n

Suppose the returned result is not the optimal solution. Then there must exist an optimal solution, say a container with a_ol and a_or (left and right respectively), such that it has a greater volume than the one we got. Since our algorithm stops only if the two pointers meet. So, we must have visited one of them but not the other. WLOG, let's say we visited a_ol but not a_or. When a pointer stops at a_ol, it won't move until\n

+ The other pointer also points to a_ol.\n
  In this case, iteration ends. But the other pointer must have visited a_or on its way from right end to a_ol. Contradiction to our assumption that we didn't visit a_or.\n

+ The other pointer arrives at a value, say a_rr, that is greater than a_ol before it reaches a_or.\n
  In this case, we does move a_ol. But notice that the volume of a_ol and a_rr is already greater than a_ol and a_or (as it is wider and heigher), which means that a_ol and a_or is not the optimal solution -- Contradiction!\n

Both cases arrive at a contradiction.\n`          
        }
    }

    static title(){ return "11. Container With Most Water";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}