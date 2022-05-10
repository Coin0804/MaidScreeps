interface Plan{
    taskpool:TaskPool;
}

/**
 * 抽象任务类
 * 所有任务子类的父类
 */
 interface Task{

}

interface TaskPool{
    normal:{[taskname:string]:(...args:any) => Task},
    additional:{

    },
    emergency:{
        
    }
}