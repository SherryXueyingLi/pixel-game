import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.`,
             code: `/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1;  j<=i+k && j<nums.length; j++){
            if(Math.abs(nums[i] - nums[j])<=t) return true;
        }
    }
    return false;
};`,
                
        }
    }

    static title(){ return "220. Contains Duplicate III";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}