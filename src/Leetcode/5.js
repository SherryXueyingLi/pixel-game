// 5. Longest Palindromic Substring
// Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s;
    let maxlen = 0, i=0, maxstart=0;
    while(i<s.length){
        if(s.length - i < maxlen/2) break;
        let begin =i,  end = i;
        while(end+1 < s.length && s.charAt(end) === s.charAt(end+1)){end++;}
        i=end+1;
        while(begin > 0 && end < s.length-1 && s.charAt(begin-1) === s.charAt(end+1)){begin--; end++;}
        if(end-begin+1>maxlen){maxlen = end-begin+1;maxstart=begin;} 
    }
    return s.substr(maxstart, maxlen);
};