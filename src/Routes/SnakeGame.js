import React from "react";
import Snake from "./Snake";

export default class SnakeGame extends React.Component{
    constructor(){
        super();
        let snake = new Snake(17, this.onMove.bind(this), this.onOver.bind(this)); 
        this.state = {snake , map: snake.map, score: snake.snakeLength-5, over: true, best: 0};
        let game = this;
        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if(key === 13){
                game.start();
            }
		};
    }

    onMove(){
        const {snake} = this.state;
        this.setState({
            map: snake.map,
            score: snake.snakeLength-5
        }); 
    }

    onOver(){
        const {snake} = this.state;
        window.onkeyup = this.backupKeyUp;
        clearInterval(this.t);
        this.setState({
            over: true,
            map: snake.map,
            score: snake.snakeLength-5,
            best: Math.max(this.state.score, this.state.best)
        }); 
    }

    getStyle(col){
        let color = col ===2? 'black' : col===3? 'red' :col===0? 'white' : 'yellow';
        return {
            backgroundColor: color,
            padding: '0px',
            border: 'solid 1px gray'
        }
    }

    start(){
        let {snake} = this.state;
        let up=38, left=37, down=40, right=39;//key code
        this.backupKeyUp =  window.onkeyup;
        this.t = setInterval(function(){
            snake[snake.currDirection].apply(snake);
        }, 500);
        let curDirection = 38;
        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if(key + curDirection === 78 || key + curDirection === 76) return;
            curDirection = key;
            switch(key){
                case up: snake.currDirection = 'goUp'; break;
                case left: snake.currDirection = 'goLeft'; break;
                case down: snake.currDirection = 'goDown';  break;
                case right: snake.currDirection = 'goRight';  break;
            };
		};
        this.setState({
            over: false
        }); 
    }

    getMaskStyle(){
        let {over} = this.state;
        return {
            position: 'absolute', 
            height: '100%', 
            width: '100%', 
            padding: '10%', 
            backgroundColor:'rgba(214, 209, 208, 0.78)', 
            visibility: over?'visible':'hidden'
        }
    }

    render(){
        const {map, score, over, best} = this.state;
        return (
        <div class="row">
        <div class="col-md-12 col-xs-12 game-panel">
            <div style={{float: 'left', display:'inline-block'}}>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Score</h3>
                    </div>
                    <div class="panel-body score">
                        {score}
                    </div>
                </div>
            </div>
            <div style={{float: 'right', display:'inline-block'}}>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Best</h3>
                    </div>
                    <div class="panel-body score">
                        {best}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-xs-12 game-panel">
            <div  class="game-content">
                <div  style={this.getMaskStyle()}>
                    <h1>Press Enter or <button class="btn btn-info" onClick={this.start.bind(this)}>Click</button> To Start</h1>
                </div>
                <table class="SnakeTable" style={{border: 'solid 0px', width: '100%', height: '100%'}}>
                    <tbody>
                        {
                            map.map((row, i)=>{
                                return (
                                    <tr key={i}>
                                        {
                                            row.map((col, j) =>{
                                                return <td key={j} style={this.getStyle(col)}></td>;
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        );
    }
}
