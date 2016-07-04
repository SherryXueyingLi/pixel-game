//200. Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3
import React from "react";
import Template from "./Template";
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ct = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === '1'){
                mark(grid, i, j);
                ct++;
            }
        }
    }
    return ct;
};
var mark = function(grid, i, j){
    if(i<0 || j<0 || i>=grid.length || j>=grid[i].length || grid[i][j] !== '1') return;
    grid[i][j] = '2';
    mark(grid, i-1, j);
    mark(grid, i, j-1);
    mark(grid, i+1, j);
    mark(grid, i, j+1);
}
export default class  NumberofIslands extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var numIslands = function(grid) {
    let ct = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === '1'){
                mark(grid, i, j);
                ct++;
            }
        }
    }
    return ct;
};
var mark = function(grid, i, j){
    if(i<0 || j<0 || i>=grid.length || j>=grid[i].length || grid[i][j] !== '1') return;
    grid[i][j] = '2';
    mark(grid, i-1, j);
    mark(grid, i, j-1);
    mark(grid, i+1, j);
    mark(grid, i, j+1);
}`,
            explain:``
        }
    }

    static title(){ return "200. Number of Islands";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={NumberofIslands.title()} id={this.props.id} difficulty="Medium"/>
    }
}