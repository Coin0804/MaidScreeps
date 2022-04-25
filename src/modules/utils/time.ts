import { tolog } from "./logtool";

export function getTime(original = true){
    let cpu = Game.cpu.getUsed();
    let hours = 6+_.floor(cpu/2);
    let min = _.floor((cpu*30)%60);
    let t = `${hours}:${min<10?'0'+min : min }`;
    if(original) return tolog(t+`(${cpu.toFixed(4)})`);
    return tolog(t);
}

export function getDate(original = false){
    
}