/**
 * 工具函数包
 */

/**
 * 获取自己的用户名
 * // TODO: 真就没办法改吗……
 */
export function getUsername(){
    if(Memory.USERNAME) return Memory.USERNAME;
    for(let name in Game.spawns){
        Memory.USERNAME = Game.spawns[name].owner.username;
        return Memory.USERNAME;
    }
    return undefined;
}
