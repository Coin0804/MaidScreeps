/**
 * 各个区域的抽象接口
 */
interface Area{
    leader:LeaderMaid;
    staffList:Staff[];
    taskList:Task[];
    tools:{
        [name:string]:Tool[]|Tool,
    }
}





type AREAS = "studyroom"|"warehouse"|"bedroom"|"kitchen"|"balcony";
type TASKTYPES = "building";
