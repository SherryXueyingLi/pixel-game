import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`There are N gas stations along a circular route, where the amount of gas at station i is \`gas[i]\`.\n

You have a car with an unlimited gas tank and it costs \`cost[i]\` of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.\n

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.\n

__Note:__\n
The solution is guaranteed to be unique.`,
             code: `/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0, left = 0, start = 0;
    for(let i=0; i<cost.length; i++){
        tank = tank - cost[i] + gas[i];
        left = left + tank;
        if(tank < 0){ // cannot go to next station.
            start = i+1;
            tank = 0;
        }
    }
    return left<0?-1:start;
};`,
            explain:`1. If we start from \`A\` and Can reach \`B-1\` but cannot reach \`B\`, then start from which ever \`[A---B-1]\` all cannot reach \`B\`. we should start with \`B+1\`.\n
2. If we start from 0, cannot reach B(B may not the first station it cannot reach), with x furels inneed, we start with B+1 and reached end, we have y furels left, as long as y>x, start from B+1 will finish the circle.\n

Here we use \`left\` to indicate how much fuel we have left(if left > 0) if we start from 0 or how much furel we need(if left<0) if we start from 0.`          
        }
    }

    static title(){ return "134. Gas Station";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}