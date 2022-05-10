

/**
 * 普通任务
 */
export class NormalPraetoriumTask implements Task{
    constructor(taskArea:AREAS){
        this.taskArea = taskArea;
    }
    public taskArea:AREAS;
    public taskType:TASKTYPES;
}

export class BirthWorkMaidTask extends NormalPraetoriumTask{
    constructor(workArea:AREAS,maidType:AllWorkMaid){
        super("bedroom");
        this.workArea = workArea;
        this.maidType = maidType;
    }

    public workArea:AREAS;
    public maidType:AllWorkMaid;

}