import MaidHead from "./entities/maids/leaders/MaidHead";
import ErrorHandler from "./modules/ErrorHandler";

import { printEmphasize, printLine } from "./modules/utils/logtool";


//获取模组



// global.startTick = Game.time;
printEmphasize('迎接吧！最能“干”的女仆长！');
global.maidHead = new MaidHead();// 如果之前没有的话就要从头开始新建工作表
// 工作表其实就是整个游戏运行的计划表，所有的工作都会从工作表中读取并展开
// 如果已经有了工作表
// 那么就要从工作表中恢复

// 总而言之到此时，应该已经完成了所有前期信息的收集，应该可以开始正常工作了

// 


export const loop = ErrorHandler(function(){
    /* 主循环开始 */
    // const workdays = Game.time - global.startTick;
    // printLine();

    // TODO：回收无用的记忆，什么样的记忆是无用的？

    global.maidHead.openHerEyes();//进行日常工作


});
