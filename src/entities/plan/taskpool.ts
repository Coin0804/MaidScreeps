import { BirthWorkMaidTask } from "./Task";

export const defaultTaskPool = {
    normal:{
        birthWorkMaid:function(workArea:AREAS,maidType:AllWorkMaid,){
            let task = new BirthWorkMaidTask(workArea,maidType)

            return task;
        },
    },
    additional:{

    },
    emergency:{
        
    }
}