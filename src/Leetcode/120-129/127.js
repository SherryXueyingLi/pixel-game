import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given two words (*beginWord* and *endWord*), and a dictionary's word list,  find the length of shortest transformation sequence from beginWord to endWord, such that:\n

1. Only one letter can be changed at a time\n
2. Each intermediate word must exist in the word list\n
For example,\n

Given:\n
*beginWord* = \`"hit"\`\n
*endWord* = \`"cog"\`\n
*wordList* = \`["hot","dot","dog","lot","log"]\`\n
As one shortest transformation is \`"hit" -> "hot" -> "dot" -> "dog" -> "cog"\`,
return its length 5.
__Note:__\n
+ Return 0 if there is no such transformation sequence.\n
+ All words have the same length.\n
+ All words contain only lowercase alphabetic characters.\n`,
             code: `/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let reached = new Set();
    reached.add(beginWord);
    wordList.add(endWord);
	let distance = 1;

	while(!reached.has(endWord)) {
		let toAdd =new Set(), it = reached.keys(), each = it.next();
		while(!each.done) {
			for (let i = 0; i < each.value.length; i++) {
                for (let ch = 97; ch <= 122; ch++) {
                    let word = each.value.substring(0, i) + String.fromCharCode(ch) + each.value.substring(i+1);
                    if(wordList.has(word)) {
                    	toAdd.add(word);
                    	wordList.delete(word);
                    }
                }
			}
			each = it.next();
		}
		distance ++;
		if(toAdd.size === 0) return 0;
		reached = toAdd;
	}
	return distance;
};`,
            explain:`From @Joshua924 in [leetcode forum](https://discuss.leetcode.com/topic/20965/java-solution-using-dijkstra-s-algorithm-with-explanation)
Keep two sets of words: \n
+ one set reached that represents the borders that have been reached with "distance" steps; \n
+ another set wordDict that has not been reached. \n

In the while loop, for each word in the reached set, give all variations and check if it matches anything from wordDict, \n
+ if it has a match, add that word into toAdd set, which will be the "reached" set in the next loop, and remove the word from wordDict. \n

And at the end of while loop, check the size of toAdd, which means that if it can't reach any new String from wordDict, it won't be able to reach the endWord, then just return 0. \n

Finally if the endWord is in reached set, return the current steps "distance".\n

The idea is that reached always contain only the ones we just reached in the last step, \n
and wordDict always contain the ones that haven't been reached. \n
This is pretty much what Dijkstra's algorithm does, or you can see this as some variation of BFS.\n`          
        }
    }

    static title(){ return "127. Word Ladder";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}