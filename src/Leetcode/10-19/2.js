import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given an integer, convert it to a roman numeral.\n

Input is guaranteed to be within the range from 1 to 3999.`,
             code: `/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let n=10,  rt="";
    let matcher = {1: 'I', 5: 'V', 10: 'X', 50:'L', 100:'C', 500:'D', 1000:'M'};
    while(n/10<=num){
        let key = n/10, i = (num%n - num%(n/10))/n*10;
        if(i<4){
            while(i-->0){
                rt = matcher[key] + rt;
            }
        }else if(i===4){
            rt = matcher[key] + matcher[5*key] + rt;
        }else if(i<9){
            let str  = matcher[5*key] ;
            while(i-->5){
                str =  str + matcher[key];
            }
            rt = str + rt;
        }else if(i===9){
            rt = matcher[key] + matcher[10*key] + rt;
        }
        n = n*10;
    }
    return rt;
};`,
            explain:`Parase Int and find the number according to map.`          
        }
    }

    static title(){ return "12. Integer to Roman";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}