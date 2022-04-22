export function getUsername(){
    if(Memory.USERNAME) return Memory.USERNAME;
    for(let name in Game.spawns){
        Memory.USERNAME = Game.spawns[name].owner.username;
        return Memory.USERNAME;
    }
    return undefined;
}