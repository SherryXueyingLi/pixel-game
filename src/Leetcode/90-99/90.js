import React from "react";
import Template from "../Template";
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
        this.state = {code: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var count = 1, rt = [[]];
    nums.sort();
    for(let i=0; i<nums.length; i=i+count){
        count = 1;
        while(nums[i]===nums[i+count]) count++; //Note 2
        let toadd = [];
        for(let j in rt){
            let temp = rt[j].concat(); //Note 1, copy the elements
            for(let c=0; c<count; c++){
                temp.push(nums[i]);
                toadd.push(temp.concat());
            }
        }
        rt = rt.concat(toadd);
    }
    return rt;

    };`,
                explain: `Now let's first consider if there's no duplication, we are getting subset of [1,2,3].\n
If we already get subset of [1,2], the subset of [1,2,3] will be: two parts:  \n
1. [1,2]'s subset, which is: []   [1] [2] [1,2]\n
2. [1,2]'s subsets with 5. which is: [5]   [1,5] [2,5] [1,2,6].

If we merge 1 and 2, we get full subset of [1,2,3].
The way to get 2, is only copy the elements in 1, and add 5 to each of subsets(//Note 1).

No if we have a duplicated element, the only difference is, when we are considering next element, we go to n steps, n=number of same elments in next step.

In this case, if the set is [1,2,3,3].
When we are getting set 2, we fist go two steps, find the last element that are same with next step(Note 2), then do the same thing as no-duplicate algorithms.`,

            subject: `Given a collection of integers that might contain duplicates, nums, return all possible subsets.\n

Note: The solution set must not contain duplicate subsets.\n

For example,\n
If nums = [1,2,2], a solution is:\n

    [
    [2],
    [1],
    [1,2,2],
    [2,2],
    [1,2],
    []
    ]`
}
    }
    static title(){ return "90. SubSet II";}

    render(){
        const {code, explain, subject} = this.state;
        return (
            <div>
                <Template code={code} title={SubsetII.title()} id={this.props.id} subject={subject} difficulty="Medium" explain={explain}></Template>
            </div>
        )
    }
}