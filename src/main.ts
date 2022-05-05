import { projects } from "./entities/schedule/Project";
import Schedule from "./entities/schedule/Schedule";
import ErrorHandler from "./modules/ErrorHandler";
import { printLine, printLog, printText } from "./modules/utils/logtool";
import { Calendar } from "./modules/utils/time";

//导入依赖

//极小初始化
const calender = new Calendar();
global.calender = calender;// 全局日历
let schedule = new Schedule(1,projects[0]);// 初始化零号日程
/* 主循环开始 */
export const loop = ErrorHandler(function(){
    /**
     * 又到了新的一天
     */
    calender.nextDay();// 天数+1
    /**
     * 今天要做什么事情呢？
     */
    let projectsDone = 0 // 定义完成项目数
    // 继承之前制定的日程
    if(schedule.presentDate+1 == calender.getToday()){
        schedule.projectToday = schedule.projectTomorrow;
        schedule.projectTomorrow = [];
        schedule.presentDate = calender.getToday();
    }
    // 查看日程安排并执行
    if(schedule.presentDate == calender.getToday()){
        for(let i=0;i<schedule.projectToday.length;i++){// 根据预期，中间的代码段应该会每次都执行一次，所以只要有插入就不会停止
            let item = schedule.projectToday[i];
            if(item.done) continue;// 一般不可能发生，先放着
            if(item.project.timeneed+Game.cpu.getUsed() < Game.cpu.limit || item.project.nolimit){
                printLine();
                printLog(`开始执行第 ${i} 个项目`);
                let err = item.project.todo();// TODO:这里应该独立处理异常，代办
                if(err == OK) item.done = true;
                else printLog(`发生问题，返回代码${err}`);
                printLine();
                printLog(`项目 ${i} 执行结束`);
                // 完成执行的项目如果有指定的后续的话，就会在最后插入
                // 这里决定了如果下一个项目指向了0号项目，那么一定不会被执行。
                //0号项目只能作为日程的起点，不能作为后续。
                if(item.project.nextProject){ 
                    schedule.addToToday(projects[item.project.nextProject]);
                }
            }
        }
        printLog(`今天所有项目均已执行完毕`);
    }
    // 全部执行结束或超时主动终止
    if(global.maidHead){
        // 定制明天的日程
        schedule = global.maidHead.makeScheduleNextDay(schedule);
    }else{
        // 没有女仆长就一直进行一个仅包含零号项目的日程
        schedule = new Schedule(calender.getToday(),projects[0]);
    }

    if(!projectsDone){// 一般不可能发生，作为debug标志
        printLine();
        printText("今天怎么没有事情干！");
    }
    /* 主循环结束 */
});
