export default class Othello{
    constructor(){
        this.initGame();
        
    }

    get computer(){
        return 0;
    }
    get player(){
        return 1;
    }

    get ComputerScore(){
        return this.count(this.computer);
    }

    get PlayerScore(){
        return this.count(this.player);
    }

    get map(){
        return this._map;
    }

    initGame(){
        this._map = Array.apply(null, Array(8)).map(()=>{
            return Array.apply(null, Array(8));
        });
        this._map[3][3] = this._map[4][4] = this.player;
        this._map[3][4] = this._map[4][3] = this.computer;
        this.over = false;
        this.winner = null;
        this.latest = null;
    }

    mapHelper(pos, chess){
        if(this.map[pos[0]] === undefined) return;
        if(chess=== undefined) return this.map[pos[0]][pos[1]];
        else this.map[pos[0]][pos[1]] = chess;
    }

   computerDrop(){
       let pos=null, max=-1;
       this._map.forEach((row, i)=>{
           row.forEach((val, col)=>{
               if(this.mapHelper([i, col])===undefined){
                    let eat = this.drop([i, col], this.computer);
                    if(eat > max){
                    	max = eat;
                    	pos = [i, col];
                    }
               }             
           }, this);
       }, this);
       if(max>0) this.drop(pos, this.computer, true);
       else this.gameOver(this.player);
       if(!this.checkerUser()){
           this.gameOver(this.computer);
       };
   }

   checkerUser(){
       let flag = false;
        this._map.forEach((row, i)=>{
           row.forEach((val, col)=>{
               if(this.mapHelper([i, col])===undefined){
                    let eat = this.drop([i, col], this.player);
                    if(eat > 0){
                    	flag = true;
                    }
               }             
           }, this);
       }, this);
       return flag
   }

   drop(pos, chess, drop){
        let eat = [];
        if(this.mapHelper(pos)!==undefined) return 0;
        eat = eat.concat(this.traceLeft(pos, chess));
        eat = eat.concat(this.traceRight(pos, chess));
        eat = eat.concat(this.traceUp(pos, chess));
        eat = eat.concat(this.traceDown(pos, chess));
        eat = eat.concat(this.traceRightUp(pos, chess));
        eat = eat.concat(this.traceRightDown(pos, chess));
        eat = eat.concat(this.traceLeftUp(pos, chess));
        eat = eat.concat(this.traceLeftDown(pos,chess));
        if(eat.length>0 && drop){
            this.mapHelper(pos, chess);
            this.latest = pos;
            for(let i in eat){ this.mapHelper(eat[i], chess); }
            let count0 = this.count(chess), count1 = this.count(1-chess);
            if(count0 + count1 === this.map.length * this.map.length) this.gameOver(count0>count1?chess : 1-chess);
        }
        return eat.length;
    }

    isLegal(pos, member){
        return this.drop(pos, member, false) >0;
    }

    gameOver(winner){
        this.over = true;
        this.winner = winner;
    }

    count(number){
       return this._map.reduce((pre, val)=>{
           return pre + val.reduce((p, v) =>{
               return p + (v===number?0:1);
           },0);
       },0);
    }

    trace(pos, chess, nextStep){
        let poses = [], flag = false;
        for(let next = nextStep(pos); this.mapHelper(next)!=undefined; next = nextStep(next)){
            if(this.mapHelper(next) === chess) {flag = true; break;}
            poses.push([next[0], next[1]]);
        }
        return flag?poses:[];
    }

    traceLeft(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0], p[1]-1];
        });
    }

    traceRight(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0], p[1]+1];
        });
    }

    traceUp(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]-1, p[1]];
        });
    }
    traceDown(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]+1, p[1]];
        });
    }

    traceLeftUp(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]-1, p[1]-1];
        });
    }

    traceRightUp(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]-1, p[1]+1];
        });
    }

    traceLeftDown(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]+1, p[1]-1];
        });
    }

    traceRightDown(pos, chess){
        return this.trace(pos, chess, (p)=>{
            return [p[0]+1, p[1]+1];
        });
    }

}