export default class Snake{
    // 1 is blocker,  2 as snake, 3 as food.
    constructor(size, onMove, onOver){
        this._size = size;
        this._over = false;
        this.initSnake();
        this._onMove = onMove;
        this._onOver = onOver;
    }

    get map(){
        return this._map;
    }

    get currDirection(){
        return this._currDirection;
    }

    set currDirection(dir){
        this._currDirection = dir;
    }

    get over(){
        return this._over;
    }

    get snakeLength(){
        return this.snake.length;
    }

    initSnake(){
        let size = this._size;
        this._map = Array.apply(null, Array(size)).map(()=>{
            return Array.apply(null, Array(size)).map(()=>{return 0});
        }); 
        this._currDirection = 'goUp'
        var start = [size-1 ,0];
        this.snake = [];
        for(let i=0; i<5; i++){
            this.mapHelper(start, 2);
            this.snake.push(start.concat([]));
            start[0]--;
        }
        start[0]++;
        this.newFood(); 
    }

    newFood(){
        var legs = [];
        for(let i in this._map){
            for(let j in this._map[i]){
                if(this._map[i][j] === 0) legs.push([i, j]);
            }
        }
        this.mapHelper(legs[this.random(0, legs.length-1)], 3);
    }

    random(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    mapHelper(array, val){
        if(this._map[array[0]] === undefined ||  this._map[array[0]][array[1]] === undefined) return undefined;
        if(val!=undefined) this._map[array[0]][array[1]] = val;
        return this._map[array[0]][array[1]];
        
    }

    go(next){
        let grow = this.mapHelper(next) === 3; // if next pixel is food, snake will grow up
        if(this.mapHelper(next)=== undefined || this.mapHelper(next)===1 || this.mapHelper(next)===2) {
            return this.gameOver();
        }
        if(!grow){ // cut the tail 
            this.mapHelper(this.snake.shift(), 0);
        }else{
            this.newFood();
        }
        this.mapHelper(next, 2);
        this.snake.push(next);
        if(typeof this._onMove === 'function'){
            this._onMove();
        }
    }

    goUp(){
        let snakeHead = this.snake[this.snake.length-1];
        this.go([snakeHead[0]-1, snakeHead[1]]);
    }

    goLeft(){
        let snakeHead = this.snake[this.snake.length-1];
        this.go([snakeHead[0], snakeHead[1]-1]);
    }

    goRight(){
        let snakeHead = this.snake[this.snake.length-1];
        this.go([snakeHead[0], snakeHead[1]+1]);
    }

    goDown(){
        let snakeHead = this.snake[this.snake.length-1];
        this.go([snakeHead[0]+1, snakeHead[1]]);
    }

    gameOver(){
        console.log("game over");
        this._over = true;
        this.initSnake();
        if(typeof this._onOver === 'function'){
            this._onOver();
        }
    }

}