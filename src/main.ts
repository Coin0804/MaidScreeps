import MaidHead from "./entities/maids/leaders/MaidHead";
import ErrorHandler from "./modules/ErrorHandler";
import { printEmphasize, printLine } from "./modules/utils/logtool";

//获取模组


global.startTick = Game.time;
printEmphasize('迎接吧！最能“干”的女仆长！');
const maidHead = new MaidHead();


export const loop = ErrorHandler(function(){
    /* 主循环开始 */
    // printLine();
});
