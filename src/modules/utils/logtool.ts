/**
 * HTML注入的log优化
 * version: 0.0.1
 * 
 */

import { CONFIG } from "@/config";
import { getTime } from "./time";

const BR = '<br>';

function totext(s:string,{color = 'white',weight = 'normal',size = '15px'} = {}){
    return `<text style="color:${color};font-weight: ${weight};font-size:${size};">${s}</text>`;
}

export function tolog(s:(string|number),{color = 'white'} = {}){
    return `<text style="color:${color};font-size:10px;font-style:italic">${s}</text>`;
}


/**
 * 说话
 */
export function printSay(name:string,saying:string,color:string){
    let str = totext(name,{color:color,weight:"bolder",size:"16px"})+': “'+totext(saying)+'”';
    console.log(str);
}

export function printSoftSay(name:string,saying:string,color:string){
    let str = totext(name,{color:color,weight:"bolder",size:"16px"})+': “'+totext(saying.split('').join('~').concat("~"))+'”';
    console.log(str);
}

export function printWhisper(name:string,saying:string,color:string){
    let str = totext(name,{color:color,weight:"bolder",size:"16px"})+': “'+totext(saying,{size:"13px",weight:"lighter"})+'”';
    console.log(str);
}

export function printText(...sayings:string[]){
    for(let s of sayings) console.log(totext(s));
}

export function printEmphasize(saying:string){
    printLine();
    console.log(totext(saying,{weight:'bolder',size:"17px"}));
}

export function printLine(){
    console.log(`--------------${tolog(getTime())}-------------`);
}

export function printLog(...logs:(string|number)[]){
    if(CONFIG.log.enable && CONFIG.log.detail.log.enable){
        console.log(logs.map((l) => {return tolog(l)}).join(BR));
    }
}

export function printLineLog(...logs:(string|number)[]){
    if(CONFIG.log.enable && CONFIG.log.detail.log.enable){
        printLine();
        printLog(...logs);
    }
}

export function printDebug(...logs:(string|number)[]){
    if(CONFIG.log.enable && CONFIG.log.detail.debug.enable){
        console.log(logs.map((l) => {return tolog(l,{color:"red"})}).join(BR));
    }
}

export function printErr(e:Error){
    if(CONFIG.log.enable) console.log(`<text style="color:#ef9a9a"><br>${_.escape(e.stack)}</text>`);
}