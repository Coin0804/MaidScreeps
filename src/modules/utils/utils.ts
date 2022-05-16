/**
 * 工具函数包
 */

import { Tool } from "@/entities/tool/Tool";

/**
 * 获取自己的用户名
 * 所有事项必须保证在有至少一个spawn的情况下进行
 */
export function getUsername(){
    if(Memory.USERNAME) return Memory.USERNAME;
    for(let name in Game.spawns){
        Memory.USERNAME = Game.spawns[name].owner.username;
        return Memory.USERNAME;
    }
    return undefined;
}

export function dicToTools<S extends AnyStructure>(type:StructureConstant,dic:{[key:string]:Structure[]}){
    return dic[type]?.map((s)=>{return new Tool<S>(s as S)});
}
