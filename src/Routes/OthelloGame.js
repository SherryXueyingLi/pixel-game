import React from "react";
import Othello from "./Othello";
export default class OthelloGame extends React.Component{

    constructor(){
        super();
        let game = new Othello;
        this.state = {game, map: game.map, over: game.over};
    
    }

    dropChess(i, j){
        let {game} = this.state;
        if(this.state.game.drop([i, j], this.state.game.player, true)>0){
            if(game.over){
                this.setState({map: game.map, over: game.over, winner: game.winner});
            }else{
                this.state.game.computerDrop();
                this.setState({map: game.map, over: game.over, winner: game.winner});
            }
            
        }

    }


    getCheeseStyle(cheese){
        if(cheese===0 || cheese ===1)
            return {
                backgroundColor: cheese===0?'black':'white',
                borderRadius: "10000px",
                border: "solid 1px black",
                width: "100%",
                height:"100%"
            };
        else{
            return {backgroundColor:"white"};
        }
    }

    getChessBgStyle(i, j){
        if(this.state.game.latest && i===this.state.game.latest[0] && j === this.state.game.latest[1]){
            return {backgroundColor: 'red'};
        }
    }

    restart(){
        let {game} = this.state;
        game.initGame();
        this.setState({map: game.map, over: game.over, winner: game.winner});
    }

    render(){
        const {map, game, over, winner} = this.state;
        return (
            <div>
            <div style={{visibality: over?"visible":"hidden" }}>
                {over? "Game Over!"+ (winner===game.player? 'Player':winner===game.computer?'Computer':'') +"Wins!" :"" }  
                <button class="btn btn-info"onClick={this.restart.bind(this)}>Click</button> to Start New Game.
            </div>
            <table>
            <tbody>
                {map.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>{
                            row.map((cheese, column)=>{
                                return (
                                    <td key={column} class="chess-bg" style={this.getChessBgStyle(rowIndex, column)}onClick={this.dropChess.bind(this, rowIndex, column)}>
                                        <div style={this.getCheeseStyle(cheese)}> </div>
                                    </td>
                                );
                            })
                        }</tr>
                    )
                })}
            </tbody>
            </table>
            </div>

        );

    }

}