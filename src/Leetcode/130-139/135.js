import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`There are N children standing in a line. Each child is assigned a rating value.\n

You are giving candies to these children subjected to the following requirements:\n

+ Each child must have at least one candy.\n
+ Children with a higher rating get more candies than their neighbors.\n

What is the minimum candies you must give?`,
             code: `/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = Array.apply(null, Array(ratings.length)).map(v=>{return 1;}), min = ratings.length;
    for (let i = 1; i < ratings.length; i++){
		 if(ratings[i]>ratings[i-1])
			 candies[i]=candies[i-1]+1;
	}
	for (let i= ratings.length-1; i>0 ; i--){
		 if(ratings[i-1]>ratings[i])
			 candies[i-1]=Math.max(candies[i]+1,candies[i-1]);
	}
    return candies.reduce((p,v)=>{return p+v;}, 0);
};`,
            explain:`So first we go from 1...len(rate), as long as the previous element is smaller then current one, current one = previous value + 1;
Now we can ensure that candies is an ascending array.\n
Let's go backwards, once we see a rating[i-1] is greater than rating[i], we know there's problem, we have to make some change. So we choose the bigger number between candies[i]+1 and candies[i-1]
\n
`          
        }
    }

    static title(){ return "135. Candy";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}