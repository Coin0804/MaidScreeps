/**
 * 抽象任务类
 * 所有任务子类的父类
 */
export abstract class Task{

}


export class NormalPraetoriumTask extends Task{
    public taskArea:AREAS;
    public taskType:TASKTYPES;
}