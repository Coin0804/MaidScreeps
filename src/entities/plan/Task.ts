

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
    constructor(workArea:AREAS,maidType:AllWorkMaid,priority:number){
        super("birth",priority);
        this.workArea = workArea;
        this.maidType = maidType;
    }

    public canSpawnIn(spawnName:string){
        return !this.birthSpawns || this.birthSpawns.includes(spawnName);
    }
    public birthSpawns:string[];
    public workArea:AREAS;
    public maidType:AllWorkMaid;

}