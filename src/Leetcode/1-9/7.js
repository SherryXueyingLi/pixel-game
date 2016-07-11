import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Reverse digits of an integer.\n

    Example1: x = 123, return 321
    Example2: x = -123, return -321

click to show spoilers.\n

Have you thought about this?\n
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!\n

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.\n

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?\n

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.\n

__Update (2014-11-10):__
Test cases had been added to test the overflow behavior.`,
             code: `/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let increase = 10, rt=0, mulier = x>0?1:-1;
    x*=mulier;
    while(x/increase>=1){
        let a = (x%increase - x%(increase/10))/(increase/10);
        rt = rt *10 + a;
        increase*=10;
    }
    let a = (x%increase - x%(increase/10))/(increase/10);
    rt = rt *10 + a;
    return rt*mulier >= Math.pow(2,31) || rt*mulier < -1*Math.pow(2,31)+1? 0 : rt*mulier;
};`,
            explain:`Too easy`          
        }
    }

    static title(){ return "7. Reverse Integer";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}