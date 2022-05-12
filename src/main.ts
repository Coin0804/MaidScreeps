import { ERR_UNKNOW } from "./constants";
import { projects } from "./entities/schedule/projects";
import Schedule from "./entities/schedule/Schedule";
import ErrorHandler from "./modules/ErrorHandler";
import { printErr, printLine, printLineLog, printLog, printText } from "./modules/utils/logtool";
import { Calendar } from "./modules/utils/time";

// 导入依赖

// 极小初始化
const calender = new Calendar();
global.calender = calender;// 全局日历
global.projects = projects;
let schedule = new Schedule(1,projects.hire);// 初始化零号日程
/* 主循环开始 */
export const loop = ErrorHandler(function(){
    /**
     * 又到了新的一天
     */
    calender.nextDay();// 天数+1
    printLineLog(calender.getDate());
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
            if(item.project.timeneed+Game.cpu.getUsed() < Game.cpu.limit ){
                printLog(`开始执行第 ${i+1} 个项目`);
                // TODO:独立处理异常，代完善
                let err = ERR_UNKNOW;
                try {
                    err = item.project.todo();
                } catch (e) {
                    printErr(e);
                    err = ERR_UNKNOW;
                }
                
                if(err == OK){
                    item.done = true;
                    projectsDone++;
                    // 完成执行的项目如果有指定的后续的话，就会在最后插入
                    if(item.project.nextProject){ 
                        schedule.addToToday(projects[item.project.nextProject]);
                    }
                }else{
                    printLog(`发生问题，返回代码${err}`);
                } 
                printLog(`项目 ${i+1} 执行结束`);
            }
        }
        printLineLog(`今天所有项目均已执行完毕`);
    }
    // 全部执行结束或超时主动终止
    if(global.maidHead){
        // 定制明天的日程
        schedule = global.maidHead.makeScheduleNextDay(schedule);
    }else{
        // 没有女仆长就一直进行一个仅包含零号项目的日程
        schedule = new Schedule(calender.getToday(),projects.hire);
    }

    if(!projectsDone){// 一般不可能发生，作为debug标志
        printLine();
        printText("今天怎么没有事情干！");
    }
    /* 主循环结束 */
});
