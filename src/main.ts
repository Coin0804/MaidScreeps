import { projects } from "./entities/schedule/Project";
import Schedule from "./entities/schedule/Schedule";
import ErrorHandler from "./modules/ErrorHandler";
import { printLine, printText } from "./modules/utils/logtool";
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

    }
    // 全部执行结束或超时主动终止
    if(global.maidHead){
        // 定制明天的日程
        schedule = global.maidHead.makeScheduleNextDay(schedule);
    }else{
        // 没有女仆长就一直进行一个仅包含零号项目的日程
        schedule = new Schedule(calender.getToday(),projects[0]);
    }

    if(!projectsDone){// 目前不可能发生，作为debug标志
        printLine();
        printText("今天怎么没有事情干！");
    }
    /* 主循环结束 */
});
