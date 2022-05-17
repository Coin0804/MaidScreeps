import { Tool } from "../tool/Tool";


/**
 * 普通任务
 */
export class Task{
    constructor(taskType:TASKTYPES,priority:number){
        this.taskType = taskType;
        this.priority = priority;
    }
    public priority: number;
    public taskArea:AREAS;
    public taskType:TASKTYPES;
    public state:TaskStates;
}

export class BirthWorkMaidTask extends Task{
    constructor(priority:number,detail:birthTaskDetail){
        super("birth",priority);
        this.detail = detail;
    }

    public canSpawnIn(spawnName:string){
        return !this.birthSpawns || this.birthSpawns.includes(spawnName);
    }

    public birthSpawns:string[];
    public detail:birthTaskDetail;

    public birthTool:Tool<StructureSpawn>;
}