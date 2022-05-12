import { defaultTaskPool } from "./taskpool";

/**
 * 计划列表，目前作为配置文件
 */
export const Plans:{[name:string]:Plan} = {
    default:{
        staff:{
            garage:{
                unconditional:{
                    balanced:{
                        number:1,
                        priority:10
                    }
                }
            }
        }
    },
}

