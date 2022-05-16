type TASKTYPES = "building"|"birth";
type TaskStates = "inLine"|"inProgress";


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

// interface TaskPool{
//     normal:{[taskname:string]:(...args:any) => any},
//     additional:{

//     },
//     emergency:{
        
//     }
// }