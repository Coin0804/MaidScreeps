/**
 * 各个区域的抽象接口
 */
interface AreaInterface{
    type:AREAS
    leader:AreaLeaderMaid;
    staffList:ObjectList<Staff>;
    taskList:Task[];
    letterbox:Letter[];
    tools:{
        [name:string]:Tool[]|Tool,
    }
}

type AREAS = "studyroom"|"warehouse"|"bedroom"|"kitchen"|"balcony"|"garage";
type TASKTYPES = "building";
