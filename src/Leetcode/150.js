//150. Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Some examples:
//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0; i<tokens.length; i++){
        //console.log(+tokens[i], !isNaN(+tokens[i]))
        if(!isNaN(+tokens[i])) stack.push(+tokens[i]);
        else{
            let right=stack.pop(), left = stack.pop(), caled = cal(left, tokens[i], right);
            stack.push(caled);
        }
    }
    return stack.pop();
};
var cal = function(left, oper, right){
    console.log(left, oper, right)
    if(oper==='-') return left-right;
    if(oper==='+') return left+right;
    if(oper==='*') return left*right;
    if(oper==='/') return parseInt(left/right);
}
