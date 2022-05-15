

/**
 * 普通任务
 */
export class NormalPraetoriumTask implements Task{
    constructor(taskType:TASKTYPES,priority:number){
        this.taskType = taskType;
        this.priority = priority;
    }
    public priority: number;
    public taskArea:AREAS;
    public taskType:TASKTYPES;
}

export class BirthWorkMaidTask extends NormalPraetoriumTask{
    constructor(workArea:AREAS,maidType:AllWorkMaid,priority:number){
        super("birth",priority);
        this.workArea = workArea;
        this.maidType = maidType;
    }

    public workArea:AREAS;
    public maidType:AllWorkMaid;

}