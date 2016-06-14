import React from "react";
import Snake from "./Snake";

export default class SnakeGame extends React.Component{
    constructor(){
        super();
        let snake = new Snake(17, this.onMove.bind(this), this.onOver.bind(this)); 
        this.state = {snake , map: snake.map, score: snake.snakeLength, over: true};
    }

    onMove(){
        const {snake} = this.state;
        this.setState({
            map: snake.map,
            score: snake.snakeLength
        }); 
    }

    onOver(){
        const {snake} = this.state;
        window.onkeyup = this.backupKeyUp;
        clearInterval(this.t);
        this.setState({
            over: true,
            map: snake.map,
            score: snake.snakeLength
        }); 
    }

    getStyle(col){
        let color = col ===2? 'black' : col===3? 'red' :col===0? 'white' : 'yellow';
        return {
            backgroundColor: color,
            width: '20px',
            height: '20px',
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

    render(){
        const {map, score, over} = this.state;
        return (
        <div>
        <button onClick={this.start.bind(this)} style={{enable: over}}>Start</button>
        <div>Score: {score}</div>
        <table class="SnakeTable" style={{border: 'solid 0px'}}>
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
        );
    }
}
