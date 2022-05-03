/**
 * 太难了，写不来
 */
// export function bestOf<T>(array:T[],func:Function):T{

// }

// export function repeat(array:any[],time:number){
//     if(time <= 1) return array;
//     return repeat(array,Math.floor(time/2)).concat(repeat(array,Math.ceil(time/2)));
// }

export function repeat(array:any[],time:number){
    let re = [];
    for(let i=0;i<time;i++){
        for(let j=0;j<array.length;j++){
            re.push(array[j]);
        }
    }
    return re;
}


