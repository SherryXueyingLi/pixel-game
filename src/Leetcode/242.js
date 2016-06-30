//242. Valid Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    for(let i=0; i<s.length; i++){
        if(map[s.charAt(i)]) map[s.charAt(i)]++;
        else map[s.charAt(i)] = 1;
    }
    for(let i=0; i<t.length; i++){
        if(map[t.charAt(i)]>0) map[t.charAt(i)]--;
        else return false;
    }
    for(let key in map){
        if(map[key] !== 0) return false;
    }
    return true;
};