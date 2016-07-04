//1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.


import React from "react";
import Template from "./Template";

var twoSum = function(nums, target) {
    let map={};
    for(let i=0; i<nums.length; i++){
        if(map[target-nums[i]]!==undefined) return [map[target-nums[i]], i];
        else map[nums[i]] = i;
    }
};

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var twoSum = function(nums, target) {
    let map={};
    for(let i=0; i<nums.length; i++){
        if(map[target-nums[i]]!==undefined) return [map[target-nums[i]], i];
        else map[nums[i]] = i;
    }
};`,
            explain:`Each time you check a number, you put it into the hashmap, and check if the target-num exists in hash map.`
        }
    }

    static title(){ return "1. Two Sum";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy"/>
    }
}