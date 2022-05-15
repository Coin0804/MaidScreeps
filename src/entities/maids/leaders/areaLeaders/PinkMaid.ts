import { Bedroom, Praetorium } from "@/entities/areas/Praetorium";
import { TaskLetter } from "@/entities/letter/Letter";
import { BirthWorkMaidTask } from "@/entities/plan/Task";
import { Tool } from "@/entities/tool/Tool";
import { TaskList } from "@/modules/containers/containers";
import { printDebug, printSay } from "@/modules/utils/logtool";
import { dicToTools } from "@/modules/utils/utils";
import { AreaLeaderMaid } from "./abstract";

/**
 * 主人这么想要看光光吗？
 * 那，看吧~❤
 */
export default class PinkMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `PinkMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.bedroom;
        this.area.leader = this;
    }

    public doPerpare(): ReturnCode {
        this.area.taskList = new TaskList();
        const allBedRoomStructures = this.praetorium.house.getRoom()
        .find(FIND_MY_STRUCTURES,{filter:(s)=>{
            return s.structureType == STRUCTURE_EXTENSION 
            || s.structureType == STRUCTURE_SPAWN
            || s.structureType == STRUCTURE_POWER_SPAWN
        }});
        const dic = _.groupBy(allBedRoomStructures,(s) => {return s.structureType});
        const extensionTools = dicToTools(STRUCTURE_EXTENSION,dic);
        const spawnTools = dicToTools(STRUCTURE_SPAWN,dic);
        const powerSpawnTools = dicToTools(STRUCTURE_POWER_SPAWN,dic);
        this.area.tools = {
            all:[].concat(extensionTools,spawnTools,powerSpawnTools),
            spawns:spawnTools,
            extensions:extensionTools,
            powerSpawn:powerSpawnTools?.[0]
        }
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        let err = this.readLetters();
        if(err != OK) printDebug(`${this.name} readLetter error: ${err}`);
        err = this.doBirthTask()
        return err;
    }

    public readLetters(): ReturnCode {
        printDebug(`${this.name}:${this.area.letterbox.length} letters to read.`);
        while(this.area.letterbox.length > 0){
            let l = this.area.letterbox.pop();
            if(l.type == "task"){
                let letter:TaskLetter = l as TaskLetter;
                if(letter.work == "birth"){
                    let length = this.checkTask(letter.from.area.type,letter.detail.maidType);
                    if(length > letter.detail.number){
                        let task = new BirthWorkMaidTask(letter.from.area.type,letter.detail.maidType,letter.priority);
                        this.area.taskList.add(task);
                        printDebug(`one birth task: ${JSON.stringify(task)} add to list resent tasks : ${this.area.taskList.all.length}`)
                    }
                }
            }
        }
        return OK;
    }

    private checkTask(area:AREAS,maidType:MaidType):number{
        return this.area.taskList.getTasksByType("birth").filter((t)=>{
            const task = t as BirthWorkMaidTask;
            return task.taskArea==area && task.maidType==maidType;
        }).length;
    }

    private doBirthTask():ReturnCode{
        
        for(let i in this.area.taskList.getTasksByType("birth")){

        }
        return OK;
    }


    public say(saying: string): void {
        printSay(this.name,saying,"pink");
    }

    public area: Bedroom;
}