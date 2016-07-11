import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Implement atoi to convert a string to an integer.\n

__Hint:__ Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.\n

__Notes:__ It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.\n

Update (2015-02-10):\n
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.\n

Requirements for atoi:\n
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.\n

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.\n

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.\n

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.\n`,
             code: `/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let multier = 1, rt = 0, s = str;
    str = str.trim();
    if(str.startsWith("+")){
         multier = 1;
         str = str.substr(1);
    }else if(str.startsWith("-")){
         multier = -1;
         str = str.substr(1);
    } 
    for(let i=0; i<str.length ; i++){
        let n = str.charAt(i) - '0';
        if(isNaN(n) || str.charAt(i)===' ') break;
        rt = rt*10 + n;
    }
    return rt*multier>2147483647 ? 2147483647 :  rt*multier<-2147483648? -2147483648:rt*multier;
    
};`,
            explain:`No Need.`          
        }
    }

    static title(){ return "8. String to Integer (atoi)";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}