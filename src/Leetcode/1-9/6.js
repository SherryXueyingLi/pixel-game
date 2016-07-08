/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rt=[];
    for(let i=0; i<numRows; i++){
        if(i===0 || i=== numRows-1){
            let k = 0, index = k*2*(numRows-1)+i;
            while(index < s.length){
                rt.push(s.charAt(index));
                k++;
                index = k*2*(numRows-1)+i;
            }
        }else{
            rt.push(s.charAt(i));
            let k = 1, index = k*2*(numRows-1);
            while(index-i < s.length){
                rt.push (s.charAt(index-i));
                if(index+i < s.length) rt.push(s.charAt(index+i));
                k++;
                index = k*2*(numRows-1);
            }
            
        }
    }
    return rt.join("");
};