import { ERR_UNKNOW } from "@/constants";
import { printEmphasize, printErr, printLog } from "@/modules/utils/logtool";
import MaidHead from "../maids/leaders/MaidHead";


export const projects:{[name:string]:Project} = {
    hire:{
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
        nextProject:"prepare",
        timeneed:0
    },
    daily:{
        todo:function(){
            // TODO：回收无用的记忆，什么样的记忆是无用的？
            let err = global.maidHead.openHerEyes();//进行日常工作
            for(let p of global.maidHead.praetoriums){
                for(let m of p.leaders){
                    try{
                        err = m.openHerEyes();
                    }catch(e){
                        printErr(e);
                        err = ERR_UNKNOW;
                    }
                    if(err != OK) printLog(`${m.name}:工作发生问题，返回代码${err}`);
                }
            }
            return OK;
        },
        nextProject:undefined,
        timeneed:10
    },
    prepare:{
        todo:function(){
            // 调度所有的别墅，完成所有准备
            // 包括：员工名单建立，建筑名单建立，任务初始化
            global.maidHead.doPerpare();
            return OK;
        },
        nextProject:"daily",
        timeneed:10
    }
};