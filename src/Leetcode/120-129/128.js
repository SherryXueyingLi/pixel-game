//128. Longest Consecutive Sequence

// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.

/**
 * @param {number[]} nums
 * @return {number}
 */
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