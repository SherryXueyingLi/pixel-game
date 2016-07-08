import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given an array of integers, every element appears twice except for one. Find that single one.

__Note:__
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?`,
             code: `/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i<nums.length; i++)
    {
		result ^=nums[i];
    }
	return result;
};`,
            explain:`The XOR(exclusive or) operation:\n 
|  A  ^|  B  |  =>Result  |
| ------ | -----|------ |
|  0  ^|  0  |  =>0   |
|  0  ^|  1  |  =>1  |
|  1  ^|  0  |  =>1  |
|  1  ^|  1  |  =>0  |

Commutativity: \`A^B = B^A\`\n
Associativity: \`A^(B^C) = (A^B)^C\` \n
So \`(A^B^C^D^E^B^A^C^D) = (A^A^B^B^C^C^D^D^E)  = E \` \b
 `          
        }
    }

    static title(){ return "136. Single Number";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i<nums.length; i++)
    {
		result ^=nums[i];
    }
	return result;
};