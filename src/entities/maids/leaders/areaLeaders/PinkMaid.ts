import { Bedroom, Praetorium } from "@/entities/areas/Praetorium";
import { TaskLetter } from "@/entities/letter/Letter";
import { BirthWorkMaidTask } from "@/entities/plan/Task";
import { TaskList } from "@/modules/containers/containers";
import { printDebug, printSay } from "@/modules/utils/logtool";
import { dicToTools } from "@/modules/utils/utils";
import { BODYS } from "../../staffs/bodys/bodys";
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
        const extensionTools = dicToTools<StructureExtension>(STRUCTURE_EXTENSION,dic);
        const spawnTools = dicToTools<StructureSpawn>(STRUCTURE_SPAWN,dic);
        const powerSpawnTools = dicToTools<StructurePowerSpawn>(STRUCTURE_POWER_SPAWN,dic);
        this.area.tools = {
            all:[].concat(extensionTools,spawnTools,powerSpawnTools),
            spawns:spawnTools,
            extensions:extensionTools,
            powerSpawn:powerSpawnTools?.[0]
        }

        if(!Memory.workId){
            Memory.workId = {
                studyroom:0,
                garage:0,
                kitchen:0,
                bedroom:0,
                balcony:0,
                warehouse:0
            }
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
                        const detail:birthTaskDetail = {
                            body:BODYS.workMaid.level[this.praetorium.level][letter.detail.maidType],
                            name:`${this.praetorium.house.room}_${letter.from.area.type}_${this.generateWorkId(letter.from.area.type)}`,
                            workArea:letter.from.area.type,
                            maidType:letter.detail.maidType
                        }
                        const task = new BirthWorkMaidTask(letter.priority,detail);
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
            return task.taskArea==area && task.detail.maidType==maidType;
        }).length;
    }

    private doBirthTask():ReturnCode{
        if(!this.area.tools.spawns?.length) return ERR_NOT_FOUND;
        const spawns = this.area.tools.spawns.map((t) => {return t.get()});
        const spawning = spawns.map((s)=>{return !!s.spawning});
        this.area.taskList.sortAll();
        const birthTasks = this.area.taskList.getTasksByType("birth") as BirthWorkMaidTask[];
        for(let t in birthTasks){
            if(spawning.every(s=>!!s)) break;
            const birthTask = birthTasks[t];
            if(birthTask.state == "inLine"){
                for(let i in spawning){
                    if(!spawning[i] && birthTask.canSpawnIn(spawns[i].name)){
                        
                        let err = spawns[i].spawnCreep(birthTask.detail.body,birthTask.detail.name,{
                            memory:{team:"workMaid"},
                            energyStructures:this.energyOrder,
                            directions:birthTask.detail.dirctions
                        });
                        if(err == OK){
                            spawning[i] = true;
                            birthTask.birthTool = this.area.tools.spawns[i];
                            birthTask.state = "inProgress";
                        }
                    }
                }
            }else if(birthTask.state == "inProgress"){
                if(birthTask.birthTool.get().spawning.name == birthTask.detail.name){

                }
            }

        }
        return OK;
    }

    private generateWorkId(area:AREAS){
        return Memory.workId[area]++;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"pink");
    }

    public area: Bedroom;
    private energyOrder = [];
}