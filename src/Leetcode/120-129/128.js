//

import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.\n

For example,\n
Given \`[100, 4, 200, 1, 3, 2]\`,\n
The longest consecutive elements sequence is \`[1, 2, 3, 4]\`. Return its length: \`4\`.\n

Your algorithm should run in O(n) complexity.`,
             code: `/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map={}, max = 0;
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(map[num]) continue;
        map[num] = (map[num+1]||0) + (map[num-1]||0) + 1;
        if(map[num+map[num+1]]) (map[num+map[num+1]] = map[num]);
        if(map[num-map[num-1]]) (map[num-map[num-1]] = map[num]);
        max = Math.max(max, map[num]);
    }
    return max;
};`,
            explain:`We create a hash map with pair of (key, value), where\n

            value = the longest consecutive sequence start or end with key.

then we precess the elements from given array, index is 0-n, when we are processing ith lement: \n
    if(the element already exist as key in the hashmap) skip array[i];
    else 
        if(array[i] - 1 exists as key in the hashmap){
            It means there's a sequence from array[i-1]-(map(array[i-1])-1) to array[i-1]  has exist.
            for instance, if array[i] = 5, and we found that map(4) = 4, it means 1-4 exists in the array by definition.
            Since we now have 5, we could now modify map(1) = 5, map(5) = 5.
        }
        if(array[i] + 1 exists as key in the hashmap){
            same logic with previous condition.
        }

Then we find the max number in hash map, it will be the answer.
`          
        }
    }

    static title(){ return "128. Longest Consecutive Sequence";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutiveII = function(nums) {
    let map={}, max = 0;
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(map[num]) continue;
        map[num] = (map[num+1]||0) + (map[num-1]||0) + 1;
        if(map[num+map[num+1]]) (map[num+map[num+1]] = map[num]);
        if(map[num-map[num-1]]) (map[num-map[num-1]] = map[num]);
        max = Math.max(max, map[num]);
    }
    return max;
};
var longestConsecutive = function(nums) {
    let map={}, max = 0;
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(map[num]) continue;
        if(!map[num-1] && !map[num+1]) map[num] = 1;
        else if(map[num+1] && !map[num-1]){
            map[num] = map[num+1]+1;
            map[num+map[num+1]] = map[num];
        }
        else if(map[num-1] && !map[num+1]){
             map[num] = map[num-1]+1;
             map[num-map[num-1]] = map[num];
        }else{
            map[num] = map[num+1]+map[num-1]+1;
            map[num-map[num-1]] = map[num];
            map[num+map[num+1]] = map[num];
        }
        max = Math.max(max, map[num]);
    }
    return max;
};

