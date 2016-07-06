import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a 2D board containing \`'X'\` and \`'O'\`, capture all regions surrounded by \`'X'\`.\n

A region is captured by flipping all \`'O'\`s into \`'X'\`s in that surrounded region.\n

For example,\n
    X X X X
    X O O X
    X X O X
    X O X X
After running your function, the board should be:\n

    X X X X
    X X X X
    X X X X
    X O X X`,
             code: `/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for(let i=0;i<board.length; i++){
        if(i===0 || i===board.length-1){
            for(let j=0; j<board[i].length; j++){
                if(board[i][j] === 'O'){
                   mark(board, i, j);
                }
            }
        }else{
            if(board[i][0] === 'O') mark(board, i, 0);
            if(board[i][board[i].length-1] === 'O') mark(board, i, board[i].length-1);
        }
    }
    for(let i=0;i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 'O') board[i][j] = 'X';
            if(board[i][j] === '1') board[i][j] = 'O';
        }
    }
};

var mark = function(board, i, j){
    if(board[i][j]!=='O') return;
    board[i][j] = '1';
    if(i>1) mark(board, i-1, j);
    if(j>1) mark(board, i, j-1);
    if(i<board.length-2) mark(board, i+1, j);
    if(j<board.length-2) mark(board, i, j+1);
}`,
            explain:`The solution is simple, for all edge elements, mark its islands from O to 1.\n
Then go through the map. O->X, 1->O.`          
        }
    }

    static title(){ return "130. Surrounded Regions";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}