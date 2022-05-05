import { printEmphasize } from "@/modules/utils/logtool";
import MaidHead from "../maids/leaders/MaidHead";


export const projects:Project[] = [
    {// 0
        todo:function(){
            // 如果之前没有的话就要从头开始新建工作表
            // 工作表其实就是整个游戏运行的计划表，所有的工作都会从工作表中读取并展开
            // 如果已经有了工作表
            // 那么就要从工作表中恢复
            printEmphasize('迎接吧！最能“干”的女仆长！');
            global.maidHead = new MaidHead();
            // 总而言之到此时，应该已经完成了所有前期信息的收集，应该可以开始正常工作了
            return OK;
        },
        nextProject:1,
        timeneed:0
    },
    {// 1
        todo:function(){
            // TODO：回收无用的记忆，什么样的记忆是无用的？
            global.maidHead.openHerEyes();//进行日常工作
            return OK;
        },
        nextProject:undefined,
        timeneed:0
    }
];