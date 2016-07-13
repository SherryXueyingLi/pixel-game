import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Implement regular expression matching with support for \`'.'\` and \`'*'\`.\n

\`'.'\` Matches any single character.\n
\`'*'\` Matches zero or more of the preceding element.\n

The matching should cover the entire input string (not partial).\n

The function prototype should be:\n
bool isMatch(const char *s, const char *p)\n

Some examples:\n

    isMatch("aa","a") → false
    isMatch("aa","aa") → true
    isMatch("aaa","aa") → false
    isMatch("aa", "a*") → true
    isMatch("aa", ".*") → true
    isMatch("ab", ".*") → true
    isMatch("aab", "c*a*b") → true`,
             code: `/**Recursive Solution
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length===0) return s.length === 0;
    else if(p.charAt(1)==='*'){
        return isMatch(s, p.substr(2)) || (s.length>0 && (s.charAt(0)===p.charAt(0) || p.charAt(0)==='.') && isMatch(s.substr(1), p));
    }
    else return s.length>0 && (p.charAt(0)==='.' || s.charAt(0)===p.charAt(0)) && isMatch(s.substr(1), p.substr(1));
};

/** DP Solution
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // matcher[i][j]: if s[0..i-1] matches p[0..j-1]
    let matcher = Array.apply(null, Array(s.length+1)).map(v=>{
       return Array.apply(null, Array(p.length+1))
    });
    matcher[0][0] = true;
    for (let i = 1; i <= s.length; i++) matcher[i][0] = false;
    for (let j = 1; j <= p.length; j++)
        matcher[0][j] = (j > 1 && '*' == p.charAt(j - 1) && matcher[0][j - 2]);
    for (let i = 1; i <= s.length; i++)
        for (let j = 1; j <= p.length; j++)
            if (p.charAt(j - 1) != '*')
                matcher[i][j] = matcher[i - 1][j - 1] && (s.charAt(i - 1) == p.charAt(j - 1) || '.' == p.charAt(j - 1));
            else
                // p[0] cannot be '*' so no need to check "j > 1" here
                matcher[i][j] = matcher[i][j - 2] || (s.charAt(i - 1) == p.charAt(j - 2) || '.' == p.charAt(j - 2)) && matcher[i - 1][j];
    return matcher[s.length][p.length];
};`,
            explain:`Since recusive will get time limite excessed, we need to use DP solution. The answer is from @xiaohui7 in [leetcode forum](https://discuss.leetcode.com/topic/6183/my-concise-recursive-and-dp-solutions-with-full-explanation-in-c).\n
        
        /**
         * f[i][j]: if s[0..i-1] matches p[0..j-1]
         * if p[j - 1] != '*'
         *      f[i][j] = f[i - 1][j - 1] && s[i - 1] == p[j - 1]
         * if p[j - 1] == '*', denote p[j - 2] with x
         *      f[i][j] is true iff any of the following is true
         *      1) "x*" repeats 0 time and matches empty: f[i][j - 2]
         *      2) "x*" repeats >= 1 times and matches "x*x": s[i - 1] == x && f[i - 1][j]
         * '.' matches any single character
         */`          
        }
    }

    static title(){ return "10. Regular Expression Matching";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}