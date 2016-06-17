// Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]
import React from "react";
import Template from "../Leetcode/Template";
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var count = 1, rt = [[]];
    nums.sort();
    for(let i=0; i<nums.length; i=i+count){
        count = 1;
        while(nums[i]===nums[i+count]) count++;
        let toadd = [];
        for(let j in rt){
          	let temp = rt[j].concat();
            for(let c=0; c<count; c++){
                temp.push(nums[i]);
                toadd.push(temp.concat());
            }
        }
        rt = rt.concat(toadd);
    }
    return rt;
    
};

export default class SubsetII extends React.Component{
    constructor(){
        super();
        this.state = {code: `var subsetsWithDup = function(nums) {
                        var count = 1, rt = [[]];
                        nums.sort();
                        for(let i=0; i<nums.length; i=i+count){
                            count = 1;
                            while(nums[i]===nums[i+count]) count++;
                            let toadd = [];
                            for(let j in rt){
                                let temp = rt[j].concat();
                                for(let c=0; c<count; c++){
                                    temp.push(nums[i]);
                                    toadd.push(temp.concat());
                                }
                            }
                            rt = rt.concat(toadd);
                        }
                        return rt;
                        
                    };`,
                explain: ''}
    }

    render(){
        const {code, explain} = this.state;
        return (
            <div>
                <Template code={code}></Template>
                
            </div>
        )
    }
}