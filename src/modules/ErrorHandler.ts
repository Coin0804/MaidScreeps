import { printErr } from "./utils/logtool";

export default function(loop:Function){
    return function(){
        try {
            loop();// 执行代码
        }
        catch(e){
            if(e instanceof Error){
                /**
                 * 使用自己的handler
                 * 对某些一次做特殊处理的话能极大的加强代码的健壮度
                 */
                // TODO
                printErr(e);
            }
            else throw e// 处理不了，直接抛出
        }
    }
}