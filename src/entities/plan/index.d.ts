type TASKTYPES = "building"|"birth";


interface Plan{
    staff:{
        [area in AREAS] ?:{
            unconditional:{
                [type in AllWorkMaid] ?:{
                    number:number,
                    priority:number
                }
            }
        }
    },
}

/**
 * 抽象任务类
 * 所有任务子类的父类
 */
 interface Task{
    taskType:TASKTYPES;
}

interface TaskPool{
    normal:{[taskname:string]:(...args:any) => Task},
    additional:{

    },
    emergency:{
        
    }
}